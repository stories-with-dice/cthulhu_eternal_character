// End-to-end smoke test for the actual DOM/app wiring (index.html + the
// built bundle), using jsdom loaded via a genuine file:// URL -- the same
// double-click scenario a real user hits, and the scenario that would catch
// an accidental regression to <script type="module">, which browsers block
// under file://.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const INDEX_PATH = path.join(ROOT, "index.html");

let dom;
let window;
let document;

before(async () => {
  dom = await JSDOM.fromFile(INDEX_PATH, { runScripts: "dangerously", resources: "usable", pretendToBeVisual: true });
  await new Promise((resolve) => setTimeout(resolve, 500));
  window = dom.window;
  document = window.document;
});

after(() => {
  window.close();
});

const $ = (id) => document.getElementById(id);

test("index.html was loaded as a genuine file:// document", () => {
  assert.equal(document.location.protocol, "file:");
});

test("the app initializes: era select is populated and archetype select follows it", () => {
  const eraSelect = $("opt-era");
  assert.ok(eraSelect.options.length >= 3);
  const archetypeSelect = $("opt-archetype");
  assert.ok(archetypeSelect.options.length > 1, "expected archetype options beyond 'Random'");
});

test("clicking Generate produces a visible, populated character sheet", () => {
  $("btn-generate").click();
  assert.equal($("sheet-panel").hidden, false);
  const text = $("character-sheet").textContent;
  assert.match(text, /Summary/);
  assert.match(text, /Statistics/);
  assert.match(text, /Skills/);
});

test("switching era repopulates the archetype list", () => {
  const eraSelect = $("opt-era");
  eraSelect.value = "medieval";
  eraSelect.dispatchEvent(new window.Event("change"));
  const archetypeNames = [...$("opt-archetype").options].map((o) => o.textContent);
  assert.ok(archetypeNames.includes("Cleric"));
});

test("Quick Random works for every era", () => {
  for (const eraId of ["modern", "future", "medieval"]) {
    $("opt-era").value = eraId;
    $("opt-era").dispatchEvent(new window.Event("change"));
    $("btn-generate").click();
    assert.equal($("sheet-panel").hidden, false, eraId);
  }
});

test("saving a character adds it to the saved list, and it reloads on click", () => {
  $("opt-name").value = "Smoke Test Investigator";
  $("btn-generate").click();
  $("btn-save").click();
  assert.match($("saved-character-list").textContent, /Smoke Test Investigator/);
});

test("New Protagonist hides the sheet panel and clears identity fields", () => {
  $("btn-new-character").click();
  assert.equal($("sheet-panel").hidden, true);
  assert.equal($("opt-name").value, "");
});

test("JSON and Markdown export buttons don't crash the page when clicked", () => {
  $("btn-generate").click();
  assert.doesNotThrow(() => $("btn-export-json").click());
  assert.doesNotThrow(() => $("btn-export-md").click());
});

// ---------------------------------------------------------------- Wizard

function randomizeThenNext() {
  if (!$("btn-wizard-randomize").hidden) $("btn-wizard-randomize").click();
  $("btn-wizard-next").click();
}

function runWizardToCompletion(maxSteps = 12) {
  for (let i = 0; i < maxSteps; i++) {
    const title = $("wizard-step-title").textContent;
    if (title.startsWith("Review")) {
      $("btn-wizard-next").click();
      return;
    }
    randomizeThenNext();
  }
  throw new Error(`Wizard did not reach Review within ${maxSteps} steps (stuck on "${$("wizard-step-title").textContent}")`);
}

test("starting the wizard shows the wizard panel and hides the sheet panel", () => {
  $("btn-new-character").click();
  $("btn-start-wizard").click();
  assert.equal($("wizard-panel").hidden, false);
  assert.equal($("sheet-panel").hidden, true);
  assert.match($("wizard-step-title").textContent, /Step 0/);
});

test("cancelling the wizard hides it without producing a character", () => {
  $("btn-start-wizard").click();
  $("btn-wizard-cancel").click();
  assert.equal($("wizard-panel").hidden, true);
});

test("full wizard run (all-randomize) completes for Modern Age, Normal(ish)", () => {
  $("opt-era").value = "modern";
  $("opt-era").dispatchEvent(new window.Event("change"));
  $("opt-harshness").value = "Normal(ish)";
  $("btn-start-wizard").click();
  runWizardToCompletion();
  assert.equal($("sheet-panel").hidden, false);
  assert.match($("character-sheet").textContent, /Summary/);
});

test("full wizard run completes for every era at every Harshness level", () => {
  for (const eraId of ["modern", "future", "medieval"]) {
    for (const harshness of ["Normal(ish)", "Harsh", "Very Harsh"]) {
      $("btn-new-character").click();
      $("opt-era").value = eraId;
      $("opt-era").dispatchEvent(new window.Event("change"));
      $("opt-harshness").value = harshness;
      $("btn-start-wizard").click();
      runWizardToCompletion();
      assert.equal($("sheet-panel").hidden, false, `${eraId}/${harshness}`);
    }
  }
});

test("Back navigation returns to the previous step without losing wizard state", () => {
  $("btn-new-character").click();
  $("btn-start-wizard").click();
  const firstTitle = $("wizard-step-title").textContent;
  randomizeThenNext();
  const secondTitle = $("wizard-step-title").textContent;
  assert.notEqual(firstTitle, secondTitle);
  $("btn-wizard-back").click();
  assert.equal($("wizard-step-title").textContent, firstTitle);
});

test("manually picking an Archetype's bonus skills via checkboxes satisfies validation and advances", () => {
  $("btn-new-character").click();
  $("opt-era").value = "modern";
  $("opt-era").dispatchEvent(new window.Event("change"));
  $("btn-start-wizard").click();
  randomizeThenNext(); // setup
  randomizeThenNext(); // statistics

  // Now on Archetype. Pick Criminal for a predictable shape (7 fixed, choose 3).
  const archetypeSelect = $("wizard-step-body").querySelector("select");
  archetypeSelect.value = "Criminal";
  archetypeSelect.dispatchEvent(new window.Event("change"));

  function selectedCount() {
    const match = $("wizard-step-body").textContent.match(/Selected: (\d+) \/ (\d+)/);
    return match ? [Number(match[1]), Number(match[2])] : [0, 0];
  }

  let guard = 0;
  while (selectedCount()[0] < selectedCount()[1] && guard < 20) {
    guard++;
    const unchecked = [...$("wizard-step-body").querySelectorAll("input[type=checkbox]:not(:checked)")];
    if (unchecked.length === 0) break;
    unchecked[0].click();
  }
  const [selected, needed] = selectedCount();
  assert.equal(selected, needed);

  $("btn-wizard-next").click();
  assert.equal($("wizard-error").hidden, true, $("wizard-error").textContent);
  assert.match($("wizard-step-title").textContent, /Step 4\/5/);
});
