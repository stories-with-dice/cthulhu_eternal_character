import { test } from "node:test";
import assert from "node:assert/strict";
import {
  parseCeSkillRef,
  baseNeedsSpecialty,
  ceRefNeedsChoice,
  ceSpecialtyOptionsFor,
  resolveCeSkillDisplayNameManual,
  resolveCeSkillDisplayNameRandom,
  ceBaseSkillName,
} from "../js/engine/ceSkillRef.js";
import { getEra } from "../js/data/eras.js";

const modern = getEra("modern");
const medieval = getEra("medieval");

test("parseCeSkillRef splits a plain skill with no parens", () => {
  assert.deepEqual(parseCeSkillRef("Dodge"), { bases: ["Dodge"], specialty: null, needsBaseChoice: false });
});

test("parseCeSkillRef treats (Type) as an open specialty", () => {
  const parsed = parseCeSkillRef("Art (Type)");
  assert.deepEqual(parsed.bases, ["Art"]);
  assert.equal(parsed.specialty, null);
});

test("parseCeSkillRef treats (Another) as an open specialty", () => {
  assert.equal(parseCeSkillRef("Religion (Another)").specialty, null);
});

test("parseCeSkillRef keeps a concrete specialty as-is", () => {
  const parsed = parseCeSkillRef("Foreign Language (Latin)");
  assert.deepEqual(parsed.bases, ["Foreign Language"]);
  assert.equal(parsed.specialty, "Latin");
});

test("parseCeSkillRef splits a combined 'X or Y (Type)' ref into two base candidates", () => {
  const parsed = parseCeSkillRef("Art or Craft (Type)");
  assert.deepEqual(parsed.bases, ["Art", "Craft"]);
  assert.equal(parsed.needsBaseChoice, true);
  assert.equal(parsed.specialty, null);
});

test("baseNeedsSpecialty reflects the era's skill data", () => {
  assert.equal(baseNeedsSpecialty("Art", modern), true);
  assert.equal(baseNeedsSpecialty("Dodge", modern), false);
});

test("ceRefNeedsChoice is true for '(Type)' refs on specialty skills", () => {
  assert.equal(ceRefNeedsChoice("Art (Type)", modern), true);
});

test("ceRefNeedsChoice is true for combined base-choice refs", () => {
  assert.equal(ceRefNeedsChoice("Art or Craft (Type)", medieval), true);
});

test("ceRefNeedsChoice is false for a concrete specialty or a non-specialty skill", () => {
  assert.equal(ceRefNeedsChoice("Foreign Language (Latin)", modern), false);
  assert.equal(ceRefNeedsChoice("Dodge", modern), false);
});

test("ceSpecialtyOptionsFor returns the enumerated examples for a skill that has them", () => {
  const options = ceSpecialtyOptionsFor("Art", modern);
  assert.ok(options.includes("Sculpture"));
});

test("ceSpecialtyOptionsFor returns null for an open-ended skill with no examples", () => {
  assert.equal(ceSpecialtyOptionsFor("Foreign Language", modern), null);
});

test("resolveCeSkillDisplayNameManual builds the display name from an explicit specialty", () => {
  assert.equal(resolveCeSkillDisplayNameManual("Art (Type)", modern, { chosenSpecialty: "Sculpture" }), "Art (Sculpture)");
});

test("resolveCeSkillDisplayNameManual passes through a concrete specialty unchanged", () => {
  assert.equal(resolveCeSkillDisplayNameManual("Foreign Language (Latin)", modern), "Foreign Language (Latin)");
});

test("resolveCeSkillDisplayNameManual passes through a non-specialty skill unchanged", () => {
  assert.equal(resolveCeSkillDisplayNameManual("Dodge", modern), "Dodge");
});

test("resolveCeSkillDisplayNameManual returns null when a required specialty is missing", () => {
  assert.equal(resolveCeSkillDisplayNameManual("Art (Type)", modern), null);
});

test("resolveCeSkillDisplayNameManual returns null when a required base choice is missing", () => {
  assert.equal(resolveCeSkillDisplayNameManual("Art or Craft (Type)", medieval, { chosenSpecialty: "Blacksmith" }), null);
});

test("resolveCeSkillDisplayNameManual resolves a combined base-choice ref given both choices", () => {
  assert.equal(resolveCeSkillDisplayNameManual("Art or Craft (Type)", medieval, { chosenBase: "Craft", chosenSpecialty: "Blacksmith" }), "Craft (Blacksmith)");
});

test("resolveCeSkillDisplayNameRandom always resolves to a concrete display name", () => {
  for (let i = 0; i < 30; i++) {
    const name = resolveCeSkillDisplayNameRandom("Art (Type)", modern);
    assert.match(name, /^Art \(.+\)$/);
  }
});

test("resolveCeSkillDisplayNameRandom picks one of the candidate bases for a combined ref", () => {
  const seen = new Set();
  for (let i = 0; i < 50; i++) {
    seen.add(resolveCeSkillDisplayNameRandom("Art or Craft (Type)", medieval).split(" (")[0]);
  }
  assert.ok(seen.has("Art") || seen.has("Craft"));
  for (const base of seen) assert.ok(["Art", "Craft"].includes(base));
});

test("ceBaseSkillName strips any parenthetical specialty", () => {
  assert.equal(ceBaseSkillName("Art (Sculpture)"), "Art");
  assert.equal(ceBaseSkillName("Dodge"), "Dodge");
});
