import { test } from "node:test";
import assert from "node:assert/strict";
import { adversitySkillPickCount, applyAdversitySkillPick, ADVERSITY_SKILL_POINT_VALUE } from "../js/engine/adversitySkillPoints.js";

test("adversitySkillPickCount matches the Harshness table", () => {
  assert.equal(adversitySkillPickCount("Normal(ish)"), 0);
  assert.equal(adversitySkillPickCount("Harsh"), 1);
  assert.equal(adversitySkillPickCount("Very Harsh"), 2);
});

test("applyAdversitySkillPick adds 20 with no creation cap", () => {
  assert.equal(applyAdversitySkillPick(70), 70 + ADVERSITY_SKILL_POINT_VALUE);
  assert.equal(applyAdversitySkillPick(90), 90 + ADVERSITY_SKILL_POINT_VALUE); // no 80% cap, unlike Bonus picks
});
