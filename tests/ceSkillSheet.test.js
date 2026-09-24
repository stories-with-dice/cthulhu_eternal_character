import { test } from "node:test";
import assert from "node:assert/strict";
import { baselineSkills, ensureSkill, setSkillRating, addToSkillRating } from "../js/engine/ceSkillSheet.js";
import { getEra } from "../js/data/eras.js";

const modern = getEra("modern");

test("baselineSkills includes every non-specialty skill at its era default rating", () => {
  const skills = baselineSkills(modern);
  assert.equal(skills["Dodge"], 30);
  assert.equal(skills["Athletics"], 30);
  assert.ok(!("Art" in skills)); // specialty skills aren't baseline entries
});

test("ensureSkill seeds a new specialty skill from its base skill's default rating", () => {
  const skills = {};
  ensureSkill(skills, "Art (Sculpture)", modern);
  assert.equal(skills["Art (Sculpture)"], 0); // Art's base default is 0%
});

test("ensureSkill leaves an existing entry untouched", () => {
  const skills = { Dodge: 55 };
  ensureSkill(skills, "Dodge", modern);
  assert.equal(skills.Dodge, 55);
});

test("setSkillRating replaces (does not add to) the current rating, per the Archetype rule", () => {
  const skills = { Dodge: 30 };
  setSkillRating(skills, "Dodge", 70, modern);
  assert.equal(skills.Dodge, 70);
});

test("setSkillRating never lowers an existing higher rating", () => {
  const skills = { Dodge: 70 };
  setSkillRating(skills, "Dodge", 30, modern);
  assert.equal(skills.Dodge, 70);
});

test("addToSkillRating adds to whatever's currently there", () => {
  const skills = { Dodge: 30 };
  addToSkillRating(skills, "Dodge", 20, modern);
  assert.equal(skills.Dodge, 50);
});

test("addToSkillRating seeds from the era default when the skill isn't set yet", () => {
  const skills = {};
  addToSkillRating(skills, "Persuade", 20, modern); // Persuade base is 20
  assert.equal(skills.Persuade, 40);
});

test("addToSkillRating respects an optional cap", () => {
  const skills = { Dodge: 70 };
  addToSkillRating(skills, "Dodge", 20, modern, { cap: 80 });
  assert.equal(skills.Dodge, 80);
});
