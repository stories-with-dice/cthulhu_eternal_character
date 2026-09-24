import { test } from "node:test";
import assert from "node:assert/strict";
import { harshMentalDamageApplies, veryHarshAdaptedApplies, rollDisorderTest, rollAdaptedAdjustment } from "../js/engine/mentalDamage.js";
import { sequenceRng, fractionForFace } from "../js/engine/dice.js";

test("harshMentalDamageApplies triggers only when CHA or POW is below 7", () => {
  assert.equal(harshMentalDamageApplies(6, 10), true);
  assert.equal(harshMentalDamageApplies(10, 6), true);
  assert.equal(harshMentalDamageApplies(7, 7), false);
  assert.equal(harshMentalDamageApplies(10, 10), false);
});

test("veryHarshAdaptedApplies triggers only when CHA or POW is below 10", () => {
  assert.equal(veryHarshAdaptedApplies(9, 12), true);
  assert.equal(veryHarshAdaptedApplies(12, 9), true);
  assert.equal(veryHarshAdaptedApplies(10, 10), false);
});

test("rollDisorderTest succeeds when the roll is at or under POWx4", () => {
  // tens die face 1 -> tens digit 0, ones die face 2 -> ones digit 1 => roll 01 = 1
  const rng = sequenceRng([fractionForFace(1, 10), fractionForFace(2, 10)]);
  const result = rollDisorderTest(10, rng); // target 40
  assert.equal(result.roll, 1);
  assert.equal(result.target, 40);
  assert.equal(result.failed, false);
});

test("rollDisorderTest fails when the roll exceeds POWx4", () => {
  // both dice face 1 -> tens digit 0, ones digit 0 => 00 is treated as 100
  const rng = sequenceRng([fractionForFace(1, 10), fractionForFace(1, 10)]);
  const result = rollDisorderTest(5, rng); // target 20
  assert.equal(result.roll, 100);
  assert.equal(result.failed, true);
});

test("rollAdaptedAdjustment rolls 1D6 and returns the adaptation type", () => {
  const rng = sequenceRng([fractionForFace(4, 6)]);
  const result = rollAdaptedAdjustment("Violence", rng);
  assert.equal(result.adaptedTo, "Violence");
  assert.equal(result.amount, 4);
});

test("rollAdaptedAdjustment rejects an invalid adaptation type", () => {
  assert.throws(() => rollAdaptedAdjustment("Panic"));
});
