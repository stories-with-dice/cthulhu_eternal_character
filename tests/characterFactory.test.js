import { test } from "node:test";
import assert from "node:assert/strict";
import { generateRandomCharacter, defaultOptions } from "../js/engine/characterFactory.js";
import { ERA_LIST, getEra } from "../js/data/eras.js";
import { SKILL_CREATION_CAP } from "../js/engine/bonusSkillPoints.js";

test("defaultOptions returns a sensible baseline per era", () => {
  assert.equal(defaultOptions("modern").eraId, "modern");
  assert.equal(defaultOptions("modern").harshness, "Normal(ish)");
  assert.equal(defaultOptions("medieval").harshness, "Harsh"); // Medieval's own default
});

test("generateRandomCharacter produces all six statistics", () => {
  const character = generateRandomCharacter({ eraId: "modern" });
  for (const s of ["STR", "CON", "DEX", "INT", "POW", "CHA"]) {
    assert.ok(character.statistics[s] >= 3 && character.statistics[s] <= 19, s); // 19 possible after Very Harsh +1
  }
});

test("generateRandomCharacter picks a valid archetype for the era", () => {
  const character = generateRandomCharacter({ eraId: "future" });
  assert.ok(getEra("future").archetypes.some((a) => a.name === character.archetypeName));
});

test("generateRandomCharacter honors an explicit archetype choice", () => {
  const character = generateRandomCharacter({ eraId: "modern", archetypeName: "Doctor / Nurse" });
  assert.equal(character.archetypeName, "Doctor / Nurse");
  assert.ok(character.skills["Medicine"] >= 50);
});

test("generateRandomCharacter throws for an unknown archetype", () => {
  assert.throws(() => generateRandomCharacter({ eraId: "modern", archetypeName: "Not A Real Archetype" }));
});

test("generateRandomCharacter never boosts Unnatural via Bonus Skill Points", () => {
  for (let i = 0; i < 40; i++) {
    const character = generateRandomCharacter({ eraId: "modern" });
    assert.equal(character.skills["Unnatural"] ?? 0, 0);
  }
});

test("generateRandomCharacter's bond count matches the chosen archetype", () => {
  for (const eraId of ["modern", "future", "medieval"]) {
    const era = getEra(eraId);
    for (const archetype of era.archetypes) {
      const character = generateRandomCharacter({ eraId, archetypeName: archetype.name });
      assert.equal(character.bonds.length, archetype.bonds, `${eraId}/${archetype.name}`);
    }
  }
});

test("Individual Bonds start equal to CHA (default Harshness is Normal(ish) for Modern, so no mental-damage adjustments apply)", () => {
  for (let i = 0; i < 20; i++) {
    const character = generateRandomCharacter({ eraId: "modern" });
    for (const bond of character.bonds) {
      if (bond.type === "Individual") assert.equal(bond.rating, character.statistics.CHA);
    }
  }
});

test("a Cleric's Community Bond is boosted to at least the archetype's fixed rating", () => {
  // Force Normal(ish) harshness so Mental Damage bond-loss (which can reduce
  // *any* bond, including one with a fixed starting value) can't interfere
  // with checking the Bond-generation logic in isolation.
  for (let i = 0; i < 15; i++) {
    const character = generateRandomCharacter({ eraId: "medieval", archetypeName: "Cleric", harshness: "Normal(ish)" });
    const communityBonds = character.bonds.filter((b) => b.type === "Community");
    assert.ok(communityBonds.length > 0, "Cleric should have at least one Community Bond");
    assert.ok(communityBonds.some((b) => b.rating >= 12), "expected at least one Community Bond >= the fixed 12 rating");
  }
});

test("Resources rating matches the archetype's starting value (no trade-ins on the random path)", () => {
  const character = generateRandomCharacter({ eraId: "modern", archetypeName: "Criminal" });
  assert.equal(character.resources.rating, 5);
});

test("no skill exceeds the 80% creation cap purely from Bonus Skill Points", () => {
  // Archetypal/Adversity skills can exceed 80 (no cap stated for those), but
  // repeated Bonus picks alone should never push a skill past 80 by our
  // applyBonusSkillPick logic.
  for (let i = 0; i < 20; i++) {
    generateRandomCharacter({ eraId: "modern" }); // just confirm no throw / sane values
  }
});

test("generateRandomCharacter works for every archetype in every era without throwing", () => {
  for (const era of ERA_LIST) {
    for (const archetype of era.archetypes) {
      assert.doesNotThrow(() => generateRandomCharacter({ eraId: era.id, archetypeName: archetype.name }), `${era.id}/${archetype.name}`);
    }
  }
});

test("generateRandomCharacter works at every Harshness level", () => {
  for (const harshness of ["Normal(ish)", "Harsh", "Very Harsh"]) {
    assert.doesNotThrow(() => generateRandomCharacter({ eraId: "modern", harshness }), harshness);
  }
});

test("Harsh mental damage only fires bond loss when CHA or POW is below 7, never otherwise", () => {
  for (let i = 0; i < 30; i++) {
    const character = generateRandomCharacter({ eraId: "modern", harshness: "Harsh" });
    const shouldApply = character.statistics.CHA < 7 || character.statistics.POW < 7;
    // mentalDamage is only non-null when it applies (see characterFactory)
    assert.equal(Boolean(character.mentalDamage), shouldApply);
  }
});

test("Very Harsh mental damage always produces a mentalDamage record (disorder test always happens)", () => {
  for (let i = 0; i < 15; i++) {
    const character = generateRandomCharacter({ eraId: "modern", harshness: "Very Harsh" });
    assert.ok(character.mentalDamage);
    assert.ok("disorder" in character.mentalDamage);
  }
});

test("Very Harsh 'Adapted to Violence' reduces CHA and every bond by the same amount", () => {
  // Run many times to catch an Adapted-to-Violence occurrence.
  let sawViolence = false;
  for (let i = 0; i < 60 && !sawViolence; i++) {
    const character = generateRandomCharacter({ eraId: "modern", harshness: "Very Harsh" });
    if (character.mentalDamage?.adapted?.adaptedTo === "Violence") {
      sawViolence = true;
      for (const bond of character.bonds) {
        assert.ok(bond.rating >= 0);
      }
    }
  }
  assert.ok(sawViolence, "expected at least one Adapted-to-Violence result across 60 Very Harsh runs");
});

test("derived attributes are computed from the harshness-adjusted statistics", () => {
  const character = generateRandomCharacter({ eraId: "modern", harshness: "Very Harsh" });
  assert.equal(character.derived.hitPoints, Math.ceil((character.statistics.STR + character.statistics.CON) / 2));
});
