// Step-by-step manual Protagonist builder, mirroring Cthulhu Eternal's
// character-creation steps (Part 1 - Rules of the Game). Reuses the same
// engine functions Quick Random uses, just driven by UI state instead of an
// RNG, and hands off to the same assembleCharacter() shape so
// render.js/export.js work identically either way.
import { el, renderCharacterSheet } from "./render.js";
import { getEra, ERA_LIST } from "../data/eras.js";
import { DISORDERS } from "../data/disorders.js";
import { SAMPLE_INDIVIDUAL_BONDS, SAMPLE_COMMUNITY_BONDS } from "../data/bondSuggestions.js";
import { STATISTICS, ASSIGNABLE_STAT_SETS, ASSIGN_POINTS_TOTAL, rollStatistics, applyHarshnessStatBonus, statisticRolls, assignPointsBaseline } from "../engine/statistics.js";
import { computeDerivedAttributes } from "../engine/derivedAttributes.js";
import { resolveArchetypeSkillsManual } from "../engine/archetypeEngine.js";
import { ceRefNeedsChoice, ceSpecialtyOptionsFor, parseCeSkillRef, resolveCeSkillDisplayNameRandom, resolveCeSkillDisplayNameManual, ceBaseSkillName } from "../engine/ceSkillRef.js";
import { baselineSkills, setSkillRating, ensureSkill } from "../engine/ceSkillSheet.js";
import { resourcesBreakdown, resourcesBoostFromSacrifices } from "../engine/resourcesEngine.js";
import { individualBondStartingScore, communityBondStartingScore, communityBondBoostFromSacrifices, COMMUNITY_BOND_MAX } from "../engine/bondsEngine.js";
import { adversitySkillPickCount, applyAdversitySkillPick } from "../engine/adversitySkillPoints.js";
import { totalBonusSkillPicks, applyBonusSkillPick } from "../engine/bonusSkillPoints.js";
import { harshMentalDamageApplies, veryHarshAdaptedApplies, rollDisorderTest, rollAdaptedAdjustment } from "../engine/mentalDamage.js";
import { rollNotation } from "../engine/dice.js";
import { assembleCharacter } from "../engine/characterAssembly.js";

const $ = (id) => document.getElementById(id);

let state = null;
let stepIndex = 0;
let onFinishCallback = null;

function freshState(options) {
  return {
    eraId: options.eraId,
    harshness: options.harshness,
    name: options.name || "",
    sex: options.sex || "",
    age: options.age ?? null,
    birthplace: "",
    home: "",
    motivations: [],
    statMethod: "roll",
    baseStatistics: null,
    harshnessChoice: "STR",
    statistics: null,
    archetypeName: options.archetypeName ?? null,
    archetypeFixedChoices: {},
    archetypeBonusPicks: [],
    resourcesSacrificePicks: 0,
    resourcesZeroed: false,
    bonds: [],
    adversityPicks: [],
    bonusSkillAllocations: [],
    mentalDamage: null, // computed lazily on the Mental Damage step
  };
}

function era() {
  return getEra(state.eraId);
}

function activeSteps() {
  const steps = ["setup", "statistics", "archetype", "resourcesBonds", "skillPoints"];
  if (state.harshness !== "Normal(ish)") steps.push("mentalDamage");
  steps.push("finalDetails", "review");
  return steps;
}

const STEP_TITLES = {
  setup: "Step 0: Era & Harshness of Upbringing",
  statistics: "Step 1/2: Statistics & Derived Attributes",
  archetype: "Step 3: Select Archetype",
  resourcesBonds: "Step 4/5: Resources & Bonds",
  skillPoints: "Step 6: Adversity & Bonus Skill Points",
  mentalDamage: "Step 7: Mental Damage from Harsh Upbringing",
  finalDetails: "Step 8: Final Details",
  review: "Review & Finish",
};

function showError(msg) {
  const box = $("wizard-error");
  if (msg) {
    box.textContent = msg;
    box.hidden = false;
  } else {
    box.hidden = true;
  }
}

function currentStepId() {
  return activeSteps()[stepIndex];
}

// ------------------------------------------------------------ Step: Setup

function renderSetupStep(container) {
  const eraSelect = el(
    "select",
    {
      onchange: (e) => {
        state.eraId = e.target.value;
        state.harshness = era().defaultHarshness;
        state.archetypeName = null;
        rerenderStep();
      },
    },
    ERA_LIST.map((e) => {
      const opt = el("option", { value: e.id, text: e.name });
      if (e.id === state.eraId) opt.setAttribute("selected", "selected");
      return opt;
    })
  );
  const harshnessSelect = el(
    "select",
    { onchange: (e) => (state.harshness = e.target.value) },
    ["Normal(ish)", "Harsh", "Very Harsh"].map((h) => {
      const opt = el("option", { value: h, text: h });
      if (h === state.harshness) opt.setAttribute("selected", "selected");
      return opt;
    })
  );
  container.appendChild(
    el("div", { class: "field-row" }, [
      el("div", { class: "field" }, [el("label", { text: "Era" }), eraSelect]),
      el("div", { class: "field" }, [el("label", { text: "Harshness of Upbringing" }), harshnessSelect]),
    ])
  );
  container.appendChild(
    el("p", {
      class: "readonly-note",
      text: "Normal(ish): no mechanical effect. Harsh: +1 STR or CON, 1 Adversity Skill Point pick, possible Bond loss. Very Harsh: +1 STR and CON, 2 Adversity picks, a disorder test, and possibly Adapted status.",
    })
  );
}

// ------------------------------------------------------------ Step: Statistics

function rerollStatistics() {
  if (state.statMethod === "assign") {
    state.baseStatistics = assignPointsBaseline();
  } else {
    state.baseStatistics = rollStatistics();
  }
}

function renderStatisticsStep(container) {
  if (!state.baseStatistics) rerollStatistics();

  const methodSelect = el(
    "select",
    {
      onchange: (e) => {
        state.statMethod = e.target.value;
        rerollStatistics();
        rerenderStep();
      },
    },
    [
      { v: "roll", t: "Roll (4D6 drop lowest x6)" },
      { v: "assign", t: "Assign 72 points" },
    ].map(({ v, t }) => {
      const opt = el("option", { value: v, text: t });
      if (v === state.statMethod) opt.setAttribute("selected", "selected");
      return opt;
    })
  );
  container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Method" }), methodSelect])]));

  if (state.statMethod === "assign") {
    const presetSelect = el(
      "select",
      {
        onchange: (e) => {
          if (!e.target.value) return;
          const values = ASSIGNABLE_STAT_SETS[e.target.value];
          STATISTICS.forEach((s, i) => (state.baseStatistics[s] = values[i]));
          rerenderStep();
        },
      },
      [el("option", { value: "", text: "-- load a suggested set --" })].concat(
        Object.keys(ASSIGNABLE_STAT_SETS).map((name) => el("option", { value: name, text: name }))
      )
    );
    container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Suggested sets" }), presetSelect])]));

    const total = STATISTICS.reduce((sum, s) => sum + state.baseStatistics[s], 0);
    container.appendChild(el("p", { class: `budget-line${total !== ASSIGN_POINTS_TOTAL ? " over" : ""}`, text: `${total} / ${ASSIGN_POINTS_TOTAL} points assigned` }));

    const rows = STATISTICS.map((s) => {
      const minus = el("button", { class: "pip-btn", text: "-", onclick: () => { if (state.baseStatistics[s] > 3) { state.baseStatistics[s] -= 1; rerenderStep(); } } });
      const plus = el("button", { class: "pip-btn", text: "+", onclick: () => { if (state.baseStatistics[s] < 21) { state.baseStatistics[s] += 1; rerenderStep(); } } });
      return el("tr", {}, [el("td", { text: s }), el("td", {}, [minus]), el("td", { text: String(state.baseStatistics[s]) }), el("td", {}, [plus])]);
    });
    container.appendChild(el("table", { class: "char-edit-table" }, rows));
  } else {
    const rollBtn = el("button", { class: "btn btn-small", text: "Reroll all", onclick: () => { rerollStatistics(); rerenderStep(); } });
    container.appendChild(rollBtn);
    const rows = STATISTICS.map((s) => el("tr", {}, [el("td", { text: s }), el("td", { text: String(state.baseStatistics[s]) })]));
    container.appendChild(el("table", { class: "char-edit-table" }, rows));
  }

  if (state.harshness === "Harsh") {
    const sel = el(
      "select",
      { onchange: (e) => (state.harshnessChoice = e.target.value) },
      ["STR", "CON"].map((s) => {
        const opt = el("option", { value: s, text: s });
        if (s === state.harshnessChoice) opt.setAttribute("selected", "selected");
        return opt;
      })
    );
    container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Harsh upbringing: +1 to" }), sel])]));
  } else if (state.harshness === "Very Harsh") {
    container.appendChild(el("p", { class: "readonly-note", text: "Very Harsh upbringing: +1 to both STR and CON." }));
  }

  const preview = applyHarshnessStatBonus(state.baseStatistics, state.harshness, state.harshnessChoice);
  const derived = computeDerivedAttributes(preview, state.harshness, 0);
  const rolls = statisticRolls(preview);
  container.appendChild(
    el("div", { class: "card" }, [
      el("h3", { text: "Preview" }),
      el("p", { text: STATISTICS.map((s) => `${s} ${preview[s]} (${rolls[s]}%)`).join("  •  "), style: "font-size:0.85rem;" }),
      el("p", {
        text: `HP ${derived.hitPoints} • WP ${derived.willpowerPoints} • SAN ${derived.sanity} • BP ${derived.breakingPoint} • Max SAN ${derived.maxSanity} • Dmg Bonus ${derived.damageBonus > 0 ? "+" + derived.damageBonus : derived.damageBonus}`,
        style: "font-size:0.85rem;",
      }),
    ])
  );
}

function finalizeStatisticsStep() {
  if (state.statMethod === "assign") {
    const total = STATISTICS.reduce((sum, s) => sum + state.baseStatistics[s], 0);
    if (total !== ASSIGN_POINTS_TOTAL) throw new Error(`Assign exactly ${ASSIGN_POINTS_TOTAL} points (currently ${total}).`);
  }
  state.statistics = applyHarshnessStatBonus(state.baseStatistics, state.harshness, state.harshnessChoice);
}

// ------------------------------------------------------------ Step: Archetype

function renderArchetypeStep(container) {
  if (!state.archetypeName) state.archetypeName = era().archetypes[0].name;
  const archetype = era().archetypes.find((a) => a.name === state.archetypeName);

  const select = el(
    "select",
    {
      onchange: (e) => {
        state.archetypeName = e.target.value;
        state.archetypeFixedChoices = {};
        state.archetypeBonusPicks = [];
        rerenderStep();
      },
    },
    [...era().archetypes].sort((a, b) => a.name.localeCompare(b.name)).map((a) => {
      const opt = el("option", { value: a.name, text: a.name });
      if (a.name === state.archetypeName) opt.setAttribute("selected", "selected");
      return opt;
    })
  );
  container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Archetype" }), select])]));
  container.appendChild(el("p", { class: "readonly-note", text: `Recommended Stats: ${archetype.recommendedStats.join(", ")} • Starting Resources: ${archetype.startingResources} • Bonds: ${archetype.bonds}` }));

  const openFixed = archetype.archetypalSkills.filter((s) => ceRefNeedsChoice(s.ref, era()));
  if (openFixed.length > 0) {
    container.appendChild(el("div", { class: "choice-pool-title", text: "Choose specialties for the fixed archetypal skills:" }));
    for (const { ref, rating } of openFixed) {
      container.appendChild(renderSpecialtyPicker(ref, rating, state.archetypeFixedChoices, () => rerenderStep()));
    }
  }
  const plainFixed = archetype.archetypalSkills.filter((s) => !ceRefNeedsChoice(s.ref, era()));
  if (plainFixed.length > 0) {
    container.appendChild(el("p", { class: "readonly-note", text: `Fixed skills: ${plainFixed.map((s) => `${s.ref} ${s.rating}%`).join(", ")}` }));
  }

  // Bonus pool ("choose N of the following")
  while (state.archetypeBonusPicks.length < archetype.bonusChoice.count) state.archetypeBonusPicks.push(null);
  state.archetypeBonusPicks.length = archetype.bonusChoice.count;

  const pool = archetype.bonusChoice.options;
  const selectedRefs = state.archetypeBonusPicks.filter(Boolean).map((p) => p.ref);
  container.appendChild(el("div", { class: "choice-pool-title", text: `Choose ${archetype.bonusChoice.count} bonus skills:` }));
  container.appendChild(el("div", { class: "choice-pool-status", text: `Selected: ${selectedRefs.length} / ${archetype.bonusChoice.count}` }));

  const poolBox = el("div", { class: "choice-pool" });
  for (const option of pool) {
    const isChecked = selectedRefs.includes(option.ref);
    const row = el("div", { class: "choice-item" });
    row.appendChild(
      el("label", {}, [
        el("input", {
          type: "checkbox",
          ...(isChecked ? { checked: "checked" } : {}),
          onchange: (e) => {
            if (e.target.checked) {
              const emptyIdx = state.archetypeBonusPicks.findIndex((p) => p === null);
              if (emptyIdx === -1) {
                e.target.checked = false;
                return showError(`Choose exactly ${archetype.bonusChoice.count} bonus skills.`);
              }
              state.archetypeBonusPicks[emptyIdx] = { ref: option.ref, rating: option.rating };
            } else {
              const idx = state.archetypeBonusPicks.findIndex((p) => p?.ref === option.ref);
              if (idx >= 0) state.archetypeBonusPicks[idx] = null;
            }
            showError(null);
            rerenderStep();
          },
        }),
        ` ${option.ref} ${option.rating}%`,
      ])
    );
    if (isChecked && ceRefNeedsChoice(option.ref, era())) {
      const pick = state.archetypeBonusPicks.find((p) => p?.ref === option.ref);
      row.appendChild(renderSpecialtyPicker(option.ref, option.rating, { [option.ref]: pick }, () => rerenderStep(), pick));
    }
    poolBox.appendChild(row);
  }
  container.appendChild(poolBox);
}

/** Renders base/specialty <select>s for a ref that needs a choice, writing
 * the choice into `store[ref]` (an object with chosenBase/chosenSpecialty). */
function renderSpecialtyPicker(ref, rating, store, onChange, externalTarget) {
  const { bases, needsBaseChoice } = parseCeSkillRef(ref);
  const target = externalTarget ?? (store[ref] ??= {});
  if (!target.chosenBase) target.chosenBase = bases[0];
  store[ref] = target;

  const row = el("span", { class: "choice-item" }, [el("span", { text: `${ref} ${rating}%: ` })]);
  if (needsBaseChoice) {
    row.appendChild(
      el(
        "select",
        {
          onchange: (e) => {
            target.chosenBase = e.target.value;
            target.chosenSpecialty = null;
            onChange();
          },
        },
        bases.map((b) => {
          const opt = el("option", { value: b, text: b });
          if (b === target.chosenBase) opt.setAttribute("selected", "selected");
          return opt;
        })
      )
    );
  }
  const options = ceSpecialtyOptionsFor(target.chosenBase, era());
  if (!target.chosenSpecialty) target.chosenSpecialty = options ? options[0] : "General";
  if (options) {
    row.appendChild(
      el(
        "select",
        { onchange: (e) => { target.chosenSpecialty = e.target.value; onChange(); } },
        options.map((o) => {
          const opt = el("option", { value: o, text: o });
          if (o === target.chosenSpecialty) opt.setAttribute("selected", "selected");
          return opt;
        })
      )
    );
  } else {
    row.appendChild(
      el("input", {
        type: "text",
        value: target.chosenSpecialty,
        placeholder: "specialty",
        onchange: (e) => { target.chosenSpecialty = e.target.value || "General"; onChange(); },
      })
    );
  }
  return row;
}

function finalizeArchetypeStep() {
  const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
  const bonusPicks = state.archetypeBonusPicks.map((p) => p ?? {});
  if (bonusPicks.some((p) => !p.ref)) throw new Error(`Choose exactly ${archetype.bonusChoice.count} bonus skills.`);
  // Validate this resolves cleanly (throws with a clear message if a specialty is missing).
  resolveArchetypeSkillsManual(archetype, era(), bonusPicks, state.archetypeFixedChoices);
}

// ------------------------------------------------------------ Bonus Skill Point accounting (shared by Resources/Bonds + Skill Points steps)

function totalBonusPicksAvailable() {
  const communityBondsSetToOne = state.bonds.filter((b) => b.type === "Community" && b.setToOne).length;
  return totalBonusSkillPicks({ zeroedResources: state.resourcesZeroed, communityBondsSetToOne });
}

function bonusPicksSpentSoFar() {
  const bondSpend = state.bonds.reduce((sum, b) => sum + (b.sacrificePicks || 0), 0);
  return state.resourcesSacrificePicks + bondSpend + state.bonusSkillAllocations.length;
}

function bonusPicksRemaining() {
  return totalBonusPicksAvailable() - bonusPicksSpentSoFar();
}

// ------------------------------------------------------------ Step: Resources & Bonds

function initBondsIfNeeded() {
  const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
  if (state.bonds.length === archetype.bonds) return;
  state.bonds = Array.from({ length: archetype.bonds }, (_, i) => ({
    type: i % 2 === 0 ? "Individual" : "Community",
    name: i % 2 === 0 ? SAMPLE_INDIVIDUAL_BONDS[0] : SAMPLE_COMMUNITY_BONDS[0],
    sacrificePicks: 0,
    setToOne: false,
  }));
}

function currentResourcesRating() {
  const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
  if (state.resourcesZeroed) return 0;
  return archetype.startingResources + resourcesBoostFromSacrifices(state.resourcesSacrificePicks);
}

function currentBondRating(bond) {
  const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
  if (bond.type === "Individual") return individualBondStartingScore(state.statistics.CHA);
  if (bond.setToOne) return 1;
  let base = communityBondStartingScore(currentResourcesRating());
  if (archetype.fixedCommunityBond != null) base = Math.max(base, archetype.fixedCommunityBond);
  return Math.min(COMMUNITY_BOND_MAX, base + communityBondBoostFromSacrifices(bond.sacrificePicks));
}

function renderResourcesBondsStep(container) {
  initBondsIfNeeded();

  container.appendChild(el("h3", { text: "Resources" }));
  container.appendChild(el("p", { class: "readonly-note", text: `Base starting Resources: ${era().archetypes.find((a) => a.name === state.archetypeName).startingResources}` }));

  const zeroLabel = el("label", { class: "toggle" }, [
    el("input", {
      type: "checkbox",
      ...(state.resourcesZeroed ? { checked: "checked" } : {}),
      onchange: (e) => { state.resourcesZeroed = e.target.checked; if (e.target.checked) state.resourcesSacrificePicks = 0; rerenderStep(); },
    }),
    " Set Resources to 0 for +1 Bonus Skill Point pick",
  ]);
  container.appendChild(zeroLabel);

  if (!state.resourcesZeroed) {
    const minus = el("button", { class: "pip-btn", text: "-", onclick: () => { if (state.resourcesSacrificePicks > 0) { state.resourcesSacrificePicks--; rerenderStep(); } } });
    const plus = el("button", { class: "pip-btn", text: "+", onclick: () => { if (bonusPicksRemaining() > 0) { state.resourcesSacrificePicks++; rerenderStep(); } else showError("No Bonus Skill Point picks left to sacrifice."); } });
    container.appendChild(
      el("div", { class: "field-row" }, [
        el("span", { text: "Sacrifice picks to boost Resources: " }), minus, el("span", { text: ` ${state.resourcesSacrificePicks} ` }), plus,
      ])
    );
  }
  const resourcesRating = currentResourcesRating();
  const breakdown = resourcesBreakdown(resourcesRating);
  container.appendChild(
    el("p", { class: "readonly-note", text: `Resources rating: ${resourcesRating} (At Hand ${breakdown.atHand}, Stowed ${breakdown.stowed}, Stored ${breakdown.stored}, Check Boxes ${breakdown.checkBoxes})` })
  );

  container.appendChild(el("h3", { text: "Bonds", style: "margin-top:18px;" }));
  container.appendChild(el("p", { class: "budget-line", text: `Bonus Skill Point picks remaining: ${bonusPicksRemaining()} / ${totalBonusPicksAvailable()}` }));

  state.bonds.forEach((bond, i) => {
    const row = el("div", { class: "choice-pool" });
    const typeSelect = el(
      "select",
      { onchange: (e) => { bond.type = e.target.value; bond.name = bond.type === "Individual" ? SAMPLE_INDIVIDUAL_BONDS[0] : SAMPLE_COMMUNITY_BONDS[0]; rerenderStep(); } },
      ["Individual", "Community"].map((t) => {
        const opt = el("option", { value: t, text: t });
        if (t === bond.type) opt.setAttribute("selected", "selected");
        return opt;
      })
    );
    const suggestions = bond.type === "Individual" ? SAMPLE_INDIVIDUAL_BONDS : SAMPLE_COMMUNITY_BONDS;
    const nameSelect = el(
      "select",
      { onchange: (e) => (bond.name = e.target.value) },
      suggestions.map((s) => {
        const opt = el("option", { value: s, text: s });
        if (s === bond.name) opt.setAttribute("selected", "selected");
        return opt;
      })
    );
    row.appendChild(el("div", { class: "field-row" }, [
      el("div", { class: "field" }, [el("label", { text: `Bond ${i + 1} type` }), typeSelect]),
      el("div", { class: "field" }, [el("label", { text: "Name" }), nameSelect]),
    ]));

    if (bond.type === "Community") {
      const setOneLabel = el("label", { class: "toggle" }, [
        el("input", {
          type: "checkbox",
          ...(bond.setToOne ? { checked: "checked" } : {}),
          onchange: (e) => { bond.setToOne = e.target.checked; if (e.target.checked) bond.sacrificePicks = 0; rerenderStep(); },
        }),
        " Set to 1 for +1 Bonus Skill Point pick",
      ]);
      row.appendChild(setOneLabel);
      if (!bond.setToOne) {
        const minus = el("button", { class: "pip-btn", text: "-", onclick: () => { if (bond.sacrificePicks > 0) { bond.sacrificePicks--; rerenderStep(); } } });
        const plus = el("button", { class: "pip-btn", text: "+", onclick: () => { if (bonusPicksRemaining() > 0) { bond.sacrificePicks++; rerenderStep(); } else showError("No Bonus Skill Point picks left to sacrifice."); } });
        row.appendChild(el("div", { class: "field-row" }, [el("span", { text: "Sacrifice picks to boost this Bond: " }), minus, el("span", { text: ` ${bond.sacrificePicks} ` }), plus]));
      }
    }
    row.appendChild(el("p", { class: "readonly-note", text: `Rating: ${currentBondRating(bond)}` }));
    container.appendChild(row);
  });
}

function finalizeResourcesBondsStep() {
  if (bonusPicksRemaining() < 0) throw new Error("You've sacrificed more Bonus Skill Point picks than you have.");
}

// ------------------------------------------------------------ Step: Skill Points

function buildBaselineSkillsForWizard() {
  const skills = baselineSkills(era());
  const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
  const bonusPicks = state.archetypeBonusPicks.map((p) => p ?? {});
  try {
    const archetypeSkills = resolveArchetypeSkillsManual(archetype, era(), bonusPicks, state.archetypeFixedChoices);
    for (const [name, rating] of Object.entries(archetypeSkills)) setSkillRating(skills, name, rating, era());
  } catch {
    // archetype step not fully resolved yet; show baseline only
  }
  return skills;
}

function renderSkillPointsStep(container) {
  const adversityCount = adversitySkillPickCount(state.harshness);
  while (state.adversityPicks.length < adversityCount) state.adversityPicks.push({ ref: era().adversitySkills[0] });
  state.adversityPicks.length = adversityCount;

  container.appendChild(el("h3", { text: `Adversity Skill Points (${adversityCount} pick${adversityCount === 1 ? "" : "s"})` }));
  container.appendChild(el("p", { class: "readonly-note", text: "Each pick adds +20% to one of these skills (repeats allowed):" }));
  state.adversityPicks.forEach((pick, i) => {
    const sel = el(
      "select",
      { onchange: (e) => (pick.ref = e.target.value) },
      era().adversitySkills.map((ref) => {
        const opt = el("option", { value: ref, text: ref });
        if (ref === pick.ref) opt.setAttribute("selected", "selected");
        return opt;
      })
    );
    container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: `Pick ${i + 1}` }), sel])]));
  });

  container.appendChild(el("h3", { text: "Bonus Skill Points", style: "margin-top:18px;" }));
  container.appendChild(el("p", { class: "budget-line", text: `Picks remaining: ${bonusPicksRemaining()} / ${totalBonusPicksAvailable()} (some may already be spent on Resources/Bonds)` }));

  const addRow = el("div", { class: "add-skill-row" });
  const baseSelect = el(
    "select",
    {},
    era().skills.filter((s) => s.name !== "Unnatural").map((s) => el("option", { value: s.name, text: s.name }))
  );
  let specialtyEl = null;
  const syncSpecialty = () => {
    if (specialtyEl) addRow.removeChild(specialtyEl);
    const def = era().skills.find((s) => s.name === baseSelect.value);
    if (def?.specialty) {
      const options = ceSpecialtyOptionsFor(def.name, era());
      specialtyEl = options
        ? el("select", {}, options.map((o) => el("option", { value: o, text: o })))
        : el("input", { type: "text", placeholder: "specialty", value: "General" });
      addRow.insertBefore(specialtyEl, addBtn);
    } else {
      specialtyEl = null;
    }
  };
  baseSelect.addEventListener("change", syncSpecialty);
  const addBtn = el("button", {
    class: "btn btn-small",
    text: "+20% Add pick",
    onclick: () => {
      if (bonusPicksRemaining() <= 0) return showError("No Bonus Skill Point picks remaining.");
      const def = era().skills.find((s) => s.name === baseSelect.value);
      const ref = def.specialty ? `${def.name} (Type)` : def.name;
      const chosenSpecialty = specialtyEl ? specialtyEl.value : undefined;
      state.bonusSkillAllocations.push({ ref, chosenSpecialty });
      showError(null);
      rerenderStep();
    },
  });
  addRow.appendChild(baseSelect);
  addRow.appendChild(addBtn);
  container.appendChild(addRow);

  if (state.bonusSkillAllocations.length > 0) {
    container.appendChild(
      el(
        "ul",
        { class: "features-list" },
        state.bonusSkillAllocations.map((pick, i) => {
          const name = resolveCeSkillDisplayNameManual(pick.ref, era(), pick) ?? pick.ref;
          return el("li", {}, [`${name} `, el("button", { class: "btn-link", text: "remove", onclick: () => { state.bonusSkillAllocations.splice(i, 1); rerenderStep(); } })]);
        })
      )
    );
  }

  // Live skill sheet preview, including adversity/bonus picks made so far.
  const skills = buildBaselineSkillsForWizard();
  for (const pick of state.adversityPicks) {
    const name = resolveCeSkillDisplayNameManual(pick.ref, era(), pick) ?? ceBaseSkillName(pick.ref);
    skills[name] = applyAdversitySkillPick(ensureSkill(skills, name, era()));
  }
  for (const pick of state.bonusSkillAllocations) {
    const name = resolveCeSkillDisplayNameManual(pick.ref, era(), pick) ?? ceBaseSkillName(pick.ref);
    skills[name] = applyBonusSkillPick(ensureSkill(skills, name, era()));
  }
  container.appendChild(el("h3", { text: "Skill Sheet Preview", style: "margin-top:18px;" }));
  const grid = el("div", { class: "skills-grid" });
  for (const [name, rating] of Object.entries(skills).sort((a, b) => a[0].localeCompare(b[0]))) {
    if (rating > 0) grid.appendChild(el("div", { class: "skill-row" }, [el("span", { class: "skill-name", text: name }), el("span", { class: "skill-total", text: `${rating}%` })]));
  }
  container.appendChild(grid);
}

function finalizeSkillPointsStep() {
  if (bonusPicksRemaining() < 0) throw new Error("You've spent more Bonus Skill Point picks than you have.");
  for (const pick of state.adversityPicks) {
    if (ceRefNeedsChoice(pick.ref, era()) && !pick.chosenSpecialty) {
      pick.chosenSpecialty = ceSpecialtyOptionsFor(ceBaseSkillName(pick.ref), era())?.[0] ?? "General";
    }
  }
}

// ------------------------------------------------------------ Step: Mental Damage

function renderMentalDamageStep(container) {
  if (!state.mentalDamage) state.mentalDamage = {};
  const md = state.mentalDamage;

  if (state.harshness === "Harsh") {
    const applies = harshMentalDamageApplies(state.statistics.CHA, state.statistics.POW);
    container.appendChild(el("p", { class: "readonly-note", text: `CHA ${state.statistics.CHA}, POW ${state.statistics.POW} -- ${applies ? "below 7, so Mental Damage applies." : "both 7 or higher, so no Mental Damage."}` }));
    if (applies) {
      if (!md.harshBondIndices) md.harshBondIndices = state.bonds.slice(0, 2).map((_, i) => i);
      container.appendChild(el("p", { class: "readonly-note", text: "Choose two Bonds to each lose 1D4 (roll happens on Finish):" }));
      [0, 1].forEach((slot) => {
        const sel = el(
          "select",
          { onchange: (e) => (md.harshBondIndices[slot] = Number(e.target.value)) },
          state.bonds.map((b, i) => {
            const opt = el("option", { value: String(i), text: `${b.type}: ${b.name}` });
            if (md.harshBondIndices[slot] === i) opt.setAttribute("selected", "selected");
            return opt;
          })
        );
        container.appendChild(sel);
      });
    }
  } else if (state.harshness === "Very Harsh") {
    container.appendChild(el("p", { class: "readonly-note", text: `A POW×4 test (${state.statistics.POW * 4}%) determines a starting disorder; roll happens on Finish. If it fails, pick a disorder below (the book recommends choosing one that fits your Protagonist's trauma rather than rolling randomly):` }));
    const disorderSelect = el(
      "select",
      { onchange: (e) => (md.chosenDisorder = e.target.value) },
      DISORDERS.map((d) => {
        const opt = el("option", { value: d.name, text: d.name });
        if (d.name === md.chosenDisorder) opt.setAttribute("selected", "selected");
        return opt;
      })
    );
    if (!md.chosenDisorder) md.chosenDisorder = DISORDERS[0].name;
    container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Disorder if the test fails" }), disorderSelect])]));

    const applies = veryHarshAdaptedApplies(state.statistics.CHA, state.statistics.POW);
    container.appendChild(el("p", { class: "readonly-note", text: `CHA ${state.statistics.CHA}, POW ${state.statistics.POW} -- ${applies ? "below 10, so your Protagonist starts Adapted." : "both 10 or higher, so no Adapted status."}` }));
    if (applies) {
      if (!md.adaptedChoice) md.adaptedChoice = "Violence";
      const sel = el(
        "select",
        { onchange: (e) => (md.adaptedChoice = e.target.value) },
        ["Violence", "Helplessness"].map((t) => {
          const opt = el("option", { value: t, text: t });
          if (t === md.adaptedChoice) opt.setAttribute("selected", "selected");
          return opt;
        })
      );
      container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Adapted to" }), sel])]));
      container.appendChild(el("p", { class: "readonly-note", text: "Adapted to Violence: -1D6 CHA and every Bond. Adapted to Helplessness: -1D6 POW." }));
    }
  }
}

// ------------------------------------------------------------ Step: Final Details

function renderFinalDetailsStep(container) {
  const nameInput = el("input", { type: "text", value: state.name, oninput: (e) => (state.name = e.target.value) });
  const sexInput = el("input", { type: "text", value: state.sex, oninput: (e) => (state.sex = e.target.value) });
  const ageInput = el("input", { type: "number", value: state.age ?? "", oninput: (e) => (state.age = e.target.value ? Number(e.target.value) : null) });
  const birthplaceInput = el("input", { type: "text", value: state.birthplace, oninput: (e) => (state.birthplace = e.target.value) });
  const homeInput = el("input", { type: "text", value: state.home, oninput: (e) => (state.home = e.target.value) });

  container.appendChild(
    el("div", { class: "field-row" }, [
      el("div", { class: "field" }, [el("label", { text: "Name" }), nameInput]),
      el("div", { class: "field" }, [el("label", { text: "Sex" }), sexInput]),
      el("div", { class: "field" }, [el("label", { text: "Age" }), ageInput]),
    ])
  );
  container.appendChild(
    el("div", { class: "field-row" }, [
      el("div", { class: "field" }, [el("label", { text: "Birthplace" }), birthplaceInput]),
      el("div", { class: "field" }, [el("label", { text: "Current Home" }), homeInput]),
    ])
  );

  container.appendChild(el("p", { class: "readonly-note", text: "Up to five Motivations (things your Protagonist cares about, beyond their Bonds):" }));
  const list = el("div", {});
  state.motivations.forEach((m, i) => {
    const input = el("input", { type: "text", value: m, oninput: (e) => (state.motivations[i] = e.target.value) });
    const removeBtn = el("button", { class: "btn-link", text: "remove", onclick: () => { state.motivations.splice(i, 1); rerenderStep(); } });
    list.appendChild(el("div", { class: "field-row" }, [input, removeBtn]));
  });
  container.appendChild(list);
  if (state.motivations.length < 5) {
    container.appendChild(el("button", { class: "btn btn-small", text: "+ Add motivation", onclick: () => { state.motivations.push(""); rerenderStep(); } }));
  }
}

// ------------------------------------------------------------ Step: Review

function buildFinalCharacter() {
  const skills = baselineSkills(era());
  const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
  const bonusPicks = state.archetypeBonusPicks.map((p) => p ?? {});
  const archetypeSkills = resolveArchetypeSkillsManual(archetype, era(), bonusPicks, state.archetypeFixedChoices);
  for (const [name, rating] of Object.entries(archetypeSkills)) setSkillRating(skills, name, rating, era());

  const resourcesRating = currentResourcesRating();
  const resources = { rating: resourcesRating, breakdown: resourcesBreakdown(resourcesRating) };

  const bonds = state.bonds.map((b) => ({ type: b.type, name: b.name, rating: currentBondRating(b) }));

  const adversitySkillPicks = [];
  for (const pick of state.adversityPicks) {
    const name = resolveCeSkillDisplayNameManual(pick.ref, era(), pick) ?? resolveCeSkillDisplayNameRandom(pick.ref, era());
    skills[name] = applyAdversitySkillPick(ensureSkill(skills, name, era()));
    adversitySkillPicks.push(name);
  }

  for (const pick of state.bonusSkillAllocations) {
    const name = resolveCeSkillDisplayNameManual(pick.ref, era(), pick) ?? resolveCeSkillDisplayNameRandom(pick.ref, era());
    skills[name] = applyBonusSkillPick(ensureSkill(skills, name, era()));
  }

  let statistics = { ...state.statistics };
  let mentalDamage = null;
  if (state.harshness === "Harsh" && harshMentalDamageApplies(statistics.CHA, statistics.POW)) {
    const harshBondLoss = [];
    for (const idx of state.mentalDamage?.harshBondIndices ?? []) {
      const amount = rollNotation("1D4");
      bonds[idx].rating = Math.max(0, bonds[idx].rating - amount);
      harshBondLoss.push({ bondIndex: idx, amount });
    }
    mentalDamage = { harshBondLoss, disorder: null, adapted: null };
  } else if (state.harshness === "Very Harsh") {
    const disorderTest = rollDisorderTest(statistics.POW);
    const disorder = disorderTest.failed ? (state.mentalDamage?.chosenDisorder ?? DISORDERS[0].name) : null;
    let adapted = null;
    if (veryHarshAdaptedApplies(statistics.CHA, statistics.POW)) {
      const adaptedTo = state.mentalDamage?.adaptedChoice ?? "Violence";
      const { amount } = rollAdaptedAdjustment(adaptedTo);
      if (adaptedTo === "Violence") {
        statistics.CHA = Math.max(0, statistics.CHA - amount);
        for (const bond of bonds) bond.rating = Math.max(0, bond.rating - amount);
      } else {
        statistics.POW = Math.max(0, statistics.POW - amount);
      }
      adapted = { adaptedTo, amount };
    }
    mentalDamage = { harshBondLoss: [], disorder, adapted };
  }

  const derived = computeDerivedAttributes(statistics, state.harshness, skills["Unnatural"] ?? 0);

  return assembleCharacter({
    name: state.name,
    sex: state.sex,
    age: state.age,
    birthplace: state.birthplace,
    home: state.home,
    eraId: era().id,
    eraName: era().name,
    harshness: state.harshness,
    statistics,
    statisticRolls: statisticRolls(statistics),
    derived,
    archetypeName: archetype.name,
    skills,
    resources,
    bonds,
    adversitySkillPicks,
    bonusSkillPicks: { total: totalBonusPicksAvailable(), spentOnSkills: state.bonusSkillAllocations.length, spentOnResources: state.resourcesSacrificePicks, spentOnBonds: state.bonds.reduce((s, b) => s + (b.sacrificePicks || 0), 0) },
    mentalDamage,
    motivations: state.motivations.filter((m) => m.trim()),
    options: { eraId: state.eraId, harshness: state.harshness },
  });
}

function renderReviewStep(container) {
  const character = buildFinalCharacter();
  renderCharacterSheet(container, character, { onNameChange: (v) => (state.name = v) });
}

// ------------------------------------------------------------ Randomize-this-step

function randomizeCurrentStep() {
  const id = currentStepId();
  const rng = Math.random;
  if (id === "setup") {
    // nothing meaningful to randomize beyond what's already chosen
  } else if (id === "statistics") {
    rerollStatistics();
    if (state.harshness === "Harsh") state.harshnessChoice = rng() < 0.5 ? "STR" : "CON";
  } else if (id === "archetype") {
    const archetype = era().archetypes[Math.floor(rng() * era().archetypes.length)];
    state.archetypeName = archetype.name;
    state.archetypeFixedChoices = {};
    for (const { ref } of archetype.archetypalSkills) {
      if (ceRefNeedsChoice(ref, era())) {
        const { bases } = parseCeSkillRef(ref);
        const base = bases[Math.floor(rng() * bases.length)];
        const options = ceSpecialtyOptionsFor(base, era());
        state.archetypeFixedChoices[ref] = { chosenBase: base, chosenSpecialty: options ? options[Math.floor(rng() * options.length)] : "General" };
      }
    }
    const pool = [...archetype.bonusChoice.options].sort(() => rng() - 0.5).slice(0, archetype.bonusChoice.count);
    state.archetypeBonusPicks = pool.map(({ ref }) => {
      if (!ceRefNeedsChoice(ref, era())) return { ref };
      const { bases } = parseCeSkillRef(ref);
      const base = bases[Math.floor(rng() * bases.length)];
      const options = ceSpecialtyOptionsFor(base, era());
      return { ref, chosenBase: base, chosenSpecialty: options ? options[Math.floor(rng() * options.length)] : "General" };
    });
  } else if (id === "resourcesBonds") {
    initBondsIfNeeded();
    state.resourcesZeroed = false;
    state.resourcesSacrificePicks = 0;
    for (const bond of state.bonds) {
      bond.type = rng() < 0.5 ? "Individual" : "Community";
      bond.name = bond.type === "Individual" ? SAMPLE_INDIVIDUAL_BONDS[Math.floor(rng() * SAMPLE_INDIVIDUAL_BONDS.length)] : SAMPLE_COMMUNITY_BONDS[Math.floor(rng() * SAMPLE_COMMUNITY_BONDS.length)];
      bond.setToOne = false;
      bond.sacrificePicks = 0;
    }
  } else if (id === "skillPoints") {
    for (const pick of state.adversityPicks) {
      pick.ref = era().adversitySkills[Math.floor(rng() * era().adversitySkills.length)];
      if (ceRefNeedsChoice(pick.ref, era())) {
        const options = ceSpecialtyOptionsFor(ceBaseSkillName(pick.ref), era());
        pick.chosenSpecialty = options ? options[Math.floor(rng() * options.length)] : "General";
      }
    }
    state.bonusSkillAllocations = [];
    const skillDefs = era().skills.filter((s) => s.name !== "Unnatural");
    while (bonusPicksRemaining() > 0) {
      const def = skillDefs[Math.floor(rng() * skillDefs.length)];
      const ref = def.specialty ? `${def.name} (Type)` : def.name;
      const options = def.specialty ? ceSpecialtyOptionsFor(def.name, era()) : null;
      state.bonusSkillAllocations.push({ ref, chosenSpecialty: options ? options[Math.floor(rng() * options.length)] : def.specialty ? "General" : undefined });
    }
  } else if (id === "mentalDamage") {
    state.mentalDamage = {};
    if (state.harshness === "Harsh") {
      const indices = state.bonds.map((_, i) => i);
      state.mentalDamage.harshBondIndices = indices.sort(() => rng() - 0.5).slice(0, 2);
    } else if (state.harshness === "Very Harsh") {
      state.mentalDamage.chosenDisorder = DISORDERS[Math.floor(rng() * DISORDERS.length)].name;
      state.mentalDamage.adaptedChoice = rng() < 0.5 ? "Violence" : "Helplessness";
    }
  } else if (id === "finalDetails") {
    // nothing meaningful to randomize (free text)
  }
}

// ------------------------------------------------------------ Orchestration

const STEP_RENDERERS = {
  setup: renderSetupStep,
  statistics: renderStatisticsStep,
  archetype: renderArchetypeStep,
  resourcesBonds: renderResourcesBondsStep,
  skillPoints: renderSkillPointsStep,
  mentalDamage: renderMentalDamageStep,
  finalDetails: renderFinalDetailsStep,
  review: renderReviewStep,
};

const STEP_FINALIZERS = {
  statistics: finalizeStatisticsStep,
  archetype: finalizeArchetypeStep,
  resourcesBonds: finalizeResourcesBondsStep,
  skillPoints: finalizeSkillPointsStep,
};

function renderProgress() {
  const steps = activeSteps();
  const progress = $("wizard-progress");
  progress.innerHTML = "";
  steps.forEach((id, i) => {
    progress.appendChild(el("span", { class: `step-dot${i === stepIndex ? " current" : i < stepIndex ? " done" : ""}`, text: `${i + 1}. ${STEP_TITLES[id].replace(/^Step \S+: /, "")}` }));
  });
}

function rerenderStep() {
  const id = currentStepId();
  $("wizard-step-title").textContent = STEP_TITLES[id];
  const body = $("wizard-step-body");
  body.innerHTML = "";
  showError(null);
  renderProgress();
  STEP_RENDERERS[id](body);
  $("btn-wizard-back").disabled = stepIndex === 0;
  $("btn-wizard-randomize").hidden = id === "review";
  $("btn-wizard-next").textContent = id === "review" ? "Finish & Save →" : "Next →";
}

function goNext() {
  const id = currentStepId();
  if (id === "review") {
    onFinishCallback?.(buildFinalCharacter());
    return;
  }
  const finalizer = STEP_FINALIZERS[id];
  if (finalizer) {
    try {
      finalizer();
    } catch (err) {
      showError(err.message);
      return;
    }
  }
  const steps = activeSteps();
  if (stepIndex < steps.length - 1) {
    stepIndex += 1;
    rerenderStep();
  }
}

function goBack() {
  if (stepIndex > 0) {
    stepIndex -= 1;
    rerenderStep();
  }
}

export function startWizard(options, { onFinish, onCancel } = {}) {
  state = freshState(options);
  stepIndex = 0;
  onFinishCallback = onFinish;

  $("btn-wizard-back").onclick = goBack;
  $("btn-wizard-next").onclick = goNext;
  $("btn-wizard-randomize").onclick = () => {
    randomizeCurrentStep();
    rerenderStep();
  };
  $("btn-wizard-cancel").onclick = () => onCancel?.();

  rerenderStep();
}
