import { generateRandomCharacter, defaultOptions } from "../engine/characterFactory.js";
import { ERA_LIST, getEra } from "../data/eras.js";
import { renderCharacterSheet } from "./render.js";
import { loadAllCharacters, saveCharacter, deleteCharacter, newCharacterId, isStoragePersistent } from "./storage.js";
import { exportToJson, exportToMarkdown, exportToPdf } from "./export.js";
import { startWizard } from "./wizard.js";

let currentCharacter = null;

const $ = (id) => document.getElementById(id);

function populateArchetypeSelect() {
  const select = $("opt-archetype");
  const eraId = $("opt-era").value;
  const era = getEra(eraId);
  select.innerHTML = '<option value="">Random</option>';
  for (const a of [...era.archetypes].sort((a, b) => a.name.localeCompare(b.name))) {
    const opt = document.createElement("option");
    opt.value = a.name;
    opt.textContent = a.name;
    select.appendChild(opt);
  }
}

function syncHarshnessDefault() {
  const era = getEra($("opt-era").value);
  $("opt-harshness").value = era.defaultHarshness;
}

function readOptionsFromForm() {
  const options = defaultOptions($("opt-era").value);
  options.eraId = $("opt-era").value;
  options.harshness = $("opt-harshness").value;
  const archetypeValue = $("opt-archetype").value;
  options.archetypeName = archetypeValue || null;
  options.name = $("opt-name").value.trim();
  options.sex = $("opt-sex").value.trim();
  const ageValue = $("opt-age").value;
  options.age = ageValue ? parseInt(ageValue, 10) : null;
  return options;
}

function showSheet(character) {
  currentCharacter = character;
  $("sheet-panel").hidden = false;
  renderCharacterSheet($("character-sheet"), character, {
    onNameChange: (value) => {
      currentCharacter.name = value;
    },
  });
  $("sheet-panel").scrollIntoView?.({ behavior: "smooth", block: "start" });
}

function generate() {
  const options = readOptionsFromForm();
  const character = generateRandomCharacter(options);
  if (!character._id) character._id = newCharacterId();
  showSheet(character);
}

function renderSavedList() {
  const list = $("saved-character-list");
  list.innerHTML = "";
  const characters = loadAllCharacters();
  if (characters.length === 0) {
    list.appendChild(Object.assign(document.createElement("li"), { className: "empty-hint", textContent: "No saved Protagonists yet." }));
    return;
  }
  for (const c of characters.slice().reverse()) {
    const li = document.createElement("li");
    const info = document.createElement("div");
    info.innerHTML = `<div class="char-name">${c.name || "(unnamed)"}</div><div class="char-meta">${c.archetypeName}, ${c.eraName}</div>`;
    info.style.cursor = "pointer";
    info.addEventListener("click", () => showSheet(c));
    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "✕";
    delBtn.title = "Delete";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteCharacter(c._id);
      renderSavedList();
    });
    li.appendChild(info);
    li.appendChild(delBtn);
    list.appendChild(li);
  }
}

function startWizardFlow() {
  $("sheet-panel").hidden = true;
  $("wizard-panel").hidden = false;
  startWizard(readOptionsFromForm(), {
    onFinish: (character) => {
      if (!character._id) character._id = newCharacterId();
      $("wizard-panel").hidden = true;
      showSheet(character);
    },
    onCancel: () => {
      $("wizard-panel").hidden = true;
    },
  });
  $("wizard-panel").scrollIntoView?.({ behavior: "smooth", block: "start" });
}

function wireEvents() {
  $("btn-generate").addEventListener("click", generate);
  $("btn-regenerate").addEventListener("click", generate);
  $("btn-start-wizard").addEventListener("click", startWizardFlow);

  $("opt-era").addEventListener("change", () => {
    populateArchetypeSelect();
    syncHarshnessDefault();
  });

  $("btn-new-character").addEventListener("click", () => {
    $("sheet-panel").hidden = true;
    $("wizard-panel").hidden = true;
    currentCharacter = null;
    $("opt-name").value = "";
    $("opt-sex").value = "";
    $("opt-age").value = "";
  });

  $("btn-save").addEventListener("click", () => {
    if (!currentCharacter) return;
    saveCharacter(currentCharacter);
    renderSavedList();
  });

  $("btn-export-json").addEventListener("click", () => currentCharacter && exportToJson(currentCharacter));
  $("btn-export-md").addEventListener("click", () => currentCharacter && exportToMarkdown(currentCharacter));
  $("btn-export-pdf").addEventListener("click", () => currentCharacter && exportToPdf(currentCharacter));

  $("toggle-settings").addEventListener("click", () => {
    const body = $("settings-body");
    const hidden = body.style.display === "none";
    body.style.display = hidden ? "" : "none";
    $("toggle-settings").textContent = hidden ? "hide" : "show";
  });
}

function init() {
  populateArchetypeSelect();
  syncHarshnessDefault();
  wireEvents();
  renderSavedList();
  $("storage-warning").hidden = isStoragePersistent();
}

init();
