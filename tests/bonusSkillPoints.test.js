import { test } from "node:test";
import assert from "node:assert/strict";
import {
  BASE_BONUS_SKILL_POINT_PICKS,
  BONUS_SKILL_POINT_VALUE,
  SKILL_CREATION_CAP,
  totalBonusSkillPicks,
  bonusSkillPicksSpent,
  applyBonusSkillPick,
} from "../js/engine/bonusSkillPoints.js";

test("totalBonusSkillPicks defaults to the base 10", () => {
  assert.equal(totalBonusSkillPicks(), BASE_BONUS_SKILL_POINT_PICKS);
});

test("totalBonusSkillPicks grants +1 for zeroing Resources", () => {
  assert.equal(totalBonusSkillPicks({ zeroedResources: true }), BASE_BONUS_SKILL_POINT_PICKS + 1);
});

test("totalBonusSkillPicks grants +1 per Community Bond set to 1", () => {
  assert.equal(totalBonusSkillPicks({ communityBondsSetToOne: 3 }), BASE_BONUS_SKILL_POINT_PICKS + 3);
});

test("totalBonusSkillPicks combines both bonuses", () => {
  assert.equal(totalBonusSkillPicks({ zeroedResources: true, communityBondsSetToOne: 2 }), BASE_BONUS_SKILL_POINT_PICKS + 3);
});

test("bonusSkillPicksSpent sums skill picks, Resources sacrifice, and Community Bond sacrifices", () => {
  assert.equal(bonusSkillPicksSpent(5, 2, [1, 3]), 11);
});

test("applyBonusSkillPick adds 20 to the current rating", () => {
  assert.equal(applyBonusSkillPick(10), 10 + BONUS_SKILL_POINT_VALUE);
});

test("applyBonusSkillPick caps at 80% during creation", () => {
  assert.equal(applyBonusSkillPick(70), SKILL_CREATION_CAP);
  assert.equal(applyBonusSkillPick(79), SKILL_CREATION_CAP);
});
