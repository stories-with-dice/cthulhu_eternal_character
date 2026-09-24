// Step 3: Select Archetype -- resolves an Archetype's fixed "archetypal
// skills" and its "choose N of the following" bonus pool into a flat map
// of concrete skill display name -> rating. Unlike BRP, each skill here
// already carries its own flat percentage (no point pool to allocate).
import { resolveCeSkillDisplayNameRandom, resolveCeSkillDisplayNameManual, parseCeSkillRef } from "./ceSkillRef.js";

function pickRandomDistinct(pool, count, rng) {
  const working = [...pool];
  const chosen = [];
  for (let i = 0; i < count && working.length > 0; i++) {
    const idx = Math.floor(rng() * working.length);
    chosen.push(working.splice(idx, 1)[0]);
  }
  return chosen;
}

/** Options in the bonus pool whose ref is a *concrete* (non-"(Type)") skill
 * already granted by the fixed archetypal list are excluded, since you
 * "already have" that exact skill. Open/Type refs are never excluded here,
 * since picking them again yields a different specialty. */
function filterBonusPool(archetype) {
  const fixedRefs = new Set(archetype.archetypalSkills.map((s) => s.ref));
  return archetype.bonusChoice.options.filter((opt) => {
    const { specialty } = parseCeSkillRef(opt.ref);
    if (specialty == null) return true; // "(Type)" or bare skill: never pre-excluded
    return !fixedRefs.has(opt.ref);
  });
}

/** Randomly resolve an Archetype into a flat skills map (name -> rating). */
export function resolveArchetypeSkillsRandom(archetype, era, rng = Math.random) {
  const skills = {};
  for (const { ref, rating } of archetype.archetypalSkills) {
    const name = resolveCeSkillDisplayNameRandom(ref, era, rng);
    skills[name] = Math.max(skills[name] ?? 0, rating);
  }
  const pool = filterBonusPool(archetype);
  const picks = pickRandomDistinct(pool, archetype.bonusChoice.count, rng);
  for (const { ref, rating } of picks) {
    let name = resolveCeSkillDisplayNameRandom(ref, era, rng);
    let attempts = 0;
    while (name in skills && attempts < 20) {
      name = resolveCeSkillDisplayNameRandom(ref, era, rng);
      attempts++;
    }
    skills[name] = Math.max(skills[name] ?? 0, rating);
  }
  return skills;
}

/**
 * Manually resolve an Archetype from the player's own picks.
 * @param {object} archetype
 * @param {object} era
 * @param {{ref:string, chosenBase?:string, chosenSpecialty?:string}[]} bonusPicks
 *   exactly `archetype.bonusChoice.count` entries, each the chosen option's
 *   ref plus any base/specialty choice it needs.
 * @param {Record<string,{chosenBase?:string, chosenSpecialty?:string}>} fixedChoices
 *   base/specialty choices for archetypal skill refs that need them, keyed
 *   by ref string.
 */
export function resolveArchetypeSkillsManual(archetype, era, bonusPicks, fixedChoices = {}) {
  if (bonusPicks.length !== archetype.bonusChoice.count) {
    throw new Error(`Choose exactly ${archetype.bonusChoice.count} bonus skills (currently ${bonusPicks.length}).`);
  }
  const skills = {};
  for (const { ref, rating } of archetype.archetypalSkills) {
    const choice = fixedChoices[ref] ?? {};
    const name = resolveCeSkillDisplayNameManual(ref, era, choice);
    if (!name) throw new Error(`Missing a specialty choice for "${ref}".`);
    skills[name] = Math.max(skills[name] ?? 0, rating);
  }
  const pool = filterBonusPool(archetype);
  const poolRefs = new Set(pool.map((o) => o.ref));
  for (const pick of bonusPicks) {
    if (!poolRefs.has(pick.ref)) throw new Error(`"${pick.ref}" isn't one of the offered bonus options.`);
    const option = pool.find((o) => o.ref === pick.ref);
    const name = resolveCeSkillDisplayNameManual(pick.ref, era, pick);
    if (!name) throw new Error(`Missing a specialty choice for "${pick.ref}".`);
    skills[name] = Math.max(skills[name] ?? 0, option.rating);
  }
  return skills;
}
