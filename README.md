# Cthulhu Eternal Character Generator

An unofficial character generator for **Cthulhu Eternal**, the d100 OGL RPG of Lovecraftian horror (similar to Call of Cthulhu / Delta Green). Runs entirely in the browser as a static site — no server, no build step required to use it. Standalone from the sibling BRP generator in the repo root; the two apps share no code, since the rule systems are entirely different.

> Cthulhu Eternal is published under the OGL. This is a fan-made tool; rules content is adapted from the Cthulhu Eternal SRD for personal use.

## Using it

Open `index.html` directly in a browser (double-click it — works off `file://`, no local server needed). Two ways to build a Protagonist:

- **🎲 Quick Random Generate** — rolls and resolves everything at once: Statistics, Archetype, Skills, Resources, Bonds, Adversity/Bonus Skill Points, and (if the setting is Harsh or Very Harsh) Mental Damage.
- **🛠 Build Step-by-Step** — a guided wizard through each character-creation step, with every choice editable by hand and a "🎲 Randomize this step" shortcut on each screen.

Both read the **Setting** panel at the top: **Era** (Modern Age, Future Age, or Medieval Age — see "Era coverage" below) and **Harshness of Upbringing** (Normal(ish) / Harsh / Very Harsh, per Part 1's Step 0).

Finished Protagonists can be saved (in-browser storage, with an in-memory fallback and a warning banner if storage isn't available in your context) and exported as **JSON**, **Markdown**, or **PDF**.

## Era coverage

The published Cthulhu Eternal SRD compilation in `../srd/` only has complete Archetype and equipment data for **Modern Age** and **Future Age** — Medieval, Jazz Age, and five other era variants are marked `TODO` in the source. **Medieval Age** is supported here anyway, transcribed from the standalone Medieval SRD PDF (`../srd/Cthulhu_Eternal_SRD_-_Medieval_v1.0b_REL.pdf`), which turned out to be a complete rulebook — including the core "Mental Damage from Harsh Upbringings" mechanic that the online markdown SRD references but never actually details.

The other six eras (Classical, Age of Revolutions, Victorian, Jazz Age, WWII, Cold War) aren't implemented, since no Archetype/equipment data for them exists in the source material yet. Adding one later means: extracting its Archetype list and skill base ratings into `js/data/archetypes-<era>.js` / `js/data/skills-<era>.js`, then registering it in `js/data/eras.js`.

## Project structure

```
index.html             entry point — open this directly
css/styles.css          all styling
js/data/                static rules data (skills, archetypes, and disorders per era; see eras.js for the registry)
js/engine/              pure, testable game-logic functions (dice, statistics, skills, archetypes, resources, bonds, etc.)
js/ui/                  DOM/browser code: app.js (wiring), wizard.js (step-by-step flow), render.js, export.js, storage.js
js/lib/                 vendored third-party libraries (jsPDF)
js/dist/bundle.js       built bundle that index.html actually loads (see "Building" below)
tests/                  the test suite
```

## Building

`index.html` loads `js/dist/bundle.js`, a single pre-bundled, non-module script — not the `js/ui/*.js` source files directly. This is deliberate: browsers block `<script type="module">` imports when a page is opened via `file://`, and the whole point of this app is that you can just double-click `index.html` with no server. The source stays as clean ES modules; [esbuild](https://esbuild.github.io/) bundles them into one classic script.

If you edit anything under `js/`, rebuild before reopening `index.html`:

```sh
npm install     # first time only
npm run build   # regenerates js/dist/bundle.js
```

`npm test` rebuilds automatically first (see `pretest`), so the bundle never goes stale as long as you run tests before checking your work.

## Testing

```sh
npm test
```

Runs the full suite with Node's built-in test runner. Includes unit tests for every engine module (pure functions, no DOM) plus end-to-end smoke tests (`tests/ui.smoke.test.js`) that load the real `index.html` via an actual `file://` URL with jsdom and click through both the Quick Random path and a full run of the step-by-step wizard, across every era and every Harshness level.

A `Makefile` wraps the same commands (`make test`, `make build`) for anyone who prefers `make`.

## Scope notes

- **Equipment** is reference data (weapon damage tables surface where relevant) rather than an itemized purchasing system — Resources rating is the core mechanical abstraction for wealth/gear, and that's fully implemented (including the At-Hand/Stowed/Stored breakdown and Check Boxes).
- **Mental Disorders**: the book explicitly recommends a disorder be chosen to fit the Protagonist's trauma rather than rolled randomly. The wizard lets the player pick from the full Sample Disorders list; Quick Random picks one at random as a practical necessity (there's no in-play trauma to match yet at character creation).
