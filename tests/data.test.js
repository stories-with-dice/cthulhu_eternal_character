import { test } from "node:test";
import assert from "node:assert/strict";
import { ERA_LIST, getEra, ADVERSITY_SKILLS } from "../js/data/eras.js";
import { parseCeSkillRef, ceRefNeedsChoice, baseNeedsSpecialty } from "../js/engine/ceSkillRef.js";
import { DISORDERS } from "../js/data/disorders.js";

test("every era has at least one archetype and a non-empty skill list", () => {
  for (const era of ERA_LIST) {
    assert.ok(era.archetypes.length > 0, era.id);
    assert.ok(era.skills.length > 0, era.id);
  }
});

test("archetype names are unique within each era", () => {
  for (const era of ERA_LIST) {
    const names = era.archetypes.map((a) => a.name);
    assert.equal(new Set(names).size, names.length, era.id);
  }
});

test("skill names are unique within each era's skill list", () => {
  for (const era of ERA_LIST) {
    const names = era.skills.map((s) => s.name);
    assert.equal(new Set(names).size, names.length, era.id);
  }
});

test("every archetype's bonusChoice.count does not exceed its options pool size", () => {
  for (const era of ERA_LIST) {
    for (const archetype of era.archetypes) {
      assert.ok(
        archetype.bonusChoice.count <= archetype.bonusChoice.options.length,
        `${era.id}/${archetype.name}: choose ${archetype.bonusChoice.count} from only ${archetype.bonusChoice.options.length} options`
      );
    }
  }
});

test("every archetypal/bonus skill ref resolves to a base skill that exists in the era's skill list (or a valid 'X or Y' pair)", () => {
  for (const era of ERA_LIST) {
    for (const archetype of era.archetypes) {
      const allRefs = [...archetype.archetypalSkills, ...archetype.bonusChoice.options].map((s) => s.ref);
      for (const ref of allRefs) {
        const { bases } = parseCeSkillRef(ref);
        for (const base of bases) {
          const found = era.skills.some((s) => s.name === base);
          assert.ok(found, `${era.id}/${archetype.name}: unknown base skill "${base}" from ref "${ref}"`);
        }
      }
    }
  }
});

test("every archetypal/bonus skill rating is a plausible percentage (1-99)", () => {
  for (const era of ERA_LIST) {
    for (const archetype of era.archetypes) {
      const all = [...archetype.archetypalSkills, ...archetype.bonusChoice.options];
      for (const { ref, rating } of all) {
        assert.ok(rating >= 1 && rating <= 99, `${era.id}/${archetype.name}/${ref}: rating ${rating} out of range`);
      }
    }
  }
});

test("every skill marked specialty:true is consistent with ceRefNeedsChoice/baseNeedsSpecialty", () => {
  for (const era of ERA_LIST) {
    for (const skill of era.skills) {
      if (skill.specialty) {
        assert.equal(baseNeedsSpecialty(skill.name, era), true, `${era.id}/${skill.name}`);
      }
    }
  }
});

test("every era's adversity skills list only references skills that exist in that era", () => {
  for (const era of ERA_LIST) {
    for (const ref of era.adversitySkills) {
      const { bases } = parseCeSkillRef(ref);
      for (const base of bases) {
        assert.ok(era.skills.some((s) => s.name === base), `${era.id}: unknown adversity skill base "${base}"`);
      }
    }
  }
});

test("ADVERSITY_SKILLS has exactly 4 skills per era, matching the SRD", () => {
  for (const list of Object.values(ADVERSITY_SKILLS)) {
    assert.equal(list.length, 4);
  }
});

test("getEra throws on an unknown era id", () => {
  assert.throws(() => getEra("steampunk"));
});

test("every archetype has a positive startingResources and a positive bonds count", () => {
  for (const era of ERA_LIST) {
    for (const archetype of era.archetypes) {
      assert.ok(archetype.startingResources >= 0, `${era.id}/${archetype.name}`);
      assert.ok(archetype.bonds >= 1, `${era.id}/${archetype.name}`);
    }
  }
});

test("DISORDERS has a unique, non-empty name and description for every entry", () => {
  const names = DISORDERS.map((d) => d.name);
  assert.equal(new Set(names).size, names.length);
  for (const d of DISORDERS) {
    assert.ok(d.description.length > 10, d.name);
  }
});
