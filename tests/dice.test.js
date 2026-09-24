import { test } from "node:test";
import assert from "node:assert/strict";
import { rollDie, rollDice, roll4d6DropLowest, roll1d100, rollNotation, sequenceRng, fractionForFace } from "../js/engine/dice.js";

test("rollDie respects RNG boundaries", () => {
  assert.equal(rollDie(6, () => 0), 1);
  assert.equal(rollDie(6, () => 0.9999999), 6);
});

test("fractionForFace produces the requested face", () => {
  for (let sides = 2; sides <= 20; sides++) {
    for (let face = 1; face <= sides; face++) {
      assert.equal(rollDie(sides, () => fractionForFace(face, sides)), face);
    }
  }
});

test("rollDice sums the correct number of dice", () => {
  const rng = sequenceRng([fractionForFace(3, 6), fractionForFace(4, 6), fractionForFace(5, 6)]);
  assert.equal(rollDice(3, 6, rng), 12);
});

test("roll4d6DropLowest drops the lowest of four dice", () => {
  const rng = sequenceRng([fractionForFace(1, 6), fractionForFace(5, 6), fractionForFace(6, 6), fractionForFace(2, 6)]);
  // rolls: 1,5,6,2 -> drop the 1 -> 5+6+2 = 13
  assert.equal(roll4d6DropLowest(rng), 13);
});

test("roll4d6DropLowest is bounded 3-18", () => {
  for (let i = 0; i < 300; i++) {
    const v = roll4d6DropLowest();
    assert.ok(v >= 3 && v <= 18, `out of range: ${v}`);
  }
});

test("roll1d100 is bounded 1-100 and 00+00 yields 100", () => {
  const rng = sequenceRng([fractionForFace(1, 10), fractionForFace(1, 10)]);
  assert.equal(roll1d100(rng), 100);
  for (let i = 0; i < 300; i++) {
    const v = roll1d100();
    assert.ok(v >= 1 && v <= 100, `out of range: ${v}`);
  }
});

test("rollNotation parses flat numbers and dice terms", () => {
  assert.equal(rollNotation("5"), 5);
  const rng = sequenceRng([fractionForFace(6, 6)]);
  assert.equal(rollNotation("1D6", rng), 6);
});

test("rollNotation parses compound expressions", () => {
  const rng = sequenceRng([fractionForFace(4, 6), fractionForFace(2, 4)]);
  assert.equal(rollNotation("1D6+1D4", rng), 6);
});

test("rollNotation throws on garbage input", () => {
  assert.throws(() => rollNotation("banana"));
});
