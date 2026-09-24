import { getEra } from "../data/eras.js";
import { HARSHNESS_LEVELS, STATISTICS, rollStatistics, applyHarshnessStatBonus, statisticRolls } from "./statistics.js";
import { computeDerivedAttributes } from "./derivedAttributes.js";
import { resolveArchetypeSkillsRandom } from "./archetypeEngine.js";
import { baselineSkills, setSkillRating, addToSkillRating, ensureSkill } from "./ceSkillSheet.js";
import { resourcesBreakdown } from "./resourcesEngine.js";
import { individualBondStartingScore, communityBondStartingScore } from "./bondsEngine.js";
import { adversitySkillPickCount, applyAdversitySkillPick } from "./adversitySkillPoints.js";
import { totalBonusSkillPicks, applyBonusSkillPick, BASE_BONUS_SKILL_POINT_PICKS } from "./bonusSkillPoints.js";
import { harshMentalDamageApplies, veryHarshAdaptedApplies, rollDisorderTest, rollAdaptedAdjustment } from "./mentalDamage.js";
import { resolveCeSkillDisplayNameRandom } from "./ceSkillRef.js";
import { DISORDERS } from "../data/disorders.js";
import { SAMPLE_INDIVIDUAL_BONDS, SAMPLE_COMMUNITY_BONDS } from "../data/bondSuggestions.js";
import { rollNotation } from "./dice.js";
import { assembleCharacter } from "./characterAssembly.js";

export function defaultOptions(eraId = "modern") {
  const era = getEra(eraId);
  return {
    eraId,
    harshness: era.defaultHarshness,
    archetypeName: null, // null = pick randomly
    statisticMethod: "roll", // 'roll' | 'assign'
    name: "",
    sex: "",
  };
}

function pickRandom(list, rng) {
  return list[Math.floor(rng() * list.length)];
}

/** Generate a complete random Protagonist for the given era, honoring the
 * chosen Harshness setting. This is the "Quick Random" entry point. Bonus
 * Skill Points are spent entirely on random skills (no Resources/Bond
 * trade-ins) to keep the random path simple and predictable; the manual
 * wizard exposes the trade-in options. */
export function generateRandomCharacter(userOptions = {}, rng = Math.random) {
  const options = { ...defaultOptions(userOptions.eraId ?? "modern"), ...userOptions };
  const era = getEra(options.eraId);
  if (!HARSHNESS_LEVELS.includes(options.harshness)) throw new Error(`Unknown harshness: ${options.harshness}`);

  // Step 1: Statistics
  let stats = rollStatistics(rng);
  const harshChoice = pickRandom(["STR", "CON"], rng);
  stats = applyHarshnessStatBonus(stats, options.harshness, harshChoice);

  // Step 2: Derived Attributes (computed from post-Harshness-bonus stats,
  // before any Step 7 mental-damage stat reductions -- matches book order).
  const derived = computeDerivedAttributes(stats, options.harshness);

  // Step 3: Select Archetype
  const archetype = options.archetypeName ? era.archetypes.find((a) => a.name === options.archetypeName) : pickRandom(era.archetypes, rng);
  if (!archetype) throw new Error(`Unknown archetype: ${options.archetypeName}`);
  const skills = baselineSkills(era);
  const archetypeSkills = resolveArchetypeSkillsRandom(archetype, era, rng);
  for (const [name, rating] of Object.entries(archetypeSkills)) setSkillRating(skills, name, rating, era);

  // Step 4: Resources Rating (no bonus-point trade-ins on the random path)
  const resourcesRating = archetype.startingResources;
  const resources = { rating: resourcesRating, breakdown: resourcesBreakdown(resourcesRating) };

  // Step 5: Bonds. If the Archetype specifies a fixed Community Bond rating
  // (e.g. Cleric, Feudal Ruler), it applies to at most one Community Bond --
  // use it (or half Resources, whichever is higher) the first time a
  // Community Bond is generated.
  const bonds = [];
  let fixedCommunityBondUsed = false;
  for (let i = 0; i < archetype.bonds; i++) {
    const type = rng() < 0.5 ? "Individual" : "Community";
    if (type === "Individual") {
      bonds.push({ type, name: pickRandom(SAMPLE_INDIVIDUAL_BONDS, rng), rating: individualBondStartingScore(stats.CHA) });
    } else {
      let rating = communityBondStartingScore(resourcesRating);
      if (archetype.fixedCommunityBond != null && !fixedCommunityBondUsed) {
        rating = Math.max(rating, archetype.fixedCommunityBond);
        fixedCommunityBondUsed = true;
      }
      bonds.push({ type, name: pickRandom(SAMPLE_COMMUNITY_BONDS, rng), rating });
    }
  }
  // Guarantee the fixed Community Bond is actually granted even if every
  // random type-flip above happened to choose Individual.
  if (archetype.fixedCommunityBond != null && !fixedCommunityBondUsed) {
    const rating = Math.max(communityBondStartingScore(resourcesRating), archetype.fixedCommunityBond);
    if (bonds.length > 0) {
      const idx = Math.floor(rng() * bonds.length);
      bonds[idx] = { type: "Community", name: pickRandom(SAMPLE_COMMUNITY_BONDS, rng), rating };
    }
  }

  // Step 6: Adversity & Bonus Skill Points
  const adversityCount = adversitySkillPickCount(options.harshness);
  const adversitySkillPicks = [];
  for (let i = 0; i < adversityCount; i++) {
    const ref = pickRandom(era.adversitySkills, rng);
    const name = resolveCeSkillDisplayNameRandom(ref, era, rng);
    const newRating = applyAdversitySkillPick(ensureSkill(skills, name, era));
    skills[name] = newRating;
    adversitySkillPicks.push(name);
  }

  // Bonus Skill Points can improve any skill EXCEPT Unnatural (Part 1
  // Summary: "use the remainder to improve ANY skills (except Unnatural)").
  const bonusTotal = totalBonusSkillPicks();
  const bonusableSkillDefs = era.skills.filter((s) => s.name !== "Unnatural");
  for (let i = 0; i < bonusTotal; i++) {
    const def = pickRandom(bonusableSkillDefs, rng);
    const ref = def.specialty ? `${def.name} (Type)` : def.name;
    const name = resolveCeSkillDisplayNameRandom(ref, era, rng);
    const newRating = applyBonusSkillPick(ensureSkill(skills, name, era));
    skills[name] = newRating;
  }

  // Step 7: Mental Damage from Harsh Environments
  let mentalDamage = null;
  if (options.harshness === "Harsh") {
    if (harshMentalDamageApplies(stats.CHA, stats.POW)) {
      const bondLoss = [];
      const indices = bonds.map((_, i) => i);
      for (let i = 0; i < 2 && indices.length > 0; i++) {
        const idx = indices.splice(Math.floor(rng() * indices.length), 1)[0];
        const amount = rollNotation("1D4", rng);
        bonds[idx].rating = Math.max(0, bonds[idx].rating - amount);
        bondLoss.push({ bondIndex: idx, amount });
      }
      mentalDamage = { harshBondLoss: bondLoss, disorder: null, adapted: null };
    }
  } else if (options.harshness === "Very Harsh") {
    const disorderTest = rollDisorderTest(stats.POW, rng);
    const disorder = disorderTest.failed ? pickRandom(DISORDERS, rng).name : null;
    let adapted = null;
    if (veryHarshAdaptedApplies(stats.CHA, stats.POW)) {
      const adaptedTo = pickRandom(["Violence", "Helplessness"], rng);
      const { amount } = rollAdaptedAdjustment(adaptedTo, rng);
      if (adaptedTo === "Violence") {
        stats.CHA = Math.max(0, stats.CHA - amount);
        for (const bond of bonds) bond.rating = Math.max(0, bond.rating - amount);
      } else {
        stats.POW = Math.max(0, stats.POW - amount);
      }
      adapted = { adaptedTo, amount };
    }
    mentalDamage = { harshBondLoss: [], disorder, adapted };
  }

  return assembleCharacter({
    name: options.name,
    sex: options.sex,
    age: options.age ?? null,
    birthplace: options.birthplace,
    home: options.home,
    eraId: era.id,
    eraName: era.name,
    harshness: options.harshness,
    statistics: stats,
    statisticRolls: statisticRolls(stats),
    derived,
    archetypeName: archetype.name,
    skills,
    resources,
    bonds,
    adversitySkillPicks,
    bonusSkillPicks: { total: bonusTotal, spentOnSkills: bonusTotal, spentOnResources: 0, spentOnBonds: 0 },
    mentalDamage,
    motivations: [],
    options,
  });
}
