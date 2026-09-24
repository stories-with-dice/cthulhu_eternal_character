// Medieval Age Archetypes, transcribed from the standalone Medieval SRD PDF
// (the online markdown SRD leaves this era as a TODO stub). `fixedCommunityBond`
// models the book's note that a couple of archetypes grant a Community Bond
// with a specific fixed starting rating (use that value or half Permanent
// Resources, whichever is higher).
export const ARCHETYPES_MEDIEVAL = [
  {
    name: "Artisan / Craftsperson",
    recommendedStats: ["DEX"],
    archetypalSkills: [
      { ref: "Appraise", rating: 60 }, { ref: "Art or Craft (Type)", rating: 80 }, { ref: "Art or Craft (Type)", rating: 60 },
      { ref: "Athletics", rating: 50 }, { ref: "Insight", rating: 50 }, { ref: "Scavenge", rating: 50 }, { ref: "Search", rating: 60 },
    ],
    bonusChoice: {
      count: 3,
      options: [
        { ref: "Carouse", rating: 40 }, { ref: "Dodge", rating: 70 }, { ref: "Foreign Court/Kingdom (Type)", rating: 40 },
        { ref: "Foreign Language (Type)", rating: 40 }, { ref: "Herb Lore", rating: 60 }, { ref: "Literacy", rating: 40 },
        { ref: "Religion (Type)", rating: 50 }, { ref: "Repair/Devise", rating: 40 }, { ref: "Persuade", rating: 60 },
      ],
    },
    startingResources: 4,
    bonds: 3,
  },
  {
    name: "Bandit / Criminal",
    recommendedStats: ["DEX", "CHA"],
    archetypalSkills: [
      { ref: "Alertness", rating: 50 }, { ref: "Appraise", rating: 40 }, { ref: "Folklore", rating: 40 },
      { ref: "Forage/Hunt", rating: 50 }, { ref: "Insight", rating: 50 }, { ref: "Persuade", rating: 40 },
      { ref: "Search", rating: 40 }, { ref: "Stealth", rating: 60 }, { ref: "Unarmed Combat", rating: 60 },
    ],
    bonusChoice: {
      count: 3,
      options: [
        { ref: "Art or Craft (Type)", rating: 40 }, { ref: "Athletics", rating: 70 }, { ref: "Beguile", rating: 60 },
        { ref: "Carouse", rating: 40 }, { ref: "Disguise", rating: 50 }, { ref: "Harangue/Taunt", rating: 50 },
        { ref: "Homeland", rating: 40 }, { ref: "Melee Weapons", rating: 70 }, { ref: "Repair/Devise", rating: 40 },
      ],
    },
    startingResources: 3,
    bonds: 5,
  },
  {
    name: "Cleric",
    recommendedStats: ["INT"],
    archetypalSkills: [
      { ref: "Homeland", rating: 30 }, { ref: "Insight", rating: 70 }, { ref: "Literacy", rating: 70 },
      { ref: "Procuratio", rating: 40 }, { ref: "Reassure", rating: 60 }, { ref: "Religion (Type)", rating: 70 },
    ],
    bonusChoice: {
      count: 1,
      options: [
        { ref: "Alertness", rating: 60 }, { ref: "Foreign Language (Latin)", rating: 40 }, { ref: "Harangue/Taunt", rating: 50 },
        { ref: "History", rating: 50 }, { ref: "Religion (Type)", rating: 50 }, { ref: "Occult (Type)", rating: 50 },
        { ref: "Persuade", rating: 60 }, { ref: "Quadrivium", rating: 40 }, { ref: "Trivium", rating: 40 },
      ],
    },
    startingResources: 5,
    bonds: 4,
    fixedCommunityBond: 12,
  },
  {
    name: "Farmer",
    recommendedStats: ["DEX", "STR"],
    archetypalSkills: [
      { ref: "Animal Handling", rating: 40 }, { ref: "Craft (Farming)", rating: 60 }, { ref: "Drive", rating: 50 },
      { ref: "Folklore", rating: 40 }, { ref: "Homeland", rating: 50 }, { ref: "Repair/Devise", rating: 40 }, { ref: "Ride", rating: 50 },
    ],
    bonusChoice: {
      count: 3,
      options: [
        { ref: "Art (Type)", rating: 40 }, { ref: "Athletics", rating: 70 }, { ref: "Carouse", rating: 40 },
        { ref: "Craft (Type)", rating: 40 }, { ref: "First Aid", rating: 50 }, { ref: "Herb Lore", rating: 60 },
        { ref: "Melee Weapons", rating: 70 }, { ref: "Navigate", rating: 50 }, { ref: "Ranged Weapons", rating: 60 }, { ref: "Search", rating: 60 },
      ],
    },
    startingResources: 4,
    bonds: 4,
  },
  {
    name: "Feudal Ruler / Noble",
    recommendedStats: ["DEX", "STR"],
    archetypalSkills: [
      { ref: "Forage/Hunt", rating: 40 }, { ref: "Harangue/Taunt", rating: 50 }, { ref: "Homeland", rating: 60 },
      { ref: "Religion (Local)", rating: 40 }, { ref: "Literacy", rating: 40 }, { ref: "Melee Weapons", rating: 60 },
      { ref: "Procuratio", rating: 40 }, { ref: "Ride", rating: 60 },
    ],
    bonusChoice: {
      count: 1,
      options: [
        { ref: "Animal Handling", rating: 50 }, { ref: "Carouse", rating: 40 }, { ref: "Dodge", rating: 70 },
        { ref: "First Aid", rating: 50 }, { ref: "Foreign Court/Kingdom (Type)", rating: 40 }, { ref: "Foreign Language (Type)", rating: 40 },
        { ref: "Insight", rating: 50 }, { ref: "Ranged Weapons", rating: 60 }, { ref: "Siege Weapons", rating: 40 },
      ],
    },
    startingResources: 5,
    bonds: 3,
    fixedCommunityBond: 12,
  },
  {
    name: "Guard / Soldier",
    recommendedStats: ["STR", "DEX"],
    archetypalSkills: [
      { ref: "Athletics", rating: 60 }, { ref: "Beguile", rating: 50 }, { ref: "Carouse", rating: 50 },
      { ref: "Folklore", rating: 40 }, { ref: "Homeland", rating: 40 }, { ref: "Harangue/Taunt", rating: 50 },
      { ref: "Melee Weapons", rating: 70 }, { ref: "Unarmed Combat", rating: 70 },
    ],
    bonusChoice: {
      count: 4,
      options: [
        { ref: "Appraise", rating: 50 }, { ref: "Dodge", rating: 70 }, { ref: "First Aid", rating: 50 },
        { ref: "Forage/Hunt", rating: 50 }, { ref: "Herb Lore", rating: 60 }, { ref: "Insight", rating: 50 },
        { ref: "Navigate", rating: 50 }, { ref: "Ranged Weapons", rating: 60 }, { ref: "Repair/Devise", rating: 40 }, { ref: "Scavenge", rating: 50 },
      ],
    },
    startingResources: 4,
    bonds: 3,
  },
  {
    name: "Healer",
    recommendedStats: ["INT"],
    archetypalSkills: [
      { ref: "Alchemy", rating: 40 }, { ref: "Chirurgury", rating: 50 }, { ref: "First Aid", rating: 70 },
      { ref: "Folklore", rating: 50 }, { ref: "Forage/Hunt", rating: 50 }, { ref: "Harangue/Taunt", rating: 40 },
      { ref: "Herb Lore", rating: 60 }, { ref: "Search", rating: 50 },
    ],
    bonusChoice: {
      count: 3,
      options: [
        { ref: "Alertness", rating: 60 }, { ref: "Appraise", rating: 50 }, { ref: "Beguile", rating: 60 },
        { ref: "Insight", rating: 50 }, { ref: "Persuade", rating: 60 }, { ref: "Procuratio", rating: 40 },
        { ref: "Reassure", rating: 50 }, { ref: "Scavenge", rating: 50 },
      ],
    },
    startingResources: 5,
    bonds: 2,
  },
  {
    name: "Hunter / Game Keeper",
    recommendedStats: ["DEX", "STR"],
    archetypalSkills: [
      { ref: "Alertness", rating: 60 }, { ref: "Craft (Farming)", rating: 60 }, { ref: "Folklore", rating: 40 },
      { ref: "Forage/Hunt", rating: 70 }, { ref: "Herb Lore", rating: 50 }, { ref: "Homeland", rating: 60 },
      { ref: "Ranged Weapons", rating: 60 }, { ref: "Ride", rating: 50 },
    ],
    bonusChoice: {
      count: 1,
      options: [
        { ref: "Animal Handling", rating: 50 }, { ref: "Athletics", rating: 70 }, { ref: "Carouse", rating: 40 },
        { ref: "Craft (Type)", rating: 40 }, { ref: "Dodge", rating: 70 }, { ref: "First Aid", rating: 50 },
        { ref: "Melee Weapons", rating: 70 }, { ref: "Navigate", rating: 50 }, { ref: "Procuratio", rating: 40 }, { ref: "Search", rating: 60 },
      ],
    },
    startingResources: 4,
    bonds: 4,
  },
  {
    name: "Merchant",
    recommendedStats: ["INT"],
    archetypalSkills: [
      { ref: "Appraise", rating: 60 }, { ref: "Art or Craft (Type)", rating: 40 }, { ref: "Beguile", rating: 60 },
      { ref: "Harangue/Taunt", rating: 50 }, { ref: "Homeland", rating: 30 }, { ref: "Insight", rating: 40 },
      { ref: "Literacy", rating: 50 }, { ref: "Persuade", rating: 60 },
    ],
    bonusChoice: {
      count: 2,
      options: [
        { ref: "Alertness", rating: 60 }, { ref: "Drive", rating: 60 }, { ref: "Folklore", rating: 50 },
        { ref: "Foreign Court/Kingdom (Type)", rating: 40 }, { ref: "Herb Lore", rating: 60 }, { ref: "History", rating: 50 },
        { ref: "Religion (Type)", rating: 50 }, { ref: "Ride", rating: 50 }, { ref: "Search", rating: 60 },
      ],
    },
    startingResources: 5,
    bonds: 3,
  },
  {
    name: "Monk / Nun",
    recommendedStats: ["INT"],
    archetypalSkills: [
      { ref: "First Aid", rating: 50 }, { ref: "Foreign Language (Latin)", rating: 50 }, { ref: "Herb Lore", rating: 40 },
      { ref: "Homeland", rating: 30 }, { ref: "Insight", rating: 70 }, { ref: "Literacy", rating: 70 },
      { ref: "Procuratio", rating: 40 }, { ref: "Religion (Type)", rating: 70 },
    ],
    bonusChoice: {
      count: 2,
      options: [
        { ref: "Alertness", rating: 60 }, { ref: "Alchemy", rating: 40 }, { ref: "Ciphers", rating: 40 },
        { ref: "History", rating: 50 }, { ref: "Foreign Court/Kingdom (Type)", rating: 40 }, { ref: "Foreign Language (Type)", rating: 40 },
        { ref: "Occult (Type)", rating: 50 }, { ref: "Persuade", rating: 60 }, { ref: "Quadrivium", rating: 40 }, { ref: "Trivium", rating: 40 },
      ],
    },
    startingResources: 2,
    bonds: 4,
    fixedCommunityBond: 12,
  },
  {
    name: "Outcast / Hermit",
    recommendedStats: ["CON"],
    archetypalSkills: [
      { ref: "Alertness", rating: 60 }, { ref: "Dodge", rating: 50 }, { ref: "Folklore", rating: 50 },
      { ref: "Forage/Hunt", rating: 60 }, { ref: "Herb Lore", rating: 60 }, { ref: "Homeland", rating: 60 },
      { ref: "Insight", rating: 50 }, { ref: "Religion (Type)", rating: 50 }, { ref: "Scavenge", rating: 70 },
    ],
    bonusChoice: {
      count: 4,
      options: [
        { ref: "Appraise", rating: 50 }, { ref: "Animal Handling", rating: 50 }, { ref: "Beguile", rating: 60 },
        { ref: "First Aid", rating: 50 }, { ref: "Harangue/Taunt", rating: 50 }, { ref: "History", rating: 50 },
        { ref: "Persuade", rating: 60 }, { ref: "Ranged Weapons", rating: 60 }, { ref: "Search", rating: 60 },
        { ref: "Stealth", rating: 50 }, { ref: "Unarmed Combat", rating: 80 },
      ],
    },
    startingResources: 2,
    bonds: 3,
  },
  {
    name: "Scholar",
    recommendedStats: ["INT"],
    archetypalSkills: [
      { ref: "Foreign Language (Type)", rating: 50 }, { ref: "Homeland", rating: 60 }, { ref: "Literacy", rating: 50 },
      { ref: "Procuratio", rating: 40 }, { ref: "Quadrivium", rating: 60 }, { ref: "Trivium", rating: 60 },
    ],
    bonusChoice: {
      count: 2,
      options: [
        { ref: "Alchemy", rating: 40 }, { ref: "Alertness", rating: 60 }, { ref: "Folklore", rating: 50 },
        { ref: "Foreign Court/Kingdom (Type)", rating: 40 }, { ref: "Foreign Language (Type)", rating: 40 }, { ref: "Herb Lore", rating: 60 },
        { ref: "History", rating: 50 }, { ref: "Occult (Type)", rating: 50 }, { ref: "Religion (Type)", rating: 50 }, { ref: "Search", rating: 60 },
      ],
    },
    startingResources: 5,
    bonds: 3,
  },
];

export function findMedievalArchetype(name) {
  return ARCHETYPES_MEDIEVAL.find((a) => a.name === name);
}
