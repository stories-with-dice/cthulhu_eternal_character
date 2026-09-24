import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveArchetypeSkillsRandom, resolveArchetypeSkillsManual } from "../js/engine/archetypeEngine.js";
import { getEra } from "../js/data/eras.js";
import { ARCHETYPES_MODERN, findModernArchetype } from "../js/data/archetypes-modern.js";
import { ARCHETYPES_MEDIEVAL, findMedievalArchetype } from "../js/data/archetypes-medieval.js";

const modern = getEra("modern");
const medieval = getEra("medieval");

test("resolveArchetypeSkillsRandom grants every fixed archetypal skill", () => {
  const criminal = findModernArchetype("Criminal");
  const skills = resolveArchetypeSkillsRandom(criminal, modern);
  assert.equal(skills["Alertness"], 40);
  assert.equal(skills["Stealth"], 60);
});

test("resolveArchetypeSkillsRandom grants exactly the bonus pool's count of additional skills", () => {
  const criminal = findModernArchetype("Criminal"); // 7 fixed, choose 3
  const skills = resolveArchetypeSkillsRandom(criminal, modern);
  assert.equal(Object.keys(skills).length, 7 + 3);
});

test("resolveArchetypeSkillsRandom works for every archetype in every era without throwing", () => {
  for (const [era, archetypes] of [[modern, ARCHETYPES_MODERN], [getEra("future"), getEra("future").archetypes], [medieval, ARCHETYPES_MEDIEVAL]]) {
    for (const archetype of archetypes) {
      assert.doesNotThrow(() => resolveArchetypeSkillsRandom(archetype, era), `${era.id}/${archetype.name}`);
    }
  }
});

test("resolveArchetypeSkillsRandom resolves the Medieval 'Art or Craft (Type)' combined ref to a concrete skill", () => {
  const artisan = findMedievalArchetype("Artisan / Craftsperson");
  const skills = resolveArchetypeSkillsRandom(artisan, medieval);
  const combined = Object.keys(skills).filter((k) => k.startsWith("Art (") || k.startsWith("Craft ("));
  assert.ok(combined.length >= 2, "expected at least two resolved Art/Craft specialties");
});

test("resolveArchetypeSkillsManual builds the exact skill set from explicit picks", () => {
  const doctor = findModernArchetype("Doctor / Nurse");
  const fixedChoices = { "Science (Type)": { chosenSpecialty: "Chemistry" } }; // matches resolveArchetypeSkillsManual's own {chosenBase, chosenSpecialty} convention
  const bonusPicks = [
    { ref: "Research", rating: 50 },
    { ref: "Psychoanalyze", rating: 50 },
  ];
  const skills = resolveArchetypeSkillsManual(doctor, modern, bonusPicks, fixedChoices);
  assert.equal(skills["First Aid"], 50);
  assert.equal(skills["Science (Chemistry)"], 40);
  assert.equal(skills["Research"], 50);
  assert.equal(skills["Psychoanalyze"], 50);
});

test("resolveArchetypeSkillsManual throws when the bonus pick count is wrong", () => {
  const doctor = findModernArchetype("Doctor / Nurse"); // needs 2
  assert.throws(() => resolveArchetypeSkillsManual(doctor, modern, [{ ref: "Research", rating: 50 }], { "Science (Type)": { chosenSpecialty: "Chemistry" } }));
});

test("resolveArchetypeSkillsManual throws when a bonus pick isn't one of the offered options", () => {
  const criminal = findModernArchetype("Criminal");
  assert.throws(() =>
    resolveArchetypeSkillsManual(criminal, modern, [
      { ref: "Not A Real Option", rating: 50 },
      { ref: "Athletics", rating: 70 },
      { ref: "Charm", rating: 60 },
    ])
  );
});

test("resolveArchetypeSkillsManual throws when a fixed skill's required specialty is missing", () => {
  const doctor = findModernArchetype("Doctor / Nurse");
  assert.throws(() => resolveArchetypeSkillsManual(doctor, modern, [{ ref: "Research", rating: 50 }, { ref: "Psychoanalyze", rating: 50 }], {}));
});

test("resolveArchetypeSkillsManual takes the higher of two grants resolving to the same skill", () => {
  // Doctor/Nurse has Science (Type) both fixed (40%) and in the bonus pool (40%);
  // if the player resolves both to the same specialty, the rating should not double-add.
  const doctor = findModernArchetype("Doctor / Nurse");
  const skills = resolveArchetypeSkillsManual(
    doctor,
    modern,
    [
      { ref: "Science (Type)", rating: 40, chosenSpecialty: "Chemistry" },
      { ref: "Research", rating: 50 },
    ],
    { "Science (Type)": { chosenSpecialty: "Chemistry" } }
  );
  assert.equal(skills["Science (Chemistry)"], 40);
});
