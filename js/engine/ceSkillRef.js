// Parses Cthulhu Eternal archetype/bonus-pool skill reference strings like
// "Art (Type)", "Foreign Language (Latin)", "Craft (Farming)", and the
// Medieval "Art or Craft (Type)" combined-choice form, into a base skill
// name (or a list of candidate bases to choose between) plus a specialty.

/** @returns {{bases:string[], specialty:string|null, needsBaseChoice:boolean}} */
export function parseCeSkillRef(ref) {
  const match = ref.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (!match) return { bases: [ref.trim()], specialty: null, needsBaseChoice: false };
  const [, basePart, rawSpecialty] = match;
  const bases = basePart.split(/\s+or\s+/i).map((b) => b.trim());
  const isOpen = /^(type|another)$/i.test(rawSpecialty.trim());
  return { bases, specialty: isOpen ? null : rawSpecialty.trim(), needsBaseChoice: bases.length > 1 };
}

function findSkillDef(base, era) {
  return era.skills.find((s) => s.name === base);
}

/** True if this skill has a specialty system per the era's skill data (i.e.
 * `specialty: true` on its data entry). */
export function baseNeedsSpecialty(base, era) {
  return Boolean(findSkillDef(base, era)?.specialty);
}

/** True if a ref (as it stands) needs the player to pick a base and/or a
 * specialty before it names one concrete, usable skill. */
export function ceRefNeedsChoice(ref, era) {
  const { bases, specialty, needsBaseChoice } = parseCeSkillRef(ref);
  if (needsBaseChoice) return true;
  if (specialty != null) return false;
  return baseNeedsSpecialty(bases[0], era);
}

/** The concrete specialty options offered for a base skill, or null if it
 * has no enumerated examples (open-ended, e.g. Foreign Language). */
export function ceSpecialtyOptionsFor(base, era) {
  const def = findSkillDef(base, era);
  return def?.specialtyExamples?.length ? def.specialtyExamples : null;
}

/** Build the concrete display name for a ref, given an explicit base choice
 * (only needed when the ref offers more than one, e.g. "Art or Craft") and
 * specialty (only needed when the skill has a specialty system and the ref
 * doesn't already name one). Returns null if a required choice is missing. */
export function resolveCeSkillDisplayNameManual(ref, era, { chosenBase, chosenSpecialty } = {}) {
  const { bases, specialty, needsBaseChoice } = parseCeSkillRef(ref);
  const base = needsBaseChoice ? chosenBase : bases[0];
  if (needsBaseChoice && !bases.includes(base)) return null;
  if (specialty != null) return `${base} (${specialty})`;
  if (!baseNeedsSpecialty(base, era)) return base;
  if (!chosenSpecialty) return null;
  return `${base} (${chosenSpecialty})`;
}

/** Randomly resolve a ref to a concrete display name. */
export function resolveCeSkillDisplayNameRandom(ref, era, rng = Math.random) {
  const { bases, specialty, needsBaseChoice } = parseCeSkillRef(ref);
  const base = needsBaseChoice ? bases[Math.floor(rng() * bases.length)] : bases[0];
  if (specialty != null) return `${base} (${specialty})`;
  if (!baseNeedsSpecialty(base, era)) return base;
  const options = ceSpecialtyOptionsFor(base, era);
  const pick = options ? options[Math.floor(rng() * options.length)] : "General";
  return `${base} (${pick})`;
}

export function ceBaseSkillName(displayName) {
  return parseCeSkillRef(displayName).bases[0];
}
