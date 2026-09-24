// Builds and mutates the flat "skill name -> rating" map that represents a
// character's skill sheet: era defaults, then Archetype grants (which
// *replace* the default per the book), then Adversity/Bonus picks (which
// *add* +20 to whatever's currently there).
import { ceBaseSkillName } from "./ceSkillRef.js";

/** Baseline entries for every non-specialty skill in the era (the ones that
 * always appear on the sheet at their default rating, even untrained). */
export function baselineSkills(era) {
  const skills = {};
  for (const s of era.skills) {
    if (s.specialty) continue;
    skills[s.name] = s.base;
  }
  return skills;
}

/** Ensure a (possibly specialty) skill display name has an entry, seeded at
 * its base skill's era default rating (0 if unknown). */
export function ensureSkill(skills, name, era) {
  if (name in skills) return skills[name];
  const base = ceBaseSkillName(name);
  const def = era.skills.find((s) => s.name === base);
  skills[name] = def ? def.base : 0;
  return skills[name];
}

/** Archetype grants *replace* the current rating (Detailed Description:
 * Archetypes -- "scores that replace the default skill ratings"). */
export function setSkillRating(skills, name, rating, era) {
  ensureSkill(skills, name, era);
  skills[name] = Math.max(skills[name], rating);
  return skills[name];
}

/** Adversity/Bonus Skill Point picks *add* to whatever's currently there. */
export function addToSkillRating(skills, name, amount, era, { cap = Infinity } = {}) {
  ensureSkill(skills, name, era);
  skills[name] = Math.min(cap, skills[name] + amount);
  return skills[name];
}
