import { test } from "node:test";
import assert from "node:assert/strict";
import {
  STATISTICS,
  ASSIGN_POINTS_TOTAL,
  ASSIGNABLE_STAT_SETS,
  rollStatistics,
  assignPointsBaseline,
  applyHarshnessStatBonus,
  statisticRolls,
  distinguishingFeatureBand,
} from "../js/engine/statistics.js";

test("rollStatistics produces all six statistics in valid ranges", () => {
  const stats = rollStatistics();
  for (const s of STATISTICS) assert.ok(s in stats, `missing ${s}`);
  for (const s of STATISTICS) assert.ok(stats[s] >= 3 && stats[s] <= 18);
});

test("assignable stat sets each total less than or equal to 72 and have 6 values", () => {
  for (const [name, set] of Object.entries(ASSIGNABLE_STAT_SETS)) {
    assert.equal(set.length, 6, name);
    assert.ok(set.reduce((a, b) => a + b, 0) <= ASSIGN_POINTS_TOTAL + 6, name); // sanity bound
  }
});

test("assignPointsBaseline splits 72 evenly across six statistics", () => {
  const stats = assignPointsBaseline();
  const total = STATISTICS.reduce((sum, s) => sum + stats[s], 0);
  assert.equal(total, ASSIGN_POINTS_TOTAL);
});

test("applyHarshnessStatBonus does nothing for Normal(ish)", () => {
  const stats = { STR: 10, CON: 10 };
  const result = applyHarshnessStatBonus(stats, "Normal(ish)");
  assert.equal(result.STR, 10);
  assert.equal(result.CON, 10);
});

test("applyHarshnessStatBonus adds +1 to the chosen stat for Harsh", () => {
  const stats = { STR: 10, CON: 10 };
  assert.equal(applyHarshnessStatBonus(stats, "Harsh", "STR").STR, 11);
  assert.equal(applyHarshnessStatBonus(stats, "Harsh", "CON").CON, 11);
});

test("applyHarshnessStatBonus rejects an invalid choice for Harsh", () => {
  assert.throws(() => applyHarshnessStatBonus({ STR: 10, CON: 10 }, "Harsh", "DEX"));
});

test("applyHarshnessStatBonus adds +1 to both STR and CON for Very Harsh", () => {
  const result = applyHarshnessStatBonus({ STR: 10, CON: 10 }, "Very Harsh");
  assert.equal(result.STR, 11);
  assert.equal(result.CON, 11);
});

test("applyHarshnessStatBonus does not mutate the input", () => {
  const stats = { STR: 10, CON: 10 };
  applyHarshnessStatBonus(stats, "Very Harsh");
  assert.equal(stats.STR, 10);
});

test("statisticRolls multiplies each statistic by 5", () => {
  const rolls = statisticRolls({ STR: 10, CON: 12, DEX: 14, INT: 8, POW: 16, CHA: 9 });
  assert.equal(rolls.STR, 50);
  assert.equal(rolls.CON, 60);
  assert.equal(rolls.DEX, 70);
  assert.equal(rolls.POW, 80);
});

test("distinguishingFeatureBand matches the table bands", () => {
  assert.match(distinguishingFeatureBand(3), /3.4/);
  assert.match(distinguishingFeatureBand(10), /Average/);
  assert.match(distinguishingFeatureBand(18), /17.18/);
});
