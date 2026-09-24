// Step 1: Determine Statistics (Part 1 - Rules of the Game).
import { roll4d6DropLowest } from "./dice.js";

export const STATISTICS = ["STR", "CON", "DEX", "INT", "POW", "CHA"];

export const ASSIGN_POINTS_TOTAL = 72;

/** Suggested point-assignment sets from "Assignable Set of Statistics". Each
 * is an unordered array of 6 values; the player assigns them to statistics
 * as they choose. */
export const ASSIGNABLE_STAT_SETS = {
  "Well-Rounded": [13, 13, 12, 12, 11, 11],
  Focused: [15, 14, 12, 11, 10, 10],
  "Highly Focused": [17, 14, 12, 10, 10, 9],
};

export const HARSHNESS_LEVELS = ["Normal(ish)", "Harsh", "Very Harsh"];

/** Roll all six statistics via 4D6-drop-lowest. */
export function rollStatistics(rng = Math.random) {
  const stats = {};
  for (const s of STATISTICS) stats[s] = roll4d6DropLowest(rng);
  return stats;
}

/** Statistic point-buy baseline: distribute ASSIGN_POINTS_TOTAL (72) points
 * however desired; this just returns an even split as a starting point for
 * a UI to let the player redistribute (72/6 = 12 each). */
export function assignPointsBaseline() {
  const per = ASSIGN_POINTS_TOTAL / STATISTICS.length;
  const stats = {};
  for (const s of STATISTICS) stats[s] = per;
  return stats;
}

/**
 * Apply the Harshness Descriptor's STR/CON bonus (Stat Adjustments for Harsh
 * Upbringings). Harsh: +1 to STR or CON (player's choice, via `choice`).
 * Very Harsh: +1 to both. Normal(ish): no change.
 */
export function applyHarshnessStatBonus(stats, harshness, choice = "STR") {
  const result = { ...stats };
  if (harshness === "Harsh") {
    if (choice !== "STR" && choice !== "CON") throw new Error('choice must be "STR" or "CON" for a Harsh upbringing.');
    result[choice] += 1;
  } else if (harshness === "Very Harsh") {
    result.STR += 1;
    result.CON += 1;
  }
  return result;
}

/** Each stat's percentile "stat test" chance is stat x 5 (STR x5, INT x5, etc). */
export function statisticRolls(stats) {
  const rolls = {};
  for (const s of STATISTICS) rolls[s] = stats[s] * 5;
  return rolls;
}

const DISTINGUISHING_FEATURE_TABLE = [
  { max: 4, label: "3–4" },
  { max: 8, label: "5–8" },
  { max: 12, label: "9–12 (Average)" },
  { max: 16, label: "13–16" },
  { max: Infinity, label: "17–18" },
];

/** Which band of the Distinguishing Features table a statistic value falls into. */
export function distinguishingFeatureBand(value) {
  const row = DISTINGUISHING_FEATURE_TABLE.find((r) => value <= r.max);
  return row.label;
}
