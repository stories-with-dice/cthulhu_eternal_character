// LocalStorage persistence for saved characters, with a graceful in-memory
// fallback for contexts (like a file:// opaque origin) where localStorage
// throws rather than simply being empty.
const STORAGE_KEY = "ce-characters-v1";
const PROBE_KEY = "__ce_storage_probe__";

let memoryFallback = [];
let persistent = null;

function detectPersistence() {
  if (persistent != null) return persistent;
  try {
    window.localStorage.setItem(PROBE_KEY, "1");
    window.localStorage.removeItem(PROBE_KEY);
    persistent = true;
  } catch {
    persistent = false;
  }
  return persistent;
}

export function isStoragePersistent() {
  return detectPersistence();
}

export function loadAllCharacters() {
  if (!detectPersistence()) return [...memoryFallback];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [...memoryFallback];
  }
}

export function saveAllCharacters(list) {
  memoryFallback = list;
  if (!detectPersistence()) return false;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}

export function saveCharacter(character) {
  const list = loadAllCharacters();
  const idx = list.findIndex((c) => c._id === character._id);
  if (idx >= 0) list[idx] = character;
  else list.push(character);
  saveAllCharacters(list);
  return list;
}

export function deleteCharacter(id) {
  const list = loadAllCharacters().filter((c) => c._id !== id);
  saveAllCharacters(list);
  return list;
}

export function newCharacterId() {
  return `char_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
}
