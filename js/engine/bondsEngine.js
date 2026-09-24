// Step 5: Define Bonds (Detailed Description: Bonds).

export const BOND_TYPES = ["Individual", "Community"];

/** An Individual Bond's starting score equals the Protagonist's CHA. */
export function individualBondStartingScore(cha) {
  return cha;
}

/** A Community Bond's default starting score is half the Permanent
 * Resources rating, rounded up. */
export function communityBondStartingScore(resourcesRating) {
  return Math.ceil(resourcesRating / 2);
}

/** Points needed to raise a single Community Bond by `boosts` sacrificed
 * Bonus Skill Point Picks: first sacrifice +5, each subsequent +2 (to that
 * same bond), capped at 20. */
export function communityBondBoostFromSacrifices(sacrificedPicks) {
  if (sacrificedPicks <= 0) return 0;
  return 5 + 2 * (sacrificedPicks - 1);
}

export const COMMUNITY_BOND_MAX = 20;

/** Rating-band descriptions for Community Bonds ("What the Rating Represents"). */
export const COMMUNITY_BOND_DESCRIPTIONS = [
  { max: 1, text: "Disgraced member; on the verge of being banished from the society." },
  { max: 4, text: "Shunned member of the community; someone who is actively looked down on by most." },
  { max: 8, text: "Standard member of the community; one of the pack, whose opinion is unlikely to matter." },
  { max: 12, text: "Well-regarded member of the community; favorably viewed by many other members." },
  { max: 16, text: "Important member of the community; respected by most other members." },
  { max: 18, text: "Influential member of community, involved in most decision-making; liked by most." },
  { max: 19, text: "An extremely influential member of the community, looked up to by virtually everyone." },
  { max: 20, text: "Top-tier of leadership in the community; the head honcho." },
];

export function communityBondDescription(rating) {
  const row = COMMUNITY_BOND_DESCRIPTIONS.find((r) => rating <= r.max);
  return row ? row.text : COMMUNITY_BOND_DESCRIPTIONS[COMMUNITY_BOND_DESCRIPTIONS.length - 1].text;
}
