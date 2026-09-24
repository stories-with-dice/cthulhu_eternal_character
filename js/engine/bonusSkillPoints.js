// Step 6 (part 2): Bonus Skill Points (Detailed Description: Bonus Skill
// Points). Ten picks; each is worth +20 to a skill, or can be traded in for
// Resources / a Community Bond boost, or (by zeroing Resources or setting a
// Community Bond to 1) traded the other way for an extra pick.
import { resourcesBoostFromSacrifices } from "./resourcesEngine.js";
import { communityBondBoostFromSacrifices } from "./bondsEngine.js";

export const BASE_BONUS_SKILL_POINT_PICKS = 10;
export const BONUS_SKILL_POINT_VALUE = 20;
export const SKILL_CREATION_CAP = 80;

/** Total picks available: the base 10, plus one extra for each "sacrifice"
 * trade taken (Resources set to 0, or any Community Bond set to 1 -- each
 * occurrence of either grants exactly one extra pick). */
export function totalBonusSkillPicks({ zeroedResources = false, communityBondsSetToOne = 0 } = {}) {
  return BASE_BONUS_SKILL_POINT_PICKS + (zeroedResources ? 1 : 0) + communityBondsSetToOne;
}

/**
 * How many picks have been spent, given:
 * @param {number} skillPickCount number of +20 skill picks applied
 * @param {number} resourcesSacrifice picks sacrificed to boost starting Resources (0 if none)
 * @param {number[]} communityBondSacrifices picks sacrificed per Community Bond that was boosted (e.g. [2, 1] = 2 picks on one bond, 1 on another)
 */
export function bonusSkillPicksSpent(skillPickCount, resourcesSacrifice = 0, communityBondSacrifices = []) {
  return skillPickCount + resourcesSacrifice + communityBondSacrifices.reduce((sum, n) => sum + n, 0);
}

/** Apply a +20 bonus pick to a skill's current rating, capped at 80% during
 * creation (unless the GM allows otherwise, not modeled here). */
export function applyBonusSkillPick(currentRating) {
  return Math.min(SKILL_CREATION_CAP, currentRating + BONUS_SKILL_POINT_VALUE);
}

export { resourcesBoostFromSacrifices, communityBondBoostFromSacrifices };
