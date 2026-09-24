import { test } from "node:test";
import assert from "node:assert/strict";
import {
  individualBondStartingScore,
  communityBondStartingScore,
  communityBondBoostFromSacrifices,
  communityBondDescription,
  COMMUNITY_BOND_MAX,
} from "../js/engine/bondsEngine.js";

test("individualBondStartingScore equals CHA", () => {
  assert.equal(individualBondStartingScore(14), 14);
});

test("communityBondStartingScore is half Resources, rounded up", () => {
  assert.equal(communityBondStartingScore(10), 5);
  assert.equal(communityBondStartingScore(9), 5);
  assert.equal(communityBondStartingScore(0), 0);
});

test("communityBondBoostFromSacrifices: first sacrifice +5, each additional +2", () => {
  assert.equal(communityBondBoostFromSacrifices(0), 0);
  assert.equal(communityBondBoostFromSacrifices(1), 5);
  assert.equal(communityBondBoostFromSacrifices(3), 9);
});

test("communityBondDescription returns a description for every band including the max", () => {
  assert.match(communityBondDescription(1), /Disgraced/);
  assert.match(communityBondDescription(COMMUNITY_BOND_MAX), /head honcho/);
});
