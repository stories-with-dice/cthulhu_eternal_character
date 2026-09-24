// Step 2: Calculate Derived Attributes (Part 1 - Rules of the Game).

const DAMAGE_BONUS_TABLE = [
  { max: 4, bonus: -2 },
  { max: 8, bonus: -1 },
  { max: 12, bonus: 0 },
  { max: 16, bonus: 1 },
  { max: Infinity, bonus: 2 },
];

/** Damage Bonus from STR score (1-4:-2, 5-8:-1, 9-12:0, 13-16:+1, 17-18:+2). */
export function damageBonus(str) {
  const row = DAMAGE_BONUS_TABLE.find((r) => str <= r.max);
  return row.bonus;
}

/** Hit Points = (STR + CON) / 2, rounded up. */
export function hitPoints(str, con) {
  return Math.ceil((str + con) / 2);
}

/** Willpower Points = POW. */
export function willpowerPoints(pow) {
  return pow;
}

/** Starting Sanity Points: POW x5 (Normal(ish)) or POW x4 (Harsh/Very Harsh). */
export function startingSanity(pow, harshness) {
  return harshness === "Normal(ish)" ? pow * 5 : pow * 4;
}

/** Breaking Point = SAN - POW. */
export function breakingPoint(san, pow) {
  return san - pow;
}

/** Maximum SAN = 99 - Unnatural skill rating. */
export function maxSanity(unnaturalSkillRating = 0) {
  return 99 - unnaturalSkillRating;
}

/** Recovery SAN = POW x5, capped at Max SAN. */
export function recoverySanity(pow, unnaturalSkillRating = 0) {
  return Math.min(pow * 5, maxSanity(unnaturalSkillRating));
}

/** Compute every derived attribute in one call. */
export function computeDerivedAttributes(stats, harshness, unnaturalSkillRating = 0) {
  const san = startingSanity(stats.POW, harshness);
  return {
    hitPoints: hitPoints(stats.STR, stats.CON),
    willpowerPoints: willpowerPoints(stats.POW),
    sanity: san,
    breakingPoint: breakingPoint(san, stats.POW),
    maxSanity: maxSanity(unnaturalSkillRating),
    recoverySanity: recoverySanity(stats.POW, unnaturalSkillRating),
    damageBonus: damageBonus(stats.STR),
  };
}
