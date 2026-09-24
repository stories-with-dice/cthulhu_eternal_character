// Future Age Archetypes (Part 1 - Rules of the Game).
export const ARCHETYPES_FUTURE = [
  {
    name: "Artist / Craftsperson",
    recommendedStats: ["DEX"],
    archetypalSkills: [
      { ref: "Appraise", rating: 40 }, { ref: "Art (Type)", rating: 60 }, { ref: "Craft (Type)", rating: 40 },
      { ref: "Charm", rating: 60 }, { ref: "Insight", rating: 60 }, { ref: "Persuade", rating: 60 }, { ref: "Search", rating: 60 },
    ],
    bonusChoice: {
      count: 5,
      options: [
        { ref: "Administration", rating: 50 }, { ref: "Alertness", rating: 60 }, { ref: "Artificial Intelligence", rating: 40 },
        { ref: "Athletics", rating: 70 }, { ref: "Craft (Type)", rating: 40 }, { ref: "Harangue", rating: 50 },
        { ref: "Heavy Machinery", rating: 50 }, { ref: "Planet / Station Lore (Type)", rating: 40 }, { ref: "Technology Use", rating: 40 },
      ],
    },
    startingResources: 3,
    bonds: 3,
  },
  {
    name: "Author / Vlogger / Memlogger",
    recommendedStats: ["INT", "CHA"],
    archetypalSkills: [
      { ref: "Alertness", rating: 50 }, { ref: "Art (Type)", rating: 50 }, { ref: "Insight", rating: 60 },
      { ref: "Research", rating: 60 }, { ref: "Search", rating: 60 }, { ref: "Technology Use", rating: 20 },
    ],
    bonusChoice: {
      count: 4,
      options: [
        { ref: "Cosmology", rating: 50 }, { ref: "Foreign Language (Type)", rating: 40 }, { ref: "Harangue", rating: 50 },
        { ref: "History", rating: 50 }, { ref: "Law (Type)", rating: 40 }, { ref: "Occult", rating: 50 },
        { ref: "Planet / Station Lore (Type)", rating: 40 }, { ref: "Science (Type)", rating: 40 }, { ref: "Xenoarcheology", rating: 40 },
      ],
    },
    startingResources: 4,
    bonds: 4,
  },
  {
    name: "Criminal",
    recommendedStats: ["DEX"],
    archetypalSkills: [
      { ref: "Alertness", rating: 40 }, { ref: "Appraise", rating: 40 }, { ref: "Craft (Type)", rating: 40 },
      { ref: "Harangue", rating: 40 }, { ref: "Law (Type)", rating: 30 }, { ref: "Stealth", rating: 60 }, { ref: "Search", rating: 50 },
    ],
    bonusChoice: {
      count: 3,
      options: [
        { ref: "Art (Type)", rating: 40 }, { ref: "Artificial Intelligence", rating: 40 }, { ref: "Athletics", rating: 70 },
        { ref: "Charm", rating: 60 }, { ref: "Dodge", rating: 70 }, { ref: "Firearms / Beam Weapons", rating: 60 },
        { ref: "Hacking", rating: 40 }, { ref: "Insight", rating: 50 }, { ref: "Melee Weapons", rating: 70 }, { ref: "Technology Use", rating: 40 },
      ],
    },
    startingResources: 5,
    bonds: 4,
  },
  {
    name: "Doctor / Nurse",
    recommendedStats: ["INT"],
    archetypalSkills: [
      { ref: "Administration", rating: 30 }, { ref: "Charm", rating: 40 }, { ref: "First Aid", rating: 50 },
      { ref: "Insight", rating: 50 }, { ref: "Medicine", rating: 50 }, { ref: "Science (Type)", rating: 40 },
      { ref: "Search", rating: 60 }, { ref: "Surgery", rating: 40 }, { ref: "Technology Use", rating: 30 },
    ],
    bonusChoice: {
      count: 2,
      options: [
        { ref: "Foreign Language (Type)", rating: 40 }, { ref: "Military Training (Type)", rating: 40 }, { ref: "Forensics", rating: 40 },
        { ref: "Pharmacy", rating: 40 }, { ref: "Psychoanalyze", rating: 50 }, { ref: "Research", rating: 50 }, { ref: "Science (Type)", rating: 40 },
      ],
    },
    startingResources: 5,
    bonds: 3,
  },
  {
    name: "Explorer / Pioneer",
    recommendedStats: ["CHA", "POW"],
    archetypalSkills: [
      { ref: "Cosmology", rating: 50 }, { ref: "Craft (Type)", rating: 40 }, { ref: "Firearms / Beam Weapons", rating: 50 },
      { ref: "First Aid", rating: 40 }, { ref: "Navigate", rating: 50 }, { ref: "Search", rating: 50 },
      { ref: "Survival (Type)", rating: 50 }, { ref: "Track", rating: 50 },
    ],
    bonusChoice: {
      count: 4,
      options: [
        { ref: "Firearms / Beam Weapons", rating: 60 }, { ref: "Hacking", rating: 40 }, { ref: "Heavy Machinery", rating: 50 },
        { ref: "History", rating: 50 }, { ref: "Melee Weapons", rating: 70 }, { ref: "Occult", rating: 50 },
        { ref: "Pilot (Type)", rating: 40 }, { ref: "Unarmed Combat", rating: 60 }, { ref: "Xenoarcheology", rating: 40 }, { ref: "Zero-G Maneuvering", rating: 40 },
      ],
    },
    startingResources: 3,
    bonds: 4,
  },
  {
    name: "Historian / Genealogist",
    recommendedStats: ["INT", "CHA"],
    archetypalSkills: [
      { ref: "Administration", rating: 50 }, { ref: "History", rating: 70 }, { ref: "Planet / Station Lore (Type)", rating: 50 },
      { ref: "Research", rating: 60 }, { ref: "Technology Use", rating: 30 }, { ref: "Xenoarcheology", rating: 50 },
    ],
    bonusChoice: {
      count: 3,
      options: [
        { ref: "Art (Type)", rating: 40 }, { ref: "Artificial Intelligence", rating: 40 }, { ref: "Craft (Type)", rating: 40 },
        { ref: "Foreign Language (Type)", rating: 40 }, { ref: "Law (Type)", rating: 40 }, { ref: "Military Training (Type)", rating: 40 },
        { ref: "Persuade", rating: 60 }, { ref: "Search", rating: 60 },
      ],
    },
    startingResources: 4,
    bonds: 4,
  },
  {
    name: "Law Enforcer / Agent",
    recommendedStats: ["CON", "CHA"],
    archetypalSkills: [
      { ref: "Alertness", rating: 50 }, { ref: "Athletics", rating: 60 }, { ref: "Drive", rating: 50 },
      { ref: "Firearms / Beam Weapons", rating: 60 }, { ref: "Harangue", rating: 60 }, { ref: "Insight", rating: 50 },
      { ref: "Law (Type)", rating: 40 }, { ref: "Search", rating: 50 },
    ],
    bonusChoice: {
      count: 4,
      options: [
        { ref: "Disguise", rating: 50 }, { ref: "Dodge", rating: 70 }, { ref: "First Aid", rating: 50 },
        { ref: "Forensics", rating: 40 }, { ref: "Hacking", rating: 40 }, { ref: "Melee Weapons", rating: 70 },
        { ref: "Persuade", rating: 60 }, { ref: "Planet / Station Lore (Type)", rating: 40 }, { ref: "Stealth", rating: 50 }, { ref: "Technology Use", rating: 40 },
      ],
    },
    startingResources: 4,
    bonds: 3,
  },
  {
    name: "Librarian / Archivist",
    recommendedStats: ["INT"],
    archetypalSkills: [
      { ref: "Administration", rating: 60 }, { ref: "Alertness", rating: 50 }, { ref: "Appraise", rating: 50 },
      { ref: "Research", rating: 60 }, { ref: "Search", rating: 50 }, { ref: "Technology Use", rating: 50 },
    ],
    bonusChoice: {
      count: 5,
      options: [
        { ref: "Art (Type)", rating: 40 }, { ref: "Artificial Intelligence", rating: 40 }, { ref: "Cosmology", rating: 50 },
        { ref: "Foreign Language (Type)", rating: 40 }, { ref: "History", rating: 50 }, { ref: "Law (Type)", rating: 40 },
        { ref: "Occult", rating: 50 }, { ref: "Planet / Station Lore (Type)", rating: 40 }, { ref: "Xenoarcheology", rating: 40 },
      ],
    },
    startingResources: 4,
    bonds: 3,
  },
  {
    name: "Researcher / Scientist",
    recommendedStats: ["INT"],
    archetypalSkills: [
      { ref: "Administration", rating: 50 }, { ref: "Artificial Intelligence", rating: 30 }, { ref: "Persuade", rating: 60 },
      { ref: "Research", rating: 60 }, { ref: "Science (Type)", rating: 60 }, { ref: "Search", rating: 50 }, { ref: "Technology Use", rating: 40 },
    ],
    bonusChoice: {
      count: 4,
      options: [
        { ref: "Art (Type)", rating: 40 }, { ref: "Cosmology", rating: 50 }, { ref: "Foreign Language (Type)", rating: 40 },
        { ref: "Hacking", rating: 40 }, { ref: "Heavy Machinery", rating: 50 }, { ref: "Military Training (Type)", rating: 40 },
        { ref: "Psychoanalyze", rating: 50 }, { ref: "Science (Type)", rating: 40 }, { ref: "Xenoarcheology", rating: 40 },
      ],
    },
    startingResources: 5,
    bonds: 2,
  },
  {
    name: "Spacer",
    recommendedStats: ["INT", "POW"],
    archetypalSkills: [
      { ref: "Administration", rating: 50 }, { ref: "Cosmology", rating: 30 }, { ref: "Craft (Type)", rating: 40 },
      { ref: "Insight", rating: 50 }, { ref: "Navigate", rating: 30 }, { ref: "Pilot (Type)", rating: 40 },
      { ref: "Search", rating: 50 }, { ref: "Technology Use", rating: 60 },
    ],
    bonusChoice: {
      count: 4,
      options: [
        { ref: "Appraise", rating: 50 }, { ref: "Artificial Intelligence", rating: 40 }, { ref: "Craft (Type)", rating: 40 },
        { ref: "Firearms / Beam Weapons", rating: 60 }, { ref: "Military Training (Type)", rating: 40 }, { ref: "Planet / Station Lore (Type)", rating: 40 },
        { ref: "Research", rating: 50 }, { ref: "Survival (Type)", rating: 50 }, { ref: "Zero-G Maneuvering", rating: 40 },
      ],
    },
    startingResources: 4,
    bonds: 3,
  },
  {
    name: "Technologist",
    recommendedStats: ["INT", "POW"],
    archetypalSkills: [
      { ref: "Administration", rating: 50 }, { ref: "Alertness", rating: 50 }, { ref: "Art (Type)", rating: 40 },
      { ref: "Artificial Intelligence", rating: 50 }, { ref: "Persuade", rating: 40 }, { ref: "Search", rating: 50 }, { ref: "Technology Use", rating: 80 },
    ],
    bonusChoice: {
      count: 4,
      options: [
        { ref: "Appraise", rating: 50 }, { ref: "Cosmology", rating: 50 }, { ref: "Craft (Type)", rating: 40 },
        { ref: "Firearms / Beam Weapons", rating: 60 }, { ref: "Insight", rating: 50 }, { ref: "Military Training (Type)", rating: 40 },
        { ref: "Navigate", rating: 50 }, { ref: "Pilot (Type)", rating: 40 }, { ref: "Research", rating: 50 },
      ],
    },
    startingResources: 4,
    bonds: 3,
  },
  {
    name: "White-Collar Worker",
    recommendedStats: ["INT", "CHA"],
    archetypalSkills: [
      { ref: "Administration", rating: 60 }, { ref: "Charm", rating: 50 }, { ref: "Insight", rating: 50 },
      { ref: "Persuade", rating: 50 }, { ref: "Research", rating: 40 }, { ref: "Technology Use", rating: 60 },
    ],
    bonusChoice: {
      count: 4,
      options: [
        { ref: "Appraise", rating: 50 }, { ref: "Art (Type)", rating: 40 }, { ref: "Artificial Intelligence", rating: 40 },
        { ref: "Foreign Language (Type)", rating: 40 }, { ref: "Harangue", rating: 50 }, { ref: "History", rating: 50 },
        { ref: "Military Training (Type)", rating: 40 }, { ref: "Occult", rating: 50 },
      ],
    },
    startingResources: 5,
    bonds: 3,
  },
];

export function findFutureArchetype(name) {
  return ARCHETYPES_FUTURE.find((a) => a.name === name);
}
