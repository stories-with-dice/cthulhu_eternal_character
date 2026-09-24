import { test } from "node:test";
import assert from "node:assert/strict";
import {
  damageBonus,
  hitPoints,
  willpowerPoints,
  startingSanity,
  breakingPoint,
  maxSanity,
  recoverySanity,
  computeDerivedAttributes,
} from "../js/engine/derivedAttributes.js";

test("damageBonus matches the STR table", () => {
  assert.equal(damageBonus(3), -2);
  assert.equal(damageBonus(4), -2);
  assert.equal(damageBonus(5), -1);
  assert.equal(damageBonus(8), -1);
  assert.equal(damageBonus(9), 0);
  assert.equal(damageBonus(12), 0);
  assert.equal(damageBonus(13), 1);
  assert.equal(damageBonus(16), 1);
  assert.equal(damageBonus(17), 2);
  assert.equal(damageBonus(18), 2);
});

test("hitPoints is (STR+CON)/2 rounded up", () => {
  assert.equal(hitPoints(11, 10), 11); // 21/2 = 10.5 -> 11
  assert.equal(hitPoints(10, 10), 10);
});

test("willpowerPoints equals POW", () => {
  assert.equal(willpowerPoints(14), 14);
});

test("startingSanity is POW x5 for Normal(ish) and POW x4 for Harsh/Very Harsh", () => {
  assert.equal(startingSanity(10, "Normal(ish)"), 50);
  assert.equal(startingSanity(10, "Harsh"), 40);
  assert.equal(startingSanity(10, "Very Harsh"), 40);
});

test("breakingPoint is SAN minus POW", () => {
  assert.equal(breakingPoint(50, 10), 40);
});

test("maxSanity is 99 minus the Unnatural skill rating", () => {
  assert.equal(maxSanity(0), 99);
  assert.equal(maxSanity(20), 79);
});

test("recoverySanity is POW x5, capped at Max SAN", () => {
  assert.equal(recoverySanity(10, 0), 50);
  assert.equal(recoverySanity(19, 0), 95); // 95 < 99, no cap
  assert.equal(recoverySanity(19, 10), 89); // POWx5=95, maxSanity=89, capped
});

test("computeDerivedAttributes assembles every derived value from stats + harshness", () => {
  const stats = { STR: 12, CON: 12, DEX: 10, INT: 10, POW: 12, CHA: 10 };
  const result = computeDerivedAttributes(stats, "Harsh", 0);
  assert.equal(result.hitPoints, 12);
  assert.equal(result.willpowerPoints, 12);
  assert.equal(result.sanity, 48); // POWx4
  assert.equal(result.breakingPoint, 36);
  assert.equal(result.maxSanity, 99);
  assert.equal(result.recoverySanity, 60); // POWx5, uncapped
  assert.equal(result.damageBonus, 0);
});
