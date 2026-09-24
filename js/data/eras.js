import { SKILLS_MODERN } from "./skills-modern.js";
import { SKILLS_FUTURE } from "./skills-future.js";
import { SKILLS_MEDIEVAL } from "./skills-medieval.js";
import { ARCHETYPES_MODERN } from "./archetypes-modern.js";
import { ARCHETYPES_FUTURE } from "./archetypes-future.js";
import { ARCHETYPES_MEDIEVAL } from "./archetypes-medieval.js";

// Adversity Skill Point Picks can only be spent on this small, era-specific
// list (Detailed Description: Adversity Skill Points).
export const ADVERSITY_SKILLS = {
  modern: ["First Aid", "Military Training (Type)", "Regional Lore (Type)", "Survival (Type)"],
  future: ["First Aid", "Military Training (Type)", "Planet / Station Lore (Type)", "Survival (Type)"],
  medieval: ["Carouse", "First Aid", "Foreign Court/Kingdom (Type)", "Scavenge"],
};

// Default Harshness for the setting (Medieval defaults to Harsh per the
// SRD's own text: "most people live a wretched life"; the others default
// to Normal(ish) unless the GM says otherwise).
export const DEFAULT_HARSHNESS = {
  modern: "Normal(ish)",
  future: "Normal(ish)",
  medieval: "Harsh",
};

export const ERAS = {
  modern: {
    id: "modern",
    name: "Modern Age",
    skills: SKILLS_MODERN,
    archetypes: ARCHETYPES_MODERN,
    adversitySkills: ADVERSITY_SKILLS.modern,
    defaultHarshness: DEFAULT_HARSHNESS.modern,
  },
  future: {
    id: "future",
    name: "Future Age",
    skills: SKILLS_FUTURE,
    archetypes: ARCHETYPES_FUTURE,
    adversitySkills: ADVERSITY_SKILLS.future,
    defaultHarshness: DEFAULT_HARSHNESS.future,
  },
  medieval: {
    id: "medieval",
    name: "Medieval Age",
    skills: SKILLS_MEDIEVAL,
    archetypes: ARCHETYPES_MEDIEVAL,
    adversitySkills: ADVERSITY_SKILLS.medieval,
    defaultHarshness: DEFAULT_HARSHNESS.medieval,
  },
};

export const ERA_LIST = Object.values(ERAS);

export function getEra(eraId) {
  const era = ERAS[eraId];
  if (!era) throw new Error(`Unknown era: ${eraId}`);
  return era;
}
