import { test } from "node:test";
import assert from "node:assert/strict";
import { assembleCharacter } from "../js/engine/characterAssembly.js";

const minimalParts = {
  eraId: "modern",
  eraName: "Modern Age",
  harshness: "Normal(ish)",
  statistics: { STR: 10, CON: 10, DEX: 10, INT: 10, POW: 10, CHA: 10 },
  statisticRolls: { STR: 50, CON: 50, DEX: 50, INT: 50, POW: 50, CHA: 50 },
  derived: { hitPoints: 10, willpowerPoints: 10, sanity: 50, breakingPoint: 40, maxSanity: 99, recoverySanity: 50, damageBonus: 0 },
  archetypeName: "Criminal",
  skills: { Dodge: 30 },
  resources: { rating: 5, breakdown: { atHand: 5, stowed: 0, stored: 0, checkBoxes: 1 } },
  bonds: [{ type: "Individual", name: "Best friend", rating: 10 }],
  options: { eraId: "modern" },
};

test("assembleCharacter defaults name/sex/birthplace/home to empty strings", () => {
  const character = assembleCharacter(minimalParts);
  assert.equal(character.name, "");
  assert.equal(character.sex, "");
  assert.equal(character.birthplace, "");
  assert.equal(character.home, "");
});

test("assembleCharacter defaults age to null and motivations/adversitySkillPicks to empty arrays", () => {
  const character = assembleCharacter(minimalParts);
  assert.equal(character.age, null);
  assert.deepEqual(character.motivations, []);
  assert.deepEqual(character.adversitySkillPicks, []);
});

test("assembleCharacter defaults mentalDamage to null", () => {
  const character = assembleCharacter(minimalParts);
  assert.equal(character.mentalDamage, null);
});

test("assembleCharacter passes through every supplied field unchanged", () => {
  const character = assembleCharacter({
    ...minimalParts,
    name: "Alex Rivera",
    sex: "Female",
    age: 34,
    birthplace: "Chicago",
    home: "Boston",
    mentalDamage: { harshBondLoss: [], disorder: "Paranoia", adapted: null },
    motivations: ["Find the truth"],
  });
  assert.equal(character.name, "Alex Rivera");
  assert.equal(character.sex, "Female");
  assert.equal(character.age, 34);
  assert.equal(character.birthplace, "Chicago");
  assert.equal(character.home, "Boston");
  assert.equal(character.mentalDamage.disorder, "Paranoia");
  assert.deepEqual(character.motivations, ["Find the truth"]);
});

test("assembleCharacter carries through eraId/eraName/harshness/archetypeName", () => {
  const character = assembleCharacter(minimalParts);
  assert.equal(character.eraId, "modern");
  assert.equal(character.eraName, "Modern Age");
  assert.equal(character.harshness, "Normal(ish)");
  assert.equal(character.archetypeName, "Criminal");
});
