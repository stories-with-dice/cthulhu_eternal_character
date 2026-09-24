// Step 6 (part 1): Adversity Skill Points (Detailed Description: Adversity
// Skill Points). Picks granted by a harsh upbringing, spendable only on a
// small era-specific list of skills, +20 each (repeats on the same skill
// allowed), not subject to the 80% creation cap (the book doesn't say
// Adversity picks are capped, unlike Bonus picks -- only Bonus Skill Points
// are explicitly capped at 80% during creation).
export const ADVERSITY_SKILL_POINT_VALUE = 20;

export const ADVERSITY_PICKS_BY_HARSHNESS = {
  "Normal(ish)": 0,
  Harsh: 1,
  "Very Harsh": 2,
};

export function adversitySkillPickCount(harshness) {
  return ADVERSITY_PICKS_BY_HARSHNESS[harshness] ?? 0;
}

export function applyAdversitySkillPick(currentRating) {
  return currentRating + ADVERSITY_SKILL_POINT_VALUE;
}
