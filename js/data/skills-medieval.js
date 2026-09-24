// Medieval Age skill list, transcribed from the standalone Medieval SRD PDF
// (the online markdown SRD leaves this era as a TODO stub). Base ratings
// use each skill's own "Base Rating: X%" description-entry value; where the
// master summary table disagreed with the entry (Craft, Forage/Hunt,
// Religion), the entry value was used as authoritative since it matches the
// pattern of every other (Type) skill defaulting to 0%.
export const SKILLS_MEDIEVAL = [
  { name: "Alchemy", base: 0, specialty: false, description: "Pseudo-chemistry wrapped in mysticism: prolong life, cure disease, transmute metals. Practiced by scholars and wise women/cunning folk alike." },
  { name: "Alertness", base: 20, specialty: false, description: "Detects danger: hear a weapon readied, catch mumbled speech through a wall, spot a concealed item, notice someone using Stealth." },
  { name: "Animal Handling", base: 10, specialty: false, description: "Calm, control, or train animals. Does not cover controlling a mount while riding (that's Ride)." },
  { name: "Appraise", base: 10, specialty: false, description: "Quickly determine an item's true value; useful for favorable bartering." },
  { name: "Art", base: 0, specialty: true, description: "Expertise creating or performing emotionally-swaying work; authenticating a creator's work.", specialtyExamples: ["Acting", "Dance", "Forgery", "Music", "Poetry", "Sculpture", "Singing", "Storytelling"] },
  { name: "Athletics", base: 30, specialty: false, description: "Trained physical feats: outrun someone, jump a gap, emergency climbing, safe falls, hit a thrown target, catch something unexpectedly." },
  { name: "Beguile", base: 20, specialty: false, description: "Currying favor by flattering a target's sense of power or self-importance." },
  { name: "Carouse", base: 0, specialty: false, description: "Skill at social revelry and vice: hold your liquor, win games of chance, know where and how classes of society indulge." },
  { name: "Chirurgury", base: 0, specialty: false, description: "Invasive treatment of injury/abnormality (surgery); distinct from First Aid (keeps a patient alive) and Herb Lore (long-term care)." },
  { name: "Ciphers", base: 0, specialty: false, description: "Encoding and decoding hidden messages. Effective rating capped by the character's Literacy for written messages." },
  { name: "Craft", base: 0, specialty: true, description: "Specialized construction/repair work requiring real training.", specialtyExamples: ["Mechanic", "Locksmith", "Blacksmith", "Carpenter", "Farmer", "Woodworker"] },
  { name: "Disguise", base: 10, specialty: false, description: "Alter appearance, voice, posture, and mannerisms to avoid recognition without drawing attention." },
  { name: "Dodge", base: 30, specialty: false, description: "Evading attacks via instinct and reflexes." },
  { name: "Drive", base: 20, specialty: false, description: "Safely handling ground vehicles (carts, wagons) in a crisis or on dangerous terrain." },
  { name: "First Aid", base: 10, specialty: false, description: "Initial treatment/stabilization of injuries to recover Hit Points." },
  { name: "Folklore", base: 10, specialty: false, description: "Knowledge of common people's regional customs, lore, and local myths and legends." },
  { name: "Forage/Hunt", base: 20, specialty: false, description: "Finding edible food or hunting game in the wild with proper tools; success feeds 4 people for a week." },
  { name: "Foreign Court/Kingdom", base: 0, specialty: true, description: "Deep, lived-in knowledge of one specific foreign power or outpost, beyond common facts.", specialtyExamples: [] },
  { name: "Foreign Language", base: 0, specialty: true, description: "Fluency in one specific foreign language; 20% = halting conversation, 50% = native fluency.", specialtyExamples: ["Latin"] },
  { name: "Harangue/Taunt", base: 10, specialty: false, description: "Browbeating someone into agreement or goading them via bluster, shouting, threats, or insults." },
  { name: "Herb Lore", base: 20, specialty: false, description: "Where/when to find and collect herbs, and what they're used for; feeds into Alchemy." },
  { name: "History", base: 10, specialty: false, description: "Recalling or researching facts about human antiquity, as much oral tradition as written record." },
  { name: "Homeland", base: 0, specialty: false, description: "General knowledge of one's own homeland: who's in charge, basic geography, power struggles, local landholding." },
  { name: "Insight", base: 10, specialty: false, description: "Reading a person, especially what they're hiding, via observation and conversation." },
  { name: "Literacy", base: 0, specialty: false, description: "Ability to read and write one's native language and any learned languages. Under 10% is functionally illiterate, over 40% fully literate." },
  { name: "Melee Weapons", base: 30, specialty: false, description: "Lethal use of hand-held melee weapons and shields in combat." },
  { name: "Navigate", base: 10, specialty: false, description: "Finding your way via maps, charts, orienteering, compass, or dead reckoning." },
  { name: "Occult", base: 10, specialty: true, description: "Academic study of the supernatural (magick, hermetic tradition, secret societies); cannot distinguish real unnatural threats from superstition (that's Unnatural).", specialtyExamples: [] },
  { name: "Persuade", base: 20, specialty: false, description: "Changing someone's firmly held decision through reasoned argument; also resists persuasion/interrogation." },
  { name: "Procuratio", base: 0, specialty: false, description: "Knowledge of how bureaucracies and their paperwork (charters, pipe rolls, journals) work." },
  { name: "Quadrivium", base: 0, specialty: false, description: "One of the two medieval scholarly liberal arts: music, astronomy, arithmetic, and geometry." },
  { name: "Ranged Weapons", base: 20, specialty: false, description: "Accurately hitting targets with bows, crossbows, and slings. Thrown weapons use Athletics instead." },
  { name: "Reassure", base: 10, specialty: false, description: "Helping someone recover from mental illness or calming an agitated person; cannot be used on yourself." },
  { name: "Religion", base: 0, specialty: true, description: "Detailed knowledge of one established belief system's doctrine, denominations, and texts.", specialtyExamples: [] },
  { name: "Repair/Devise", base: 0, specialty: false, description: "Jury-rigging broken equipment with makeshift, temporary fixes; this setting's version of Craft (Jury-Rigging)." },
  { name: "Ride", base: 10, specialty: false, description: "Handling, training, and riding animals; keeps rider and mount safe in a crisis." },
  { name: "Sailing", base: 0, specialty: true, description: "Piloting/navigating/captaining waterborne vessels safely through storms or pursuits.", specialtyExamples: ["Small Boat", "Ship", "Canoe"] },
  { name: "Scavenge", base: 10, specialty: false, description: "Finding and salvaging useful equipment or resources in places nobody else would think to search." },
  { name: "Search", base: 20, specialty: false, description: "Finding things deliberately concealed or hidden." },
  { name: "Siege Weapons", base: 0, specialty: false, description: "Using, maintaining, and defending against siege engines in medieval warfare." },
  { name: "Stealth", base: 10, specialty: false, description: "Concealing presence or activity: hide a weapon, pickpocket, move silently, blend into a crowd." },
  { name: "Swim", base: 20, specialty: false, description: "Used in dangerous aquatic situations: long swims, saving a drowning friend, escaping danger in the water." },
  { name: "Trivium", base: 0, specialty: false, description: "The 'lesser' medieval liberal art: rhetoric, grammar, and logic." },
  { name: "Unarmed Combat", base: 40, specialty: false, description: "Self-defense / bare-handed fighting to hurt or kill an opponent." },
  { name: "Unnatural", base: 0, specialty: false, description: "Knowledge of the mind-shattering true secrets of the universe; reduces Max SAN as it rises; cannot be improved by the normal fail-and-check mechanic." },
];

export function findMedievalSkill(name) {
  return SKILLS_MEDIEVAL.find((s) => s.name === name);
}
