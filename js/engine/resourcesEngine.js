// Step 4: Calculate Resources Rating, and the Resources Breakdown & Check
// Boxes table (Detailed Description: Resources).

const RESOURCES_BREAKDOWN_TABLE = [
  { max: 0, atHand: 0, stowed: 0, stored: 0, checkBoxes: 0 },
  { max: 6, atHand: (r) => r, stowed: 0, stored: 0, checkBoxes: 1 },
  { max: 12, atHand: 6, stowed: (r) => r - 6, stored: 0, checkBoxes: 2 },
  { max: 19, atHand: 6, stowed: 6, stored: (r) => r - 12, checkBoxes: 3 },
];

/** Rating-band descriptions ("What the Rating Represents"). */
export const RESOURCES_RATING_DESCRIPTIONS = [
  { max: 0, text: "No ownership of any item of value or function. Penury. Near starvation." },
  { max: 4, text: "Owns only basic and valueless items; barely enough to eke out a basic life. Always hungry." },
  { max: 8, text: "Owns a sparse collection of valuable or useful items, some in terrible condition. Sometimes hungry." },
  { max: 12, text: "Owns a modest cache of valuable, useful items. Usually has basic food." },
  { max: 16, text: "Owns a fair stock of low-grade valuable items. Occasional access to superior food." },
  { max: 18, text: "Owns an impressive collection of useful gear; considered wealthy / well-resourced. Regular access to superior food." },
  { max: 19, text: "The envy of most people; owns numerous sought-after items of impressive function. Access to the best food and beverages." },
  { max: Infinity, text: "Access to unparalleled quantities of valuable or useful items. A stockpile of wealth. Choice of any available food, in any quantity." },
];

export function resourcesRatingDescription(rating) {
  const row = RESOURCES_RATING_DESCRIPTIONS.find((r) => rating <= r.max);
  return row.text;
}

/** Breakdown of a Permanent Resources rating into at-hand/stowed/stored
 * points, plus the number of Resource Check boxes available. 20+ is treated
 * the same as 20 for the checkbox count (still 3) but "stored" keeps growing. */
export function resourcesBreakdown(rating) {
  if (rating <= 0) return { atHand: 0, stowed: 0, stored: 0, checkBoxes: 0 };
  const row = RESOURCES_BREAKDOWN_TABLE.find((r) => rating <= r.max) ?? RESOURCES_BREAKDOWN_TABLE[RESOURCES_BREAKDOWN_TABLE.length - 1];
  const resolve = (v) => (typeof v === "function" ? v(rating) : v);
  return {
    atHand: resolve(row.atHand),
    stowed: resolve(row.stowed),
    stored: resolve(row.stored),
    checkBoxes: row.checkBoxes,
  };
}

/** Points needed to raise Resources by `boosts` sacrificed Bonus Skill Point
 * Picks: the first sacrifice grants +5, each subsequent grants +2. Returns
 * the total Resources increase for a given number of sacrificed picks. */
export function resourcesBoostFromSacrifices(sacrificedPicks) {
  if (sacrificedPicks <= 0) return 0;
  return 5 + 2 * (sacrificedPicks - 1);
}
