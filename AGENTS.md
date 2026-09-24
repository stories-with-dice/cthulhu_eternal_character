# AGENTS.md

Guidance for AI coding agents working in this `ce/` app. Read this before making changes. This app is standalone from the sibling BRP generator at the repo root — no shared code, separate `package.json`/`node_modules`/build. If you're only told "the character generator" without qualification, check which one (BRP vs. Cthulhu Eternal) the task actually concerns before editing.

## What this is

A client-side character generator for **Cthulhu Eternal**, a d100 Lovecraftian RPG. Plain HTML/CSS/JS, no framework, no backend. See `README.md` for the user-facing overview, including which eras are actually supported and why.

## Critical constraint: `index.html` must work via `file://`

Same constraint and reasoning as the sibling BRP app (see `../AGENTS.md` for the full explanation) — browsers block ES module imports under `file://`, so:

- **Never** change `index.html` back to `<script type="module" src="js/ui/app.js">`. It must load `js/dist/bundle.js`, a pre-bundled classic script built by esbuild from `js/ui/app.js`.
- Run `npm run build` after editing anything under `js/` before manually testing in a browser (`npm test` does this automatically via `pretest`).
- `js/dist/bundle.js` is committed, not gitignored.
- `tests/ui.smoke.test.js` loads `index.html` via `JSDOM.fromFile` (a genuine `file://` URL) specifically to catch a regression here. Keep using `fromFile`, not `fromURL`.

## Architecture

```
js/data/      static rules data per era: skills-{modern,future,medieval}.js, archetypes-{modern,future,medieval}.js,
              disorders.js, bondSuggestions.js, and eras.js (the registry tying an era id to its skills/archetypes/
              adversity-skill-list/default-Harshness). No logic here, just data.
js/engine/    pure functions: dice, statistics, derived attributes, archetype/skill resolution (both random and
              manual variants), resources, bonds, adversity/bonus skill points, mental damage. No DOM access.
js/ui/        DOM-only glue: app.js (Quick Random flow + saved list + settings panel), wizard.js (step-by-step
              manual flow), render.js, export.js, storage.js.
```

Same golden rule as the BRP app: `js/engine`/`js/data` never touch `document`/`window`/`localStorage`, which is what makes the engine unit-testable in plain Node and lets both `characterFactory.js` (random) and `wizard.js` (manual) share it identically. Every "resolve this randomly" engine function has a manual counterpart (`resolveArchetypeSkillsRandom` / `resolveArchetypeSkillsManual`, etc.) taking explicit player choices instead of an RNG; both converge on `engine/characterAssembly.js`'s `assembleCharacter()`. **Add both together** when adding a new choice point.

## Rules-engine specifics worth knowing before touching them

- **Archetype skills carry a flat percentage, not a point pool.** Unlike the BRP app's profession skill-point allocation, a Cthulhu Eternal Archetype's fixed and bonus-pool skills each already have their own rating (e.g. "Firearms 60%"). `engine/ceSkillSheet.js`'s `setSkillRating` *replaces* the current rating (per the book: Archetype scores "replace the default skill ratings"), while `addToSkillRating` (used for Adversity/Bonus Skill Point picks) *adds* +20 to whatever's currently there. Don't conflate the two.
- **Bonus Skill Points are a shared economy across three things**: spending a pick on a skill (+20%, capped at 80% during creation, and *never* on the Unnatural skill — see `characterFactory.js`'s explicit filter), trading a pick for +Resources, or trading a pick for +Community Bond. Conversely, zeroing Resources or setting a Community Bond to 1 *grants* an extra pick. `engine/bonusSkillPoints.js`'s `totalBonusSkillPicks()`/`bonusSkillPicksSpent()` are the accounting primitives; the wizard's `totalBonusPicksAvailable()`/`bonusPicksRemaining()` (in `wizard.js`) track this live across the Resources/Bonds step and the Skill Points step, since they draw from the same pool.
- **Skill refs** (`"Art (Type)"`, `"Foreign Language (Latin)"`, and the Medieval-only combined form `"Art or Craft (Type)"`) are parsed by `engine/ceSkillRef.js`, not `engine/skillRef.js` — the two apps' skill-ref parsers are separate and not interchangeable (BRP has no combined-base-choice form; CE has no "weapon class" concept). `"(Type)"` and `"(Another)"` both mean "open, needs a specialty chosen"; anything else in parens is already concrete.
- **Mental Damage from Harsh Upbringings** (`engine/mentalDamage.js`) is transcribed from the *Medieval* SRD PDF, not the online markdown compilation, which references this mechanic ("page 36") but never actually spells it out. Treated as era-independent core rules. If you need to re-verify it, the PDF is the source (see below), not the `.md` files.
- **Community Bond fixed overrides**: a couple of Archetypes (e.g. Cleric, Feudal Ruler) grant a Community Bond with a specific minimum starting rating (`archetype.fixedCommunityBond`). It applies to *at most one* Community Bond and is `max(half-Resources, fixedValue)`, not additive. See `characterFactory.js`'s bond-generation loop and its "guarantee" fallback for the case where the random Individual/Community coin-flip never produces a Community Bond at all.

## Testing

```sh
npm test
```

Same conventions as the BRP app: one test file per engine module (pure, no DOM), plus `tests/ui.smoke.test.js` as the end-to-end DOM check. Random-generation code paths make these tests non-deterministic by construction — prefer "doesn't throw and produces a structurally valid result" assertions, and if you suspect flakiness, re-run the suite in a loop (`for i in $(seq 1 15); do npm test; done`) before concluding it's stable. The same jsdom gaps documented in `../AGENTS.md` apply here (`URL.createObjectURL` unimplemented, `HTMLCanvasElement.getContext` warning from jsPDF, `localStorage` throwing under `file://`'s opaque origin — which is exactly why `storage.js` has an in-memory fallback).

## Adding a new era

1. Confirm real Archetype + skill data actually exists somewhere (the online SRD `.md` files, or a standalone era PDF like the Medieval one) — don't fabricate content for a `TODO` era. If you find a new source PDF, extract it with `pdftotext -layout` rather than guessing from memory.
2. Add `js/data/skills-<era>.js` and `js/data/archetypes-<era>.js` following the existing files' shape.
3. Register the era in `js/data/eras.js` (skills, archetypes, `adversitySkills` list of exactly 4 skills, `defaultHarshness`).
4. Add `<option>` for it in `index.html`'s `#opt-era` select.
5. Add data-integrity tests (`tests/data.test.js` already runs its checks generically over every era in `ERA_LIST`, so a well-formed new entry mostly just needs to pass those) and extend `tests/ui.smoke.test.js`'s per-era loops to include it.

## Data accuracy

`js/data/*.js` was extracted from `../srd/*.md` (the online SRD compilation) and `../srd/Cthulhu_Eternal_SRD_-_Medieval_v1.0b_REL.pdf` (a complete standalone rulebook, more authoritative than the markdown compilation for anything both sources cover — see the Mental Damage note above). If you need to verify or extend rules data, treat the PDF as authoritative over the `.md` files when they disagree, and use `pdftotext -layout <file>.pdf > out.txt` to extract searchable text from any PDF source rather than guessing from memory.
