// Modern Day skill list (Part 2 - Skills). Base ratings and descriptions
// transcribed from the SRD. `specialty: true` means the skill needs a
// sub-type chosen (e.g. "Art (Type)" -> "Art (Painting)") before it's a
// concrete, usable skill instance.
export const SKILLS_MODERN = [
  { name: "Administration", base: 10, specialty: false, description: "Understanding how bureaucracies work; sift financial records or meeting minutes for anomalies. Interpreting information in hand, not tracking it down (that's Research)." },
  { name: "Alertness", base: 20, specialty: false, description: "Detects danger: hear a weapon readied, catch mumbling through a wall, spot a concealed item, or catch someone using Stealth." },
  { name: "Anthropology", base: 0, specialty: false, description: "Study of living human cultures: morals, beliefs, customs; identify (not translate) obscure languages." },
  { name: "Appraise", base: 10, specialty: false, description: "Quickly determine an item's true value; useful for favorable bartering." },
  { name: "Archeology", base: 0, specialty: false, description: "Study of physical remains of human cultures; analyze a ruin's purpose or the circumstances of its destruction." },
  { name: "Art", base: 0, specialty: true, description: "Creating or performing emotionally-swaying work; also authenticating a creator's work.", specialtyExamples: ["Acting", "Dance", "Forgery", "Music", "Poetry", "Sculpture", "Singing", "Storytelling"] },
  { name: "Athletics", base: 30, specialty: false, description: "Trained physical feats: outrun someone, jump a gap, climb in a crisis, safe falls up to 3 yards, hit a thrown target, catch something unexpectedly." },
  { name: "Charm", base: 20, specialty: false, description: "Changing someone's viewpoint via guile, cunning, or flattery -- not threats (Harangue) or logic (Persuade)." },
  { name: "Craft", base: 0, specialty: true, description: "Specialized construction/repair requiring real training.", specialtyExamples: ["Blacksmith", "Carpenter", "Farmer", "Jury-Rigging", "Locksmith", "Mechanic"] },
  { name: "Disguise", base: 10, specialty: false, description: "Alter appearance, voice, posture, and mannerisms to avoid recognition without drawing attention." },
  { name: "Dodge", base: 30, specialty: false, description: "Evading attacks via instinct/reflexes; against firearms/explosives, only useful to reach cover." },
  { name: "Drive", base: 20, specialty: false, description: "Handling ground vehicles safely in a crisis, tense pursuit, or dangerous terrain." },
  { name: "Firearms", base: 20, specialty: false, description: "Safe, accurate shooting with common firearms in combat." },
  { name: "First Aid", base: 10, specialty: false, description: "Initial treatment/stabilization of injuries to recover Hit Points." },
  { name: "Foreign Language", base: 0, specialty: true, description: "Fluency in another language; 20% = halting conversation, 50% = native fluency.", specialtyExamples: [] },
  { name: "Forensics", base: 0, specialty: false, description: "Gathering detailed evidence from human remains: cause of a fire, a bullet's trajectory, a blood pool's severity." },
  { name: "Harangue", base: 10, specialty: false, description: "Browbeating someone into agreement via bluster, shouting, and threats." },
  { name: "Heavy Machinery", base: 10, specialty: false, description: "Safe operation of a tractor, crane, thresher, steam train, or other big machine in a crisis." },
  { name: "History", base: 10, specialty: false, description: "Uncovering facts and theories about human antiquity." },
  { name: "Insight", base: 10, specialty: false, description: "Obtaining information about a person, especially what they'd rather conceal, via observation and conversation." },
  { name: "Law", base: 0, specialty: true, description: "Understanding/manipulating a society's power structures. Usable at half chance for an unfamiliar legal system.", specialtyExamples: [] },
  { name: "Medicine", base: 0, specialty: false, description: "Diagnosis and long-term treatment of injury/illness." },
  { name: "Melee Weapons", base: 30, specialty: false, description: "Lethal use of melee weapons in combat." },
  { name: "Military Training", base: 0, specialty: true, description: "First-hand military training/experience: tactics, unit knowledge, common military equipment.", specialtyExamples: ["Heavy Weapons", "Demolitions"] },
  { name: "Natural World", base: 10, specialty: false, description: "Common understanding of weather, tides, animal behavior, and plant uses." },
  { name: "Navigate", base: 10, specialty: false, description: "Finding your way with maps, charts, compass, or dead reckoning." },
  { name: "Occult", base: 10, specialty: false, description: "Study of the supernatural per human tradition; cannot distinguish genuinely unnatural from mere superstition (that's Unnatural)." },
  { name: "Persuade", base: 20, specialty: false, description: "Changing someone's deeply held decision via reason; also resists persuasion/interrogation." },
  { name: "Pharmacy", base: 0, specialty: false, description: "Knowledge of drugs and herbal remedies: identify, create, and safely use medicines, antidotes, and poisons." },
  { name: "Pilot", base: 0, specialty: true, description: "Piloting waterborne or airborne vehicles safely through a crisis.", specialtyExamples: ["Airplane", "Drone", "Helicopter", "Airship", "Small Boat", "Ship"] },
  { name: "Psychoanalyze", base: 10, specialty: false, description: "Diagnosis/treatment of mental illness. Can't be used on yourself." },
  { name: "Regional Lore", base: 0, specialty: true, description: "Deep understanding unique to one region: local folktales, ruins, superstitions.", specialtyExamples: [] },
  { name: "Research", base: 10, specialty: false, description: "Finding specific information in a large repository: library catalogues, buried record details." },
  { name: "Ride", base: 10, specialty: false, description: "Handling, training, and riding animals safely." },
  { name: "Science", base: 0, specialty: true, description: "Deep study of how the world works, beyond common schooling.", specialtyExamples: ["Astronomy", "Biology", "Botany", "Chemistry", "Engineering", "Genetics", "Geology", "Mathematics", "Meteorology", "Physics", "Zoology"] },
  { name: "Search", base: 20, specialty: false, description: "Finding things concealed or obscured from plain sight." },
  { name: "Stealth", base: 10, specialty: false, description: "Concealing presence/activity: hide a weapon, pickpocket, move silently, blend into a crowd." },
  { name: "Surgery", base: 0, specialty: false, description: "Invasive treatment of injury/abnormality." },
  { name: "Survival", base: 10, specialty: true, description: "Knowledge of the natural world: expeditions, weather, food, water, shelter.", specialtyExamples: ["Desert", "Jungle", "Tundra", "Urban"] },
  { name: "Swim", base: 20, specialty: false, description: "Swimming in dangerous crises: rough water, saving a drowning friend." },
  { name: "Technology Use", base: 0, specialty: false, description: "Umbrella skill for using highly-specialized/technical devices safely and effectively." },
  { name: "Track", base: 10, specialty: false, description: "Locate and follow the tracks of a specific creature or person." },
  { name: "Unarmed Combat", base: 20, specialty: false, description: "Self-defense / fighting bare-handed." },
  { name: "Unnatural", base: 0, specialty: false, description: "Knowledge of the mind-shattering true secrets of the universe; reduces Max SAN as it rises; cannot be improved by the normal fail-and-check mechanic." },
];

export function findModernSkill(name) {
  return SKILLS_MODERN.find((s) => s.name === name);
}
