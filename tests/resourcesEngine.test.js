import { test } from "node:test";
import assert from "node:assert/strict";
import { resourcesBreakdown, resourcesRatingDescription, resourcesBoostFromSacrifices } from "../js/engine/resourcesEngine.js";

test("resourcesBreakdown matches the book's table at key rows", () => {
  assert.deepEqual(resourcesBreakdown(0), { atHand: 0, stowed: 0, stored: 0, checkBoxes: 0 });
  assert.deepEqual(resourcesBreakdown(6), { atHand: 6, stowed: 0, stored: 0, checkBoxes: 1 });
  assert.deepEqual(resourcesBreakdown(7), { atHand: 6, stowed: 1, stored: 0, checkBoxes: 2 });
  assert.deepEqual(resourcesBreakdown(12), { atHand: 6, stowed: 6, stored: 0, checkBoxes: 2 });
  assert.deepEqual(resourcesBreakdown(13), { atHand: 6, stowed: 6, stored: 1, checkBoxes: 3 });
  assert.deepEqual(resourcesBreakdown(20), { atHand: 6, stowed: 6, stored: 8, checkBoxes: 3 });
});

test("resourcesBreakdown keeps growing 'stored' beyond 20", () => {
  const result = resourcesBreakdown(25);
  assert.equal(result.atHand, 6);
  assert.equal(result.stowed, 6);
  assert.equal(result.stored, 13);
  assert.equal(result.checkBoxes, 3);
});

test("resourcesBreakdown at-hand/stowed/stored always sum to the rating", () => {
  for (let r = 0; r <= 30; r++) {
    const b = resourcesBreakdown(r);
    assert.equal(b.atHand + b.stowed + b.stored, r, `rating ${r}`);
  }
});

test("resourcesRatingDescription returns a description for every band", () => {
  assert.match(resourcesRatingDescription(0), /Penury/);
  assert.match(resourcesRatingDescription(20), /unparalleled/);
});

test("resourcesBoostFromSacrifices: first sacrifice +5, each additional +2", () => {
  assert.equal(resourcesBoostFromSacrifices(0), 0);
  assert.equal(resourcesBoostFromSacrifices(1), 5);
  assert.equal(resourcesBoostFromSacrifices(2), 7);
  assert.equal(resourcesBoostFromSacrifices(3), 9);
});
