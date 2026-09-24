// Step 7: Determine Mental Damage from Harsh Environments. This mechanic
// isn't in the online SRD compilation (referenced but never detailed there)
// -- it's transcribed from the standalone Medieval SRD PDF's "Detailed
// Description: Mental Damage from Harsh Upbringings", which presents it as
// a core, era-independent rule.
import { roll1d100, rollNotation } from "./dice.js";

/** Harsh: triggers only if CHA or POW is below 7. */
export function harshMentalDamageApplies(cha, pow) {
  return cha < 7 || pow < 7;
}

/** Very Harsh's "Adapted" clause triggers only if CHA or POW is below 10. */
export function veryHarshAdaptedApplies(cha, pow) {
  return cha < 10 || pow < 10;
}

/** Very Harsh, part 1: a POW x4 test; failure grants a starting disorder. */
export function rollDisorderTest(pow, rng = Math.random) {
  const roll = roll1d100(rng);
  const target = pow * 4;
  return { roll, target, failed: roll > target };
}

/** Adapted to Violence: -1D6 CHA, and the same roll subtracted from every
 * Bond (Individual and Community alike). Adapted to Helplessness: -1D6 POW. */
export function rollAdaptedAdjustment(adaptedTo, rng = Math.random) {
  if (adaptedTo !== "Violence" && adaptedTo !== "Helplessness") {
    throw new Error('adaptedTo must be "Violence" or "Helplessness".');
  }
  const amount = rollNotation("1D6", rng);
  return { adaptedTo, amount };
}
