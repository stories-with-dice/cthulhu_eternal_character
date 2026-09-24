(() => {
  // js/data/skills-modern.js
  var SKILLS_MODERN = [
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
    { name: "Unnatural", base: 0, specialty: false, description: "Knowledge of the mind-shattering true secrets of the universe; reduces Max SAN as it rises; cannot be improved by the normal fail-and-check mechanic." }
  ];

  // js/data/skills-future.js
  var SKILLS_FUTURE = [
    { name: "Administration", base: 10, specialty: false, description: "Understanding how bureaucracies work (forms, databases, biometrics). Interpreting information in hand, not tracking it down (that's Research)." },
    { name: "Alertness", base: 20, specialty: false, description: "Detects danger: hear a weapon readied, catch mumbling through a wall, spot a concealed item, or catch someone using Stealth." },
    { name: "Appraise", base: 10, specialty: false, description: "Quickly determine an item's true value; useful for favorable bartering." },
    { name: "Art", base: 0, specialty: true, description: "Creating or performing emotionally-swaying work; also authenticating a creator's work.", specialtyExamples: ["Acting", "Dance", "Forgery", "Holography", "Music", "Poetry", "Sculpture", "Singing", "Storytelling", "Videography"] },
    { name: "Artificial Intelligence", base: 0, specialty: false, description: "Deeper knowledge behind 'smart' systems: build AI-powered devices, detect AI-generated media, manipulate or confound an AI, bypass its guardrails." },
    { name: "Athletics", base: 30, specialty: false, description: "Trained physical feats: outrun someone, jump a gap, climb in a crisis, safe falls, hit a thrown target, catch something unexpectedly." },
    { name: "Charm", base: 20, specialty: false, description: "Changing someone's viewpoint via guile, cunning, or flattery -- not threats (Harangue) or logic (Persuade)." },
    { name: "Cosmology", base: 10, specialty: false, description: "Understanding of the forces/ecology/laws shaping a planet or celestial body: orbits, atmosphere, weather, native life, and (if relevant) terraforming." },
    { name: "Craft", base: 0, specialty: true, description: "Specialized construction/repair requiring real training.", specialtyExamples: ["Blacksmith", "Carpenter", "FoodTech", "Jury-Rigging", "SecurityTech", "RoboTech"] },
    { name: "Disguise", base: 10, specialty: false, description: "Alter appearance, voice, posture, biometrics, and mannerisms to avoid recognition without drawing attention." },
    { name: "Dodge", base: 30, specialty: false, description: "Evading attacks via instinct/reflexes; against firearms/explosives, only useful to reach cover." },
    { name: "Drive", base: 20, specialty: false, description: "Handling ground vehicles or surface-skimmer anti-grav safely in a crisis." },
    { name: "Firearms / Beam Weapons", base: 20, specialty: false, description: "Safe, accurate shooting with common firearms (projectile or laser/plasma beam) in combat." },
    { name: "First Aid", base: 10, specialty: false, description: "Initial treatment/stabilization of injuries to recover Hit Points." },
    { name: "Foreign Language", base: 0, specialty: true, description: "Fluency in another (human, alien, or synthetic) language; 20% = halting conversation, 50% = native fluency.", specialtyExamples: [] },
    { name: "Forensics", base: 0, specialty: false, description: "Gathering detailed evidence from human remains: cause of a fire, a bullet or beam's trajectory, a blood pool's severity." },
    { name: "Hacking", base: 0, specialty: false, description: "Defeating electronic security protecting doors, data, and communications; creating or using anti-security software." },
    { name: "Harangue", base: 10, specialty: false, description: "Browbeating someone into agreement via bluster, shouting, and threats." },
    { name: "Heavy Machinery", base: 10, specialty: false, description: "Safe operation of a tractor, crane, mecha, steam train, or other big machine in a crisis." },
    { name: "History", base: 10, specialty: false, description: "Uncovering facts and theories about the antiquity of humanity and other known intelligent species." },
    { name: "Insight", base: 10, specialty: false, description: "Obtaining information about a person, especially what they'd rather conceal, via observation and conversation." },
    { name: "Law", base: 0, specialty: true, description: "Understanding/manipulating a society's power structures. Usable at half chance for an unfamiliar legal system.", specialtyExamples: [] },
    { name: "Medicine", base: 0, specialty: false, description: "Diagnosis and long-term treatment of injury/illness." },
    { name: "Melee Weapons", base: 30, specialty: false, description: "Lethal use of melee weapons in combat: knife, crowbar, stun baton, power sabre." },
    { name: "Military Training", base: 0, specialty: true, description: "First-hand military training/experience: tactics, unit knowledge, power armor, heavy weapons.", specialtyExamples: ["Heavy Weapons", "Demolitions"] },
    { name: "Navigate", base: 10, specialty: false, description: "Finding your way with maps, charts, compass, or dead reckoning; may split into planet-bound vs. deep-space astrogation." },
    { name: "Occult", base: 10, specialty: false, description: "Study of the supernatural per human tradition; cannot distinguish genuinely unnatural from mere superstition (that's Unnatural)." },
    { name: "Persuade", base: 20, specialty: false, description: "Changing someone's deeply held decision via reason; also resists persuasion/interrogation." },
    { name: "Pharmacy", base: 0, specialty: false, description: "Knowledge of drugs, herbal remedies, nanomedicines, and medical devices." },
    { name: "Pilot", base: 0, specialty: true, description: "Piloting waterborne, airborne, or spaceborne vehicles safely through a crisis.", specialtyExamples: ["Airplane", "Drone", "Drop Ship", "Fighter", "Starship"] },
    { name: "Planet / Station Lore", base: 0, specialty: true, description: "Deep understanding unique to one planet, asteroid, or space station.", specialtyExamples: [] },
    { name: "Psychoanalyze", base: 10, specialty: false, description: "Diagnosis/treatment of mental illness. Can't be used on yourself." },
    { name: "Research", base: 10, specialty: false, description: "Finding specific information in a large repository: file systems, records, obsolete databases." },
    { name: "Science", base: 0, specialty: true, description: "Deep study of how the universe works, beyond common schooling.", specialtyExamples: ["Astronomy", "Botany", "Chemistry", "Engineering", "Genetics", "Geology", "Mathematics", "Meteorology", "Physics", "Quantum Mechanics", "Xenobiology", "Zoology"] },
    { name: "Search", base: 20, specialty: false, description: "Finding things concealed or obscured from plain sight." },
    { name: "Stealth", base: 10, specialty: false, description: "Concealing presence/activity: hide a weapon, pickpocket, move silently, blend into a crowd." },
    { name: "Surgery", base: 0, specialty: false, description: "Invasive treatment of injury/abnormality." },
    { name: "Survival", base: 10, specialty: true, description: "Knowledge of challenging natural or artificial environments: expeditions, toxic air, orbital hazards.", specialtyExamples: ["Desert", "Jungle", "Orbital", "Tundra", "Urban", "Zero-G"] },
    { name: "Swim", base: 20, specialty: false, description: "Swimming in dangerous crises: rough water, saving a drowning friend." },
    { name: "Technology Use", base: 0, specialty: false, description: "Umbrella skill for using highly-specialized devices and their limited intelligent control systems." },
    { name: "Track", base: 10, specialty: false, description: "Locate and follow the tracks of a specific creature or person." },
    { name: "Unarmed Combat", base: 20, specialty: false, description: "Self-defense / fighting bare-handed." },
    { name: "Unnatural", base: 0, specialty: false, description: "Knowledge of the mind-shattering true secrets of the cosmos; reduces Max SAN as it rises; cannot be improved by the normal fail-and-check mechanic." },
    { name: "Xenoarcheology", base: 0, specialty: false, description: "Study of the physical remains of intelligent-species cultures; analyze a ruin's ancient purpose or destruction." },
    { name: "Zero-G Maneuvering", base: 0, specialty: false, description: "Moving gracefully in low/zero gravity, avoiding becoming an uncoordinated tangle of flailing limbs." }
  ];

  // js/data/skills-medieval.js
  var SKILLS_MEDIEVAL = [
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
    { name: "Unnatural", base: 0, specialty: false, description: "Knowledge of the mind-shattering true secrets of the universe; reduces Max SAN as it rises; cannot be improved by the normal fail-and-check mechanic." }
  ];

  // js/data/archetypes-modern.js
  var ARCHETYPES_MODERN = [
    {
      name: "Artist / Craftsperson",
      recommendedStats: ["DEX"],
      archetypalSkills: [
        { ref: "Appraise", rating: 40 },
        { ref: "Art (Type)", rating: 60 },
        { ref: "Craft (Type)", rating: 40 },
        { ref: "Charm", rating: 60 },
        { ref: "Insight", rating: 60 },
        { ref: "Persuade", rating: 60 },
        { ref: "Search", rating: 60 }
      ],
      bonusChoice: {
        count: 5,
        options: [
          { ref: "Administration", rating: 50 },
          { ref: "Alertness", rating: 60 },
          { ref: "Anthropology", rating: 40 },
          { ref: "Athletics", rating: 70 },
          { ref: "Craft (Type)", rating: 40 },
          { ref: "Harangue", rating: 50 },
          { ref: "Heavy Machinery", rating: 50 },
          { ref: "Regional Lore (Type)", rating: 40 },
          { ref: "Technology Use", rating: 40 }
        ]
      },
      startingResources: 3,
      bonds: 3
    },
    {
      name: "Author / Blogger",
      recommendedStats: ["INT", "CHA"],
      archetypalSkills: [
        { ref: "Alertness", rating: 50 },
        { ref: "Art (Type)", rating: 50 },
        { ref: "Insight", rating: 60 },
        { ref: "Research", rating: 60 },
        { ref: "Search", rating: 60 },
        { ref: "Technology Use", rating: 20 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Anthropology", rating: 40 },
          { ref: "Archeology", rating: 40 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Harangue", rating: 50 },
          { ref: "History", rating: 50 },
          { ref: "Law (Type)", rating: 40 },
          { ref: "Occult", rating: 50 },
          { ref: "Regional Lore (Type)", rating: 40 },
          { ref: "Science (Type)", rating: 40 }
        ]
      },
      startingResources: 4,
      bonds: 4
    },
    {
      name: "Conspiracy Theorist / Expert",
      recommendedStats: ["CHA", "POW"],
      archetypalSkills: [
        { ref: "Craft (Type)", rating: 40 },
        { ref: "Firearms", rating: 50 },
        { ref: "First Aid", rating: 40 },
        { ref: "Natural World", rating: 50 },
        { ref: "Navigate", rating: 50 },
        { ref: "Search", rating: 50 },
        { ref: "Survival (Type)", rating: 50 },
        { ref: "Track", rating: 50 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Firearms", rating: 60 },
          { ref: "Heavy Machinery", rating: 50 },
          { ref: "History", rating: 50 },
          { ref: "Melee Weapons", rating: 70 },
          { ref: "Occult", rating: 50 },
          { ref: "Pilot (Type)", rating: 40 },
          { ref: "Ride", rating: 50 },
          { ref: "Survival (Type)", rating: 50 },
          { ref: "Unarmed Combat", rating: 60 }
        ]
      },
      startingResources: 3,
      bonds: 4
    },
    {
      name: "Criminal",
      recommendedStats: ["DEX"],
      archetypalSkills: [
        { ref: "Alertness", rating: 40 },
        { ref: "Appraise", rating: 40 },
        { ref: "Craft (Type)", rating: 40 },
        { ref: "Harangue", rating: 40 },
        { ref: "Law (Type)", rating: 30 },
        { ref: "Stealth", rating: 60 },
        { ref: "Search", rating: 50 }
      ],
      bonusChoice: {
        count: 3,
        options: [
          { ref: "Administration", rating: 50 },
          { ref: "Art (Type)", rating: 40 },
          { ref: "Athletics", rating: 70 },
          { ref: "Charm", rating: 60 },
          { ref: "Dodge", rating: 70 },
          { ref: "Firearms", rating: 60 },
          { ref: "Insight", rating: 50 },
          { ref: "Melee Weapons", rating: 70 },
          { ref: "Technology Use", rating: 40 }
        ]
      },
      startingResources: 5,
      bonds: 4
    },
    {
      name: "Doctor / Nurse",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "Administration", rating: 30 },
        { ref: "Charm", rating: 40 },
        { ref: "First Aid", rating: 50 },
        { ref: "Insight", rating: 50 },
        { ref: "Medicine", rating: 50 },
        { ref: "Science (Type)", rating: 40 },
        { ref: "Search", rating: 60 },
        { ref: "Surgery", rating: 40 },
        { ref: "Technology Use", rating: 30 }
      ],
      bonusChoice: {
        count: 2,
        options: [
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Forensics", rating: 40 },
          { ref: "Pharmacy", rating: 40 },
          { ref: "Psychoanalyze", rating: 50 },
          { ref: "Research", rating: 50 },
          { ref: "Science (Type)", rating: 40 }
        ]
      },
      startingResources: 5,
      bonds: 3
    },
    {
      name: "Historian / Genealogist",
      recommendedStats: ["INT", "CHA"],
      archetypalSkills: [
        { ref: "Administration", rating: 50 },
        { ref: "Anthropology", rating: 50 },
        { ref: "Archeology", rating: 50 },
        { ref: "History", rating: 70 },
        { ref: "Research", rating: 60 },
        { ref: "Technology Use", rating: 30 }
      ],
      bonusChoice: {
        count: 3,
        options: [
          { ref: "Art (Type)", rating: 40 },
          { ref: "Craft (Type)", rating: 40 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Law (Type)", rating: 40 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Persuade", rating: 60 },
          { ref: "Regional Lore (Type)", rating: 40 },
          { ref: "Search", rating: 60 }
        ]
      },
      startingResources: 4,
      bonds: 4
    },
    {
      name: "Law Enforcer / Agent",
      recommendedStats: ["CON", "CHA"],
      archetypalSkills: [
        { ref: "Alertness", rating: 50 },
        { ref: "Athletics", rating: 60 },
        { ref: "Drive", rating: 50 },
        { ref: "Firearms", rating: 60 },
        { ref: "Harangue", rating: 60 },
        { ref: "Insight", rating: 50 },
        { ref: "Law (Type)", rating: 40 },
        { ref: "Search", rating: 50 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Disguise", rating: 50 },
          { ref: "Dodge", rating: 70 },
          { ref: "First Aid", rating: 50 },
          { ref: "Forensics", rating: 40 },
          { ref: "Melee Weapons", rating: 70 },
          { ref: "Persuade", rating: 60 },
          { ref: "Regional Lore (Type)", rating: 40 },
          { ref: "Stealth", rating: 50 },
          { ref: "Technology Use", rating: 40 }
        ]
      },
      startingResources: 4,
      bonds: 3
    },
    {
      name: "Librarian / Archivist",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "Administration", rating: 60 },
        { ref: "Alertness", rating: 50 },
        { ref: "Appraise", rating: 50 },
        { ref: "Research", rating: 60 },
        { ref: "Search", rating: 50 },
        { ref: "Technology Use", rating: 50 }
      ],
      bonusChoice: {
        count: 5,
        options: [
          { ref: "Anthropology", rating: 40 },
          { ref: "Archeology", rating: 40 },
          { ref: "Art (Type)", rating: 40 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "History", rating: 50 },
          { ref: "Law (Type)", rating: 40 },
          { ref: "Occult", rating: 50 },
          { ref: "Regional Lore (Type)", rating: 40 }
        ]
      },
      startingResources: 4,
      bonds: 3
    },
    {
      name: "Researcher / Scientist",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "Administration", rating: 50 },
        { ref: "Persuade", rating: 60 },
        { ref: "Research", rating: 70 },
        { ref: "Science (Type)", rating: 70 },
        { ref: "Search", rating: 60 },
        { ref: "Technology Use", rating: 40 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Anthropology", rating: 40 },
          { ref: "Archeology", rating: 40 },
          { ref: "Art (Type)", rating: 40 },
          { ref: "Firearms", rating: 60 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Heavy Machinery", rating: 50 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Natural World", rating: 50 },
          { ref: "Psychoanalyze", rating: 50 },
          { ref: "Science (Type)", rating: 40 }
        ]
      },
      startingResources: 5,
      bonds: 2
    },
    {
      name: "Technologist",
      recommendedStats: ["INT", "POW"],
      archetypalSkills: [
        { ref: "Administration", rating: 50 },
        { ref: "Alertness", rating: 50 },
        { ref: "Art (Type)", rating: 40 },
        { ref: "Insight", rating: 50 },
        { ref: "Persuade", rating: 50 },
        { ref: "Search", rating: 50 },
        { ref: "Technology Use", rating: 80 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Appraise", rating: 50 },
          { ref: "Craft (Type)", rating: 40 },
          { ref: "Firearms", rating: 60 },
          { ref: "Heavy Machinery", rating: 50 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Navigate", rating: 50 },
          { ref: "Pilot (Type)", rating: 40 },
          { ref: "Research", rating: 50 }
        ]
      },
      startingResources: 4,
      bonds: 3
    },
    {
      name: "White-Collar Worker",
      recommendedStats: ["INT", "CHA"],
      archetypalSkills: [
        { ref: "Administration", rating: 60 },
        { ref: "Charm", rating: 50 },
        { ref: "Insight", rating: 50 },
        { ref: "Persuade", rating: 50 },
        { ref: "Research", rating: 40 },
        { ref: "Technology Use", rating: 60 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Appraise", rating: 50 },
          { ref: "Art (Type)", rating: 40 },
          { ref: "First Aid", rating: 50 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Harangue", rating: 50 },
          { ref: "History", rating: 50 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Occult", rating: 50 }
        ]
      },
      startingResources: 5,
      bonds: 3
    }
  ];

  // js/data/archetypes-future.js
  var ARCHETYPES_FUTURE = [
    {
      name: "Artist / Craftsperson",
      recommendedStats: ["DEX"],
      archetypalSkills: [
        { ref: "Appraise", rating: 40 },
        { ref: "Art (Type)", rating: 60 },
        { ref: "Craft (Type)", rating: 40 },
        { ref: "Charm", rating: 60 },
        { ref: "Insight", rating: 60 },
        { ref: "Persuade", rating: 60 },
        { ref: "Search", rating: 60 }
      ],
      bonusChoice: {
        count: 5,
        options: [
          { ref: "Administration", rating: 50 },
          { ref: "Alertness", rating: 60 },
          { ref: "Artificial Intelligence", rating: 40 },
          { ref: "Athletics", rating: 70 },
          { ref: "Craft (Type)", rating: 40 },
          { ref: "Harangue", rating: 50 },
          { ref: "Heavy Machinery", rating: 50 },
          { ref: "Planet / Station Lore (Type)", rating: 40 },
          { ref: "Technology Use", rating: 40 }
        ]
      },
      startingResources: 3,
      bonds: 3
    },
    {
      name: "Author / Vlogger / Memlogger",
      recommendedStats: ["INT", "CHA"],
      archetypalSkills: [
        { ref: "Alertness", rating: 50 },
        { ref: "Art (Type)", rating: 50 },
        { ref: "Insight", rating: 60 },
        { ref: "Research", rating: 60 },
        { ref: "Search", rating: 60 },
        { ref: "Technology Use", rating: 20 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Cosmology", rating: 50 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Harangue", rating: 50 },
          { ref: "History", rating: 50 },
          { ref: "Law (Type)", rating: 40 },
          { ref: "Occult", rating: 50 },
          { ref: "Planet / Station Lore (Type)", rating: 40 },
          { ref: "Science (Type)", rating: 40 },
          { ref: "Xenoarcheology", rating: 40 }
        ]
      },
      startingResources: 4,
      bonds: 4
    },
    {
      name: "Criminal",
      recommendedStats: ["DEX"],
      archetypalSkills: [
        { ref: "Alertness", rating: 40 },
        { ref: "Appraise", rating: 40 },
        { ref: "Craft (Type)", rating: 40 },
        { ref: "Harangue", rating: 40 },
        { ref: "Law (Type)", rating: 30 },
        { ref: "Stealth", rating: 60 },
        { ref: "Search", rating: 50 }
      ],
      bonusChoice: {
        count: 3,
        options: [
          { ref: "Art (Type)", rating: 40 },
          { ref: "Artificial Intelligence", rating: 40 },
          { ref: "Athletics", rating: 70 },
          { ref: "Charm", rating: 60 },
          { ref: "Dodge", rating: 70 },
          { ref: "Firearms / Beam Weapons", rating: 60 },
          { ref: "Hacking", rating: 40 },
          { ref: "Insight", rating: 50 },
          { ref: "Melee Weapons", rating: 70 },
          { ref: "Technology Use", rating: 40 }
        ]
      },
      startingResources: 5,
      bonds: 4
    },
    {
      name: "Doctor / Nurse",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "Administration", rating: 30 },
        { ref: "Charm", rating: 40 },
        { ref: "First Aid", rating: 50 },
        { ref: "Insight", rating: 50 },
        { ref: "Medicine", rating: 50 },
        { ref: "Science (Type)", rating: 40 },
        { ref: "Search", rating: 60 },
        { ref: "Surgery", rating: 40 },
        { ref: "Technology Use", rating: 30 }
      ],
      bonusChoice: {
        count: 2,
        options: [
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Forensics", rating: 40 },
          { ref: "Pharmacy", rating: 40 },
          { ref: "Psychoanalyze", rating: 50 },
          { ref: "Research", rating: 50 },
          { ref: "Science (Type)", rating: 40 }
        ]
      },
      startingResources: 5,
      bonds: 3
    },
    {
      name: "Explorer / Pioneer",
      recommendedStats: ["CHA", "POW"],
      archetypalSkills: [
        { ref: "Cosmology", rating: 50 },
        { ref: "Craft (Type)", rating: 40 },
        { ref: "Firearms / Beam Weapons", rating: 50 },
        { ref: "First Aid", rating: 40 },
        { ref: "Navigate", rating: 50 },
        { ref: "Search", rating: 50 },
        { ref: "Survival (Type)", rating: 50 },
        { ref: "Track", rating: 50 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Firearms / Beam Weapons", rating: 60 },
          { ref: "Hacking", rating: 40 },
          { ref: "Heavy Machinery", rating: 50 },
          { ref: "History", rating: 50 },
          { ref: "Melee Weapons", rating: 70 },
          { ref: "Occult", rating: 50 },
          { ref: "Pilot (Type)", rating: 40 },
          { ref: "Unarmed Combat", rating: 60 },
          { ref: "Xenoarcheology", rating: 40 },
          { ref: "Zero-G Maneuvering", rating: 40 }
        ]
      },
      startingResources: 3,
      bonds: 4
    },
    {
      name: "Historian / Genealogist",
      recommendedStats: ["INT", "CHA"],
      archetypalSkills: [
        { ref: "Administration", rating: 50 },
        { ref: "History", rating: 70 },
        { ref: "Planet / Station Lore (Type)", rating: 50 },
        { ref: "Research", rating: 60 },
        { ref: "Technology Use", rating: 30 },
        { ref: "Xenoarcheology", rating: 50 }
      ],
      bonusChoice: {
        count: 3,
        options: [
          { ref: "Art (Type)", rating: 40 },
          { ref: "Artificial Intelligence", rating: 40 },
          { ref: "Craft (Type)", rating: 40 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Law (Type)", rating: 40 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Persuade", rating: 60 },
          { ref: "Search", rating: 60 }
        ]
      },
      startingResources: 4,
      bonds: 4
    },
    {
      name: "Law Enforcer / Agent",
      recommendedStats: ["CON", "CHA"],
      archetypalSkills: [
        { ref: "Alertness", rating: 50 },
        { ref: "Athletics", rating: 60 },
        { ref: "Drive", rating: 50 },
        { ref: "Firearms / Beam Weapons", rating: 60 },
        { ref: "Harangue", rating: 60 },
        { ref: "Insight", rating: 50 },
        { ref: "Law (Type)", rating: 40 },
        { ref: "Search", rating: 50 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Disguise", rating: 50 },
          { ref: "Dodge", rating: 70 },
          { ref: "First Aid", rating: 50 },
          { ref: "Forensics", rating: 40 },
          { ref: "Hacking", rating: 40 },
          { ref: "Melee Weapons", rating: 70 },
          { ref: "Persuade", rating: 60 },
          { ref: "Planet / Station Lore (Type)", rating: 40 },
          { ref: "Stealth", rating: 50 },
          { ref: "Technology Use", rating: 40 }
        ]
      },
      startingResources: 4,
      bonds: 3
    },
    {
      name: "Librarian / Archivist",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "Administration", rating: 60 },
        { ref: "Alertness", rating: 50 },
        { ref: "Appraise", rating: 50 },
        { ref: "Research", rating: 60 },
        { ref: "Search", rating: 50 },
        { ref: "Technology Use", rating: 50 }
      ],
      bonusChoice: {
        count: 5,
        options: [
          { ref: "Art (Type)", rating: 40 },
          { ref: "Artificial Intelligence", rating: 40 },
          { ref: "Cosmology", rating: 50 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "History", rating: 50 },
          { ref: "Law (Type)", rating: 40 },
          { ref: "Occult", rating: 50 },
          { ref: "Planet / Station Lore (Type)", rating: 40 },
          { ref: "Xenoarcheology", rating: 40 }
        ]
      },
      startingResources: 4,
      bonds: 3
    },
    {
      name: "Researcher / Scientist",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "Administration", rating: 50 },
        { ref: "Artificial Intelligence", rating: 30 },
        { ref: "Persuade", rating: 60 },
        { ref: "Research", rating: 60 },
        { ref: "Science (Type)", rating: 60 },
        { ref: "Search", rating: 50 },
        { ref: "Technology Use", rating: 40 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Art (Type)", rating: 40 },
          { ref: "Cosmology", rating: 50 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Hacking", rating: 40 },
          { ref: "Heavy Machinery", rating: 50 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Psychoanalyze", rating: 50 },
          { ref: "Science (Type)", rating: 40 },
          { ref: "Xenoarcheology", rating: 40 }
        ]
      },
      startingResources: 5,
      bonds: 2
    },
    {
      name: "Spacer",
      recommendedStats: ["INT", "POW"],
      archetypalSkills: [
        { ref: "Administration", rating: 50 },
        { ref: "Cosmology", rating: 30 },
        { ref: "Craft (Type)", rating: 40 },
        { ref: "Insight", rating: 50 },
        { ref: "Navigate", rating: 30 },
        { ref: "Pilot (Type)", rating: 40 },
        { ref: "Search", rating: 50 },
        { ref: "Technology Use", rating: 60 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Appraise", rating: 50 },
          { ref: "Artificial Intelligence", rating: 40 },
          { ref: "Craft (Type)", rating: 40 },
          { ref: "Firearms / Beam Weapons", rating: 60 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Planet / Station Lore (Type)", rating: 40 },
          { ref: "Research", rating: 50 },
          { ref: "Survival (Type)", rating: 50 },
          { ref: "Zero-G Maneuvering", rating: 40 }
        ]
      },
      startingResources: 4,
      bonds: 3
    },
    {
      name: "Technologist",
      recommendedStats: ["INT", "POW"],
      archetypalSkills: [
        { ref: "Administration", rating: 50 },
        { ref: "Alertness", rating: 50 },
        { ref: "Art (Type)", rating: 40 },
        { ref: "Artificial Intelligence", rating: 50 },
        { ref: "Persuade", rating: 40 },
        { ref: "Search", rating: 50 },
        { ref: "Technology Use", rating: 80 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Appraise", rating: 50 },
          { ref: "Cosmology", rating: 50 },
          { ref: "Craft (Type)", rating: 40 },
          { ref: "Firearms / Beam Weapons", rating: 60 },
          { ref: "Insight", rating: 50 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Navigate", rating: 50 },
          { ref: "Pilot (Type)", rating: 40 },
          { ref: "Research", rating: 50 }
        ]
      },
      startingResources: 4,
      bonds: 3
    },
    {
      name: "White-Collar Worker",
      recommendedStats: ["INT", "CHA"],
      archetypalSkills: [
        { ref: "Administration", rating: 60 },
        { ref: "Charm", rating: 50 },
        { ref: "Insight", rating: 50 },
        { ref: "Persuade", rating: 50 },
        { ref: "Research", rating: 40 },
        { ref: "Technology Use", rating: 60 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Appraise", rating: 50 },
          { ref: "Art (Type)", rating: 40 },
          { ref: "Artificial Intelligence", rating: 40 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Harangue", rating: 50 },
          { ref: "History", rating: 50 },
          { ref: "Military Training (Type)", rating: 40 },
          { ref: "Occult", rating: 50 }
        ]
      },
      startingResources: 5,
      bonds: 3
    }
  ];

  // js/data/archetypes-medieval.js
  var ARCHETYPES_MEDIEVAL = [
    {
      name: "Artisan / Craftsperson",
      recommendedStats: ["DEX"],
      archetypalSkills: [
        { ref: "Appraise", rating: 60 },
        { ref: "Art or Craft (Type)", rating: 80 },
        { ref: "Art or Craft (Type)", rating: 60 },
        { ref: "Athletics", rating: 50 },
        { ref: "Insight", rating: 50 },
        { ref: "Scavenge", rating: 50 },
        { ref: "Search", rating: 60 }
      ],
      bonusChoice: {
        count: 3,
        options: [
          { ref: "Carouse", rating: 40 },
          { ref: "Dodge", rating: 70 },
          { ref: "Foreign Court/Kingdom (Type)", rating: 40 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Herb Lore", rating: 60 },
          { ref: "Literacy", rating: 40 },
          { ref: "Religion (Type)", rating: 50 },
          { ref: "Repair/Devise", rating: 40 },
          { ref: "Persuade", rating: 60 }
        ]
      },
      startingResources: 4,
      bonds: 3
    },
    {
      name: "Bandit / Criminal",
      recommendedStats: ["DEX", "CHA"],
      archetypalSkills: [
        { ref: "Alertness", rating: 50 },
        { ref: "Appraise", rating: 40 },
        { ref: "Folklore", rating: 40 },
        { ref: "Forage/Hunt", rating: 50 },
        { ref: "Insight", rating: 50 },
        { ref: "Persuade", rating: 40 },
        { ref: "Search", rating: 40 },
        { ref: "Stealth", rating: 60 },
        { ref: "Unarmed Combat", rating: 60 }
      ],
      bonusChoice: {
        count: 3,
        options: [
          { ref: "Art or Craft (Type)", rating: 40 },
          { ref: "Athletics", rating: 70 },
          { ref: "Beguile", rating: 60 },
          { ref: "Carouse", rating: 40 },
          { ref: "Disguise", rating: 50 },
          { ref: "Harangue/Taunt", rating: 50 },
          { ref: "Homeland", rating: 40 },
          { ref: "Melee Weapons", rating: 70 },
          { ref: "Repair/Devise", rating: 40 }
        ]
      },
      startingResources: 3,
      bonds: 5
    },
    {
      name: "Cleric",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "Homeland", rating: 30 },
        { ref: "Insight", rating: 70 },
        { ref: "Literacy", rating: 70 },
        { ref: "Procuratio", rating: 40 },
        { ref: "Reassure", rating: 60 },
        { ref: "Religion (Type)", rating: 70 }
      ],
      bonusChoice: {
        count: 1,
        options: [
          { ref: "Alertness", rating: 60 },
          { ref: "Foreign Language (Latin)", rating: 40 },
          { ref: "Harangue/Taunt", rating: 50 },
          { ref: "History", rating: 50 },
          { ref: "Religion (Type)", rating: 50 },
          { ref: "Occult (Type)", rating: 50 },
          { ref: "Persuade", rating: 60 },
          { ref: "Quadrivium", rating: 40 },
          { ref: "Trivium", rating: 40 }
        ]
      },
      startingResources: 5,
      bonds: 4,
      fixedCommunityBond: 12
    },
    {
      name: "Farmer",
      recommendedStats: ["DEX", "STR"],
      archetypalSkills: [
        { ref: "Animal Handling", rating: 40 },
        { ref: "Craft (Farming)", rating: 60 },
        { ref: "Drive", rating: 50 },
        { ref: "Folklore", rating: 40 },
        { ref: "Homeland", rating: 50 },
        { ref: "Repair/Devise", rating: 40 },
        { ref: "Ride", rating: 50 }
      ],
      bonusChoice: {
        count: 3,
        options: [
          { ref: "Art (Type)", rating: 40 },
          { ref: "Athletics", rating: 70 },
          { ref: "Carouse", rating: 40 },
          { ref: "Craft (Type)", rating: 40 },
          { ref: "First Aid", rating: 50 },
          { ref: "Herb Lore", rating: 60 },
          { ref: "Melee Weapons", rating: 70 },
          { ref: "Navigate", rating: 50 },
          { ref: "Ranged Weapons", rating: 60 },
          { ref: "Search", rating: 60 }
        ]
      },
      startingResources: 4,
      bonds: 4
    },
    {
      name: "Feudal Ruler / Noble",
      recommendedStats: ["DEX", "STR"],
      archetypalSkills: [
        { ref: "Forage/Hunt", rating: 40 },
        { ref: "Harangue/Taunt", rating: 50 },
        { ref: "Homeland", rating: 60 },
        { ref: "Religion (Local)", rating: 40 },
        { ref: "Literacy", rating: 40 },
        { ref: "Melee Weapons", rating: 60 },
        { ref: "Procuratio", rating: 40 },
        { ref: "Ride", rating: 60 }
      ],
      bonusChoice: {
        count: 1,
        options: [
          { ref: "Animal Handling", rating: 50 },
          { ref: "Carouse", rating: 40 },
          { ref: "Dodge", rating: 70 },
          { ref: "First Aid", rating: 50 },
          { ref: "Foreign Court/Kingdom (Type)", rating: 40 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Insight", rating: 50 },
          { ref: "Ranged Weapons", rating: 60 },
          { ref: "Siege Weapons", rating: 40 }
        ]
      },
      startingResources: 5,
      bonds: 3,
      fixedCommunityBond: 12
    },
    {
      name: "Guard / Soldier",
      recommendedStats: ["STR", "DEX"],
      archetypalSkills: [
        { ref: "Athletics", rating: 60 },
        { ref: "Beguile", rating: 50 },
        { ref: "Carouse", rating: 50 },
        { ref: "Folklore", rating: 40 },
        { ref: "Homeland", rating: 40 },
        { ref: "Harangue/Taunt", rating: 50 },
        { ref: "Melee Weapons", rating: 70 },
        { ref: "Unarmed Combat", rating: 70 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Appraise", rating: 50 },
          { ref: "Dodge", rating: 70 },
          { ref: "First Aid", rating: 50 },
          { ref: "Forage/Hunt", rating: 50 },
          { ref: "Herb Lore", rating: 60 },
          { ref: "Insight", rating: 50 },
          { ref: "Navigate", rating: 50 },
          { ref: "Ranged Weapons", rating: 60 },
          { ref: "Repair/Devise", rating: 40 },
          { ref: "Scavenge", rating: 50 }
        ]
      },
      startingResources: 4,
      bonds: 3
    },
    {
      name: "Healer",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "Alchemy", rating: 40 },
        { ref: "Chirurgury", rating: 50 },
        { ref: "First Aid", rating: 70 },
        { ref: "Folklore", rating: 50 },
        { ref: "Forage/Hunt", rating: 50 },
        { ref: "Harangue/Taunt", rating: 40 },
        { ref: "Herb Lore", rating: 60 },
        { ref: "Search", rating: 50 }
      ],
      bonusChoice: {
        count: 3,
        options: [
          { ref: "Alertness", rating: 60 },
          { ref: "Appraise", rating: 50 },
          { ref: "Beguile", rating: 60 },
          { ref: "Insight", rating: 50 },
          { ref: "Persuade", rating: 60 },
          { ref: "Procuratio", rating: 40 },
          { ref: "Reassure", rating: 50 },
          { ref: "Scavenge", rating: 50 }
        ]
      },
      startingResources: 5,
      bonds: 2
    },
    {
      name: "Hunter / Game Keeper",
      recommendedStats: ["DEX", "STR"],
      archetypalSkills: [
        { ref: "Alertness", rating: 60 },
        { ref: "Craft (Farming)", rating: 60 },
        { ref: "Folklore", rating: 40 },
        { ref: "Forage/Hunt", rating: 70 },
        { ref: "Herb Lore", rating: 50 },
        { ref: "Homeland", rating: 60 },
        { ref: "Ranged Weapons", rating: 60 },
        { ref: "Ride", rating: 50 }
      ],
      bonusChoice: {
        count: 1,
        options: [
          { ref: "Animal Handling", rating: 50 },
          { ref: "Athletics", rating: 70 },
          { ref: "Carouse", rating: 40 },
          { ref: "Craft (Type)", rating: 40 },
          { ref: "Dodge", rating: 70 },
          { ref: "First Aid", rating: 50 },
          { ref: "Melee Weapons", rating: 70 },
          { ref: "Navigate", rating: 50 },
          { ref: "Procuratio", rating: 40 },
          { ref: "Search", rating: 60 }
        ]
      },
      startingResources: 4,
      bonds: 4
    },
    {
      name: "Merchant",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "Appraise", rating: 60 },
        { ref: "Art or Craft (Type)", rating: 40 },
        { ref: "Beguile", rating: 60 },
        { ref: "Harangue/Taunt", rating: 50 },
        { ref: "Homeland", rating: 30 },
        { ref: "Insight", rating: 40 },
        { ref: "Literacy", rating: 50 },
        { ref: "Persuade", rating: 60 }
      ],
      bonusChoice: {
        count: 2,
        options: [
          { ref: "Alertness", rating: 60 },
          { ref: "Drive", rating: 60 },
          { ref: "Folklore", rating: 50 },
          { ref: "Foreign Court/Kingdom (Type)", rating: 40 },
          { ref: "Herb Lore", rating: 60 },
          { ref: "History", rating: 50 },
          { ref: "Religion (Type)", rating: 50 },
          { ref: "Ride", rating: 50 },
          { ref: "Search", rating: 60 }
        ]
      },
      startingResources: 5,
      bonds: 3
    },
    {
      name: "Monk / Nun",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "First Aid", rating: 50 },
        { ref: "Foreign Language (Latin)", rating: 50 },
        { ref: "Herb Lore", rating: 40 },
        { ref: "Homeland", rating: 30 },
        { ref: "Insight", rating: 70 },
        { ref: "Literacy", rating: 70 },
        { ref: "Procuratio", rating: 40 },
        { ref: "Religion (Type)", rating: 70 }
      ],
      bonusChoice: {
        count: 2,
        options: [
          { ref: "Alertness", rating: 60 },
          { ref: "Alchemy", rating: 40 },
          { ref: "Ciphers", rating: 40 },
          { ref: "History", rating: 50 },
          { ref: "Foreign Court/Kingdom (Type)", rating: 40 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Occult (Type)", rating: 50 },
          { ref: "Persuade", rating: 60 },
          { ref: "Quadrivium", rating: 40 },
          { ref: "Trivium", rating: 40 }
        ]
      },
      startingResources: 2,
      bonds: 4,
      fixedCommunityBond: 12
    },
    {
      name: "Outcast / Hermit",
      recommendedStats: ["CON"],
      archetypalSkills: [
        { ref: "Alertness", rating: 60 },
        { ref: "Dodge", rating: 50 },
        { ref: "Folklore", rating: 50 },
        { ref: "Forage/Hunt", rating: 60 },
        { ref: "Herb Lore", rating: 60 },
        { ref: "Homeland", rating: 60 },
        { ref: "Insight", rating: 50 },
        { ref: "Religion (Type)", rating: 50 },
        { ref: "Scavenge", rating: 70 }
      ],
      bonusChoice: {
        count: 4,
        options: [
          { ref: "Appraise", rating: 50 },
          { ref: "Animal Handling", rating: 50 },
          { ref: "Beguile", rating: 60 },
          { ref: "First Aid", rating: 50 },
          { ref: "Harangue/Taunt", rating: 50 },
          { ref: "History", rating: 50 },
          { ref: "Persuade", rating: 60 },
          { ref: "Ranged Weapons", rating: 60 },
          { ref: "Search", rating: 60 },
          { ref: "Stealth", rating: 50 },
          { ref: "Unarmed Combat", rating: 80 }
        ]
      },
      startingResources: 2,
      bonds: 3
    },
    {
      name: "Scholar",
      recommendedStats: ["INT"],
      archetypalSkills: [
        { ref: "Foreign Language (Type)", rating: 50 },
        { ref: "Homeland", rating: 60 },
        { ref: "Literacy", rating: 50 },
        { ref: "Procuratio", rating: 40 },
        { ref: "Quadrivium", rating: 60 },
        { ref: "Trivium", rating: 60 }
      ],
      bonusChoice: {
        count: 2,
        options: [
          { ref: "Alchemy", rating: 40 },
          { ref: "Alertness", rating: 60 },
          { ref: "Folklore", rating: 50 },
          { ref: "Foreign Court/Kingdom (Type)", rating: 40 },
          { ref: "Foreign Language (Type)", rating: 40 },
          { ref: "Herb Lore", rating: 60 },
          { ref: "History", rating: 50 },
          { ref: "Occult (Type)", rating: 50 },
          { ref: "Religion (Type)", rating: 50 },
          { ref: "Search", rating: 60 }
        ]
      },
      startingResources: 5,
      bonds: 3
    }
  ];

  // js/data/eras.js
  var ADVERSITY_SKILLS = {
    modern: ["First Aid", "Military Training (Type)", "Regional Lore (Type)", "Survival (Type)"],
    future: ["First Aid", "Military Training (Type)", "Planet / Station Lore (Type)", "Survival (Type)"],
    medieval: ["Carouse", "First Aid", "Foreign Court/Kingdom (Type)", "Scavenge"]
  };
  var DEFAULT_HARSHNESS = {
    modern: "Normal(ish)",
    future: "Normal(ish)",
    medieval: "Harsh"
  };
  var ERAS = {
    modern: {
      id: "modern",
      name: "Modern Age",
      skills: SKILLS_MODERN,
      archetypes: ARCHETYPES_MODERN,
      adversitySkills: ADVERSITY_SKILLS.modern,
      defaultHarshness: DEFAULT_HARSHNESS.modern
    },
    future: {
      id: "future",
      name: "Future Age",
      skills: SKILLS_FUTURE,
      archetypes: ARCHETYPES_FUTURE,
      adversitySkills: ADVERSITY_SKILLS.future,
      defaultHarshness: DEFAULT_HARSHNESS.future
    },
    medieval: {
      id: "medieval",
      name: "Medieval Age",
      skills: SKILLS_MEDIEVAL,
      archetypes: ARCHETYPES_MEDIEVAL,
      adversitySkills: ADVERSITY_SKILLS.medieval,
      defaultHarshness: DEFAULT_HARSHNESS.medieval
    }
  };
  var ERA_LIST = Object.values(ERAS);
  function getEra(eraId) {
    const era2 = ERAS[eraId];
    if (!era2) throw new Error(`Unknown era: ${eraId}`);
    return era2;
  }

  // js/engine/dice.js
  function rollDie(sides, rng = Math.random) {
    return Math.floor(rng() * sides) + 1;
  }
  function rollDice(count, sides, rng = Math.random) {
    let total = 0;
    for (let i = 0; i < count; i++) total += rollDie(sides, rng);
    return total;
  }
  function roll4d6DropLowest(rng = Math.random) {
    const rolls = [rollDie(6, rng), rollDie(6, rng), rollDie(6, rng), rollDie(6, rng)];
    rolls.sort((a, b) => a - b);
    return rolls[1] + rolls[2] + rolls[3];
  }
  function roll1d100(rng = Math.random) {
    const tens = rollDie(10, rng) - 1;
    const ones = rollDie(10, rng) - 1;
    const result = tens * 10 + ones;
    return result === 0 ? 100 : result;
  }
  function rollNotation(notation, rng = Math.random) {
    const cleaned = String(notation).replace(/\s+/g, "").toUpperCase();
    const termRe = /([+-]?)(\d*D\d+|\d+)/g;
    let match;
    let total = 0;
    let found = false;
    while ((match = termRe.exec(cleaned)) !== null) {
      found = true;
      const sign = match[1] === "-" ? -1 : 1;
      const term = match[2];
      if (term.includes("D")) {
        const [countStr, sidesStr] = term.split("D");
        const count = countStr === "" ? 1 : parseInt(countStr, 10);
        const sides = parseInt(sidesStr, 10);
        total += sign * rollDice(count, sides, rng);
      } else {
        total += sign * parseInt(term, 10);
      }
    }
    if (!found) throw new Error(`Unrecognized dice notation: ${notation}`);
    return total;
  }

  // js/engine/statistics.js
  var STATISTICS = ["STR", "CON", "DEX", "INT", "POW", "CHA"];
  var ASSIGN_POINTS_TOTAL = 72;
  var ASSIGNABLE_STAT_SETS = {
    "Well-Rounded": [13, 13, 12, 12, 11, 11],
    Focused: [15, 14, 12, 11, 10, 10],
    "Highly Focused": [17, 14, 12, 10, 10, 9]
  };
  var HARSHNESS_LEVELS = ["Normal(ish)", "Harsh", "Very Harsh"];
  function rollStatistics(rng = Math.random) {
    const stats = {};
    for (const s of STATISTICS) stats[s] = roll4d6DropLowest(rng);
    return stats;
  }
  function assignPointsBaseline() {
    const per = ASSIGN_POINTS_TOTAL / STATISTICS.length;
    const stats = {};
    for (const s of STATISTICS) stats[s] = per;
    return stats;
  }
  function applyHarshnessStatBonus(stats, harshness, choice = "STR") {
    const result = { ...stats };
    if (harshness === "Harsh") {
      if (choice !== "STR" && choice !== "CON") throw new Error('choice must be "STR" or "CON" for a Harsh upbringing.');
      result[choice] += 1;
    } else if (harshness === "Very Harsh") {
      result.STR += 1;
      result.CON += 1;
    }
    return result;
  }
  function statisticRolls(stats) {
    const rolls = {};
    for (const s of STATISTICS) rolls[s] = stats[s] * 5;
    return rolls;
  }

  // js/engine/derivedAttributes.js
  var DAMAGE_BONUS_TABLE = [
    { max: 4, bonus: -2 },
    { max: 8, bonus: -1 },
    { max: 12, bonus: 0 },
    { max: 16, bonus: 1 },
    { max: Infinity, bonus: 2 }
  ];
  function damageBonus(str) {
    const row = DAMAGE_BONUS_TABLE.find((r) => str <= r.max);
    return row.bonus;
  }
  function hitPoints(str, con) {
    return Math.ceil((str + con) / 2);
  }
  function willpowerPoints(pow) {
    return pow;
  }
  function startingSanity(pow, harshness) {
    return harshness === "Normal(ish)" ? pow * 5 : pow * 4;
  }
  function breakingPoint(san, pow) {
    return san - pow;
  }
  function maxSanity(unnaturalSkillRating = 0) {
    return 99 - unnaturalSkillRating;
  }
  function recoverySanity(pow, unnaturalSkillRating = 0) {
    return Math.min(pow * 5, maxSanity(unnaturalSkillRating));
  }
  function computeDerivedAttributes(stats, harshness, unnaturalSkillRating = 0) {
    const san = startingSanity(stats.POW, harshness);
    return {
      hitPoints: hitPoints(stats.STR, stats.CON),
      willpowerPoints: willpowerPoints(stats.POW),
      sanity: san,
      breakingPoint: breakingPoint(san, stats.POW),
      maxSanity: maxSanity(unnaturalSkillRating),
      recoverySanity: recoverySanity(stats.POW, unnaturalSkillRating),
      damageBonus: damageBonus(stats.STR)
    };
  }

  // js/engine/ceSkillRef.js
  function parseCeSkillRef(ref) {
    const match = ref.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
    if (!match) return { bases: [ref.trim()], specialty: null, needsBaseChoice: false };
    const [, basePart, rawSpecialty] = match;
    const bases = basePart.split(/\s+or\s+/i).map((b) => b.trim());
    const isOpen = /^(type|another)$/i.test(rawSpecialty.trim());
    return { bases, specialty: isOpen ? null : rawSpecialty.trim(), needsBaseChoice: bases.length > 1 };
  }
  function findSkillDef(base, era2) {
    return era2.skills.find((s) => s.name === base);
  }
  function baseNeedsSpecialty(base, era2) {
    return Boolean(findSkillDef(base, era2)?.specialty);
  }
  function ceRefNeedsChoice(ref, era2) {
    const { bases, specialty, needsBaseChoice } = parseCeSkillRef(ref);
    if (needsBaseChoice) return true;
    if (specialty != null) return false;
    return baseNeedsSpecialty(bases[0], era2);
  }
  function ceSpecialtyOptionsFor(base, era2) {
    const def = findSkillDef(base, era2);
    return def?.specialtyExamples?.length ? def.specialtyExamples : null;
  }
  function resolveCeSkillDisplayNameManual(ref, era2, { chosenBase, chosenSpecialty } = {}) {
    const { bases, specialty, needsBaseChoice } = parseCeSkillRef(ref);
    const base = needsBaseChoice ? chosenBase : bases[0];
    if (needsBaseChoice && !bases.includes(base)) return null;
    if (specialty != null) return `${base} (${specialty})`;
    if (!baseNeedsSpecialty(base, era2)) return base;
    if (!chosenSpecialty) return null;
    return `${base} (${chosenSpecialty})`;
  }
  function resolveCeSkillDisplayNameRandom(ref, era2, rng = Math.random) {
    const { bases, specialty, needsBaseChoice } = parseCeSkillRef(ref);
    const base = needsBaseChoice ? bases[Math.floor(rng() * bases.length)] : bases[0];
    if (specialty != null) return `${base} (${specialty})`;
    if (!baseNeedsSpecialty(base, era2)) return base;
    const options = ceSpecialtyOptionsFor(base, era2);
    const pick = options ? options[Math.floor(rng() * options.length)] : "General";
    return `${base} (${pick})`;
  }
  function ceBaseSkillName(displayName) {
    return parseCeSkillRef(displayName).bases[0];
  }

  // js/engine/archetypeEngine.js
  function pickRandomDistinct(pool, count, rng) {
    const working = [...pool];
    const chosen = [];
    for (let i = 0; i < count && working.length > 0; i++) {
      const idx = Math.floor(rng() * working.length);
      chosen.push(working.splice(idx, 1)[0]);
    }
    return chosen;
  }
  function filterBonusPool(archetype) {
    const fixedRefs = new Set(archetype.archetypalSkills.map((s) => s.ref));
    return archetype.bonusChoice.options.filter((opt) => {
      const { specialty } = parseCeSkillRef(opt.ref);
      if (specialty == null) return true;
      return !fixedRefs.has(opt.ref);
    });
  }
  function resolveArchetypeSkillsRandom(archetype, era2, rng = Math.random) {
    const skills = {};
    for (const { ref, rating } of archetype.archetypalSkills) {
      const name = resolveCeSkillDisplayNameRandom(ref, era2, rng);
      skills[name] = Math.max(skills[name] ?? 0, rating);
    }
    const pool = filterBonusPool(archetype);
    const picks = pickRandomDistinct(pool, archetype.bonusChoice.count, rng);
    for (const { ref, rating } of picks) {
      let name = resolveCeSkillDisplayNameRandom(ref, era2, rng);
      let attempts = 0;
      while (name in skills && attempts < 20) {
        name = resolveCeSkillDisplayNameRandom(ref, era2, rng);
        attempts++;
      }
      skills[name] = Math.max(skills[name] ?? 0, rating);
    }
    return skills;
  }
  function resolveArchetypeSkillsManual(archetype, era2, bonusPicks, fixedChoices = {}) {
    if (bonusPicks.length !== archetype.bonusChoice.count) {
      throw new Error(`Choose exactly ${archetype.bonusChoice.count} bonus skills (currently ${bonusPicks.length}).`);
    }
    const skills = {};
    for (const { ref, rating } of archetype.archetypalSkills) {
      const choice = fixedChoices[ref] ?? {};
      const name = resolveCeSkillDisplayNameManual(ref, era2, choice);
      if (!name) throw new Error(`Missing a specialty choice for "${ref}".`);
      skills[name] = Math.max(skills[name] ?? 0, rating);
    }
    const pool = filterBonusPool(archetype);
    const poolRefs = new Set(pool.map((o) => o.ref));
    for (const pick of bonusPicks) {
      if (!poolRefs.has(pick.ref)) throw new Error(`"${pick.ref}" isn't one of the offered bonus options.`);
      const option = pool.find((o) => o.ref === pick.ref);
      const name = resolveCeSkillDisplayNameManual(pick.ref, era2, pick);
      if (!name) throw new Error(`Missing a specialty choice for "${pick.ref}".`);
      skills[name] = Math.max(skills[name] ?? 0, option.rating);
    }
    return skills;
  }

  // js/engine/ceSkillSheet.js
  function baselineSkills(era2) {
    const skills = {};
    for (const s of era2.skills) {
      if (s.specialty) continue;
      skills[s.name] = s.base;
    }
    return skills;
  }
  function ensureSkill(skills, name, era2) {
    if (name in skills) return skills[name];
    const base = ceBaseSkillName(name);
    const def = era2.skills.find((s) => s.name === base);
    skills[name] = def ? def.base : 0;
    return skills[name];
  }
  function setSkillRating(skills, name, rating, era2) {
    ensureSkill(skills, name, era2);
    skills[name] = Math.max(skills[name], rating);
    return skills[name];
  }

  // js/engine/resourcesEngine.js
  var RESOURCES_BREAKDOWN_TABLE = [
    { max: 0, atHand: 0, stowed: 0, stored: 0, checkBoxes: 0 },
    { max: 6, atHand: (r) => r, stowed: 0, stored: 0, checkBoxes: 1 },
    { max: 12, atHand: 6, stowed: (r) => r - 6, stored: 0, checkBoxes: 2 },
    { max: 19, atHand: 6, stowed: 6, stored: (r) => r - 12, checkBoxes: 3 }
  ];
  function resourcesBreakdown(rating) {
    if (rating <= 0) return { atHand: 0, stowed: 0, stored: 0, checkBoxes: 0 };
    const row = RESOURCES_BREAKDOWN_TABLE.find((r) => rating <= r.max) ?? RESOURCES_BREAKDOWN_TABLE[RESOURCES_BREAKDOWN_TABLE.length - 1];
    const resolve = (v) => typeof v === "function" ? v(rating) : v;
    return {
      atHand: resolve(row.atHand),
      stowed: resolve(row.stowed),
      stored: resolve(row.stored),
      checkBoxes: row.checkBoxes
    };
  }
  function resourcesBoostFromSacrifices(sacrificedPicks) {
    if (sacrificedPicks <= 0) return 0;
    return 5 + 2 * (sacrificedPicks - 1);
  }

  // js/engine/bondsEngine.js
  function individualBondStartingScore(cha) {
    return cha;
  }
  function communityBondStartingScore(resourcesRating) {
    return Math.ceil(resourcesRating / 2);
  }
  function communityBondBoostFromSacrifices(sacrificedPicks) {
    if (sacrificedPicks <= 0) return 0;
    return 5 + 2 * (sacrificedPicks - 1);
  }
  var COMMUNITY_BOND_MAX = 20;

  // js/engine/adversitySkillPoints.js
  var ADVERSITY_SKILL_POINT_VALUE = 20;
  var ADVERSITY_PICKS_BY_HARSHNESS = {
    "Normal(ish)": 0,
    Harsh: 1,
    "Very Harsh": 2
  };
  function adversitySkillPickCount(harshness) {
    return ADVERSITY_PICKS_BY_HARSHNESS[harshness] ?? 0;
  }
  function applyAdversitySkillPick(currentRating) {
    return currentRating + ADVERSITY_SKILL_POINT_VALUE;
  }

  // js/engine/bonusSkillPoints.js
  var BASE_BONUS_SKILL_POINT_PICKS = 10;
  var BONUS_SKILL_POINT_VALUE = 20;
  var SKILL_CREATION_CAP = 80;
  function totalBonusSkillPicks({ zeroedResources = false, communityBondsSetToOne = 0 } = {}) {
    return BASE_BONUS_SKILL_POINT_PICKS + (zeroedResources ? 1 : 0) + communityBondsSetToOne;
  }
  function applyBonusSkillPick(currentRating) {
    return Math.min(SKILL_CREATION_CAP, currentRating + BONUS_SKILL_POINT_VALUE);
  }

  // js/engine/mentalDamage.js
  function harshMentalDamageApplies(cha, pow) {
    return cha < 7 || pow < 7;
  }
  function veryHarshAdaptedApplies(cha, pow) {
    return cha < 10 || pow < 10;
  }
  function rollDisorderTest(pow, rng = Math.random) {
    const roll = roll1d100(rng);
    const target = pow * 4;
    return { roll, target, failed: roll > target };
  }
  function rollAdaptedAdjustment(adaptedTo, rng = Math.random) {
    if (adaptedTo !== "Violence" && adaptedTo !== "Helplessness") {
      throw new Error('adaptedTo must be "Violence" or "Helplessness".');
    }
    const amount = rollNotation("1D6", rng);
    return { adaptedTo, amount };
  }

  // js/data/disorders.js
  var DISORDERS = [
    {
      name: "Addiction",
      description: "Relies on a harmful habit or substance to get by. Losing 2+ SAN in a single roll triggers an acute episode (an overwhelming need); feeding it costs -20% to stats/skills for a few hours; going 24 hours without feeding it costs 1D6 WP (and prevents WP recovery), repeating every 24 hours."
    },
    {
      name: "Amnesia",
      description: "Losing 2+ SAN in a single roll triggers an acute episode that erases all memory of the episode until recovered somehow."
    },
    {
      name: "Depression",
      description: "Total despair and crushing inability to get anything done, sometimes as overwhelming guilt. Triggered by reminders of past trauma; during an episode every skill or stat test costs 1D4 WP."
    },
    {
      name: "Hysterical Blindness / Deafness / Paralysis",
      description: "Conversion disorder: losing 2+ SAN in a single roll triggers an acute episode leaving the Protagonist blind, deaf, or paralyzed (pick one) until the stressor passes."
    },
    {
      name: "Mania",
      description: "A consistently euphoric or irritable mood: frenzied activity, garrulousness, racing thoughts, trouble sleeping. Losing 2+ SAN in a single roll triggers an episode where tasks needing concentration or fine control are at one-fifth chance."
    },
    {
      name: "Megalomania / Narcissistic",
      description: "Sees themselves as a messiah or exempt from ordinary morality. Losing 2+ SAN in a single roll triggers an episode where any doubt about their superiority causes every attempt to get help or make a good impression to fail."
    },
    {
      name: "Multiple Personalities",
      description: "Suffering temporary insanity or reaching the Breaking Point triggers an episode where an alternate identity, with its own personality and memories, takes over."
    },
    {
      name: "Obsession",
      description: "Fixated on a person, place, event, act, or idea. Losing 2+ SAN in a single roll triggers a days-long episode where any long-term action or skill use is at -20%."
    },
    {
      name: "Paranoia",
      description: "Extreme suspicion and fear of invisible enemies. Losing 2+ SAN in a single roll triggers an episode of being unable to trust or rely on anyone."
    },
    {
      name: "Phobia",
      description: "An irrational fear related to the traumatic incident. Presence of the trigger requires a SAN test; failure triggers an acute episode forcing the Flee or Submit response to temporary insanity."
    },
    {
      name: "Philia",
      description: "An irrational fetish or allure for something odd associated with the trauma. Presence of the object requires a SAN test to maintain self-control; failure triggers an episode where the GM dictates the Protagonist's actions."
    },
    {
      name: "Psychogenic Fugue",
      description: "Suffering temporary insanity or reaching the Breaking Point triggers an episode of catatonia or wandering off in a daze, sometimes disappearing for days with no memory of the interval."
    },
    {
      name: "Schizoid",
      description: "Personality shifts toward uncharacteristic emotionlessness, perceived as cold or aloof; personal interaction and CHA tests are always halved. Losing 2+ SAN in a single roll triggers a days-long episode where CHA tests drop to one-fifth chance."
    },
    {
      name: 'PTSD ("Shell Shock")',
      description: "Nightmares, flashbacks, sleep trouble, and anxiety following life-threatening events. Triggered by reminders of past trauma; during an episode the GM chooses either a violent reaction to a perceived (possibly imagined) threat, or an acute depressive episode."
    }
  ];

  // js/data/bondSuggestions.js
  var SAMPLE_INDIVIDUAL_BONDS = [
    "Spouse or ex-spouse",
    "Son or daughter",
    "Parent or grandparent",
    "Best friend",
    "Member of the same gang or band",
    "Spiritual counsellor"
  ];
  var SAMPLE_COMMUNITY_BONDS = [
    "Group which shelters in the same place",
    "Church or support group",
    "Craft or trade guild",
    "Secret society"
  ];

  // js/engine/characterAssembly.js
  function assembleCharacter(parts) {
    return {
      name: parts.name || "",
      sex: parts.sex || "",
      age: parts.age ?? null,
      birthplace: parts.birthplace || "",
      home: parts.home || "",
      eraId: parts.eraId,
      eraName: parts.eraName,
      harshness: parts.harshness,
      statistics: parts.statistics,
      statisticRolls: parts.statisticRolls,
      derived: parts.derived,
      archetypeName: parts.archetypeName,
      skills: parts.skills,
      resources: parts.resources,
      bonds: parts.bonds,
      adversitySkillPicks: parts.adversitySkillPicks ?? [],
      bonusSkillPicks: parts.bonusSkillPicks ?? { total: 0, spentOnSkills: 0, spentOnResources: 0, spentOnBonds: 0 },
      mentalDamage: parts.mentalDamage ?? null,
      motivations: parts.motivations ?? [],
      options: parts.options
    };
  }

  // js/engine/characterFactory.js
  function defaultOptions(eraId = "modern") {
    const era2 = getEra(eraId);
    return {
      eraId,
      harshness: era2.defaultHarshness,
      archetypeName: null,
      // null = pick randomly
      statisticMethod: "roll",
      // 'roll' | 'assign'
      name: "",
      sex: ""
    };
  }
  function pickRandom(list, rng) {
    return list[Math.floor(rng() * list.length)];
  }
  function generateRandomCharacter(userOptions = {}, rng = Math.random) {
    const options = { ...defaultOptions(userOptions.eraId ?? "modern"), ...userOptions };
    const era2 = getEra(options.eraId);
    if (!HARSHNESS_LEVELS.includes(options.harshness)) throw new Error(`Unknown harshness: ${options.harshness}`);
    let stats = rollStatistics(rng);
    const harshChoice = pickRandom(["STR", "CON"], rng);
    stats = applyHarshnessStatBonus(stats, options.harshness, harshChoice);
    const derived = computeDerivedAttributes(stats, options.harshness);
    const archetype = options.archetypeName ? era2.archetypes.find((a) => a.name === options.archetypeName) : pickRandom(era2.archetypes, rng);
    if (!archetype) throw new Error(`Unknown archetype: ${options.archetypeName}`);
    const skills = baselineSkills(era2);
    const archetypeSkills = resolveArchetypeSkillsRandom(archetype, era2, rng);
    for (const [name, rating] of Object.entries(archetypeSkills)) setSkillRating(skills, name, rating, era2);
    const resourcesRating = archetype.startingResources;
    const resources = { rating: resourcesRating, breakdown: resourcesBreakdown(resourcesRating) };
    const bonds = [];
    let fixedCommunityBondUsed = false;
    for (let i = 0; i < archetype.bonds; i++) {
      const type = rng() < 0.5 ? "Individual" : "Community";
      if (type === "Individual") {
        bonds.push({ type, name: pickRandom(SAMPLE_INDIVIDUAL_BONDS, rng), rating: individualBondStartingScore(stats.CHA) });
      } else {
        let rating = communityBondStartingScore(resourcesRating);
        if (archetype.fixedCommunityBond != null && !fixedCommunityBondUsed) {
          rating = Math.max(rating, archetype.fixedCommunityBond);
          fixedCommunityBondUsed = true;
        }
        bonds.push({ type, name: pickRandom(SAMPLE_COMMUNITY_BONDS, rng), rating });
      }
    }
    if (archetype.fixedCommunityBond != null && !fixedCommunityBondUsed) {
      const rating = Math.max(communityBondStartingScore(resourcesRating), archetype.fixedCommunityBond);
      if (bonds.length > 0) {
        const idx = Math.floor(rng() * bonds.length);
        bonds[idx] = { type: "Community", name: pickRandom(SAMPLE_COMMUNITY_BONDS, rng), rating };
      }
    }
    const adversityCount = adversitySkillPickCount(options.harshness);
    const adversitySkillPicks = [];
    for (let i = 0; i < adversityCount; i++) {
      const ref = pickRandom(era2.adversitySkills, rng);
      const name = resolveCeSkillDisplayNameRandom(ref, era2, rng);
      const newRating = applyAdversitySkillPick(ensureSkill(skills, name, era2));
      skills[name] = newRating;
      adversitySkillPicks.push(name);
    }
    const bonusTotal = totalBonusSkillPicks();
    const bonusableSkillDefs = era2.skills.filter((s) => s.name !== "Unnatural");
    for (let i = 0; i < bonusTotal; i++) {
      const def = pickRandom(bonusableSkillDefs, rng);
      const ref = def.specialty ? `${def.name} (Type)` : def.name;
      const name = resolveCeSkillDisplayNameRandom(ref, era2, rng);
      const newRating = applyBonusSkillPick(ensureSkill(skills, name, era2));
      skills[name] = newRating;
    }
    let mentalDamage = null;
    if (options.harshness === "Harsh") {
      if (harshMentalDamageApplies(stats.CHA, stats.POW)) {
        const bondLoss = [];
        const indices = bonds.map((_, i) => i);
        for (let i = 0; i < 2 && indices.length > 0; i++) {
          const idx = indices.splice(Math.floor(rng() * indices.length), 1)[0];
          const amount = rollNotation("1D4", rng);
          bonds[idx].rating = Math.max(0, bonds[idx].rating - amount);
          bondLoss.push({ bondIndex: idx, amount });
        }
        mentalDamage = { harshBondLoss: bondLoss, disorder: null, adapted: null };
      }
    } else if (options.harshness === "Very Harsh") {
      const disorderTest = rollDisorderTest(stats.POW, rng);
      const disorder = disorderTest.failed ? pickRandom(DISORDERS, rng).name : null;
      let adapted = null;
      if (veryHarshAdaptedApplies(stats.CHA, stats.POW)) {
        const adaptedTo = pickRandom(["Violence", "Helplessness"], rng);
        const { amount } = rollAdaptedAdjustment(adaptedTo, rng);
        if (adaptedTo === "Violence") {
          stats.CHA = Math.max(0, stats.CHA - amount);
          for (const bond of bonds) bond.rating = Math.max(0, bond.rating - amount);
        } else {
          stats.POW = Math.max(0, stats.POW - amount);
        }
        adapted = { adaptedTo, amount };
      }
      mentalDamage = { harshBondLoss: [], disorder, adapted };
    }
    return assembleCharacter({
      name: options.name,
      sex: options.sex,
      age: options.age ?? null,
      birthplace: options.birthplace,
      home: options.home,
      eraId: era2.id,
      eraName: era2.name,
      harshness: options.harshness,
      statistics: stats,
      statisticRolls: statisticRolls(stats),
      derived,
      archetypeName: archetype.name,
      skills,
      resources,
      bonds,
      adversitySkillPicks,
      bonusSkillPicks: { total: bonusTotal, spentOnSkills: bonusTotal, spentOnResources: 0, spentOnBonds: 0 },
      mentalDamage,
      motivations: [],
      options
    });
  }

  // js/ui/render.js
  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "text") node.textContent = v;
      else if (k === "html") node.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const child of [].concat(children)) {
      if (child == null || child === false) continue;
      node.appendChild(typeof child === "string" || typeof child === "number" ? document.createTextNode(String(child)) : child);
    }
    return node;
  }
  function summaryCard(character) {
    const rows = [
      ["Era", character.eraName],
      ["Archetype", character.archetypeName],
      ["Harshness", character.harshness],
      ["Sex", character.sex || "-"],
      ["Age", character.age ?? "-"],
      ["Birthplace", character.birthplace || "-"],
      ["Home", character.home || "-"]
    ];
    return el("div", { class: "card" }, [
      el("h3", { text: "Summary" }),
      el("table", { class: "char-table" }, rows.map(([label, value]) => el("tr", {}, [el("td", { text: label }), el("td", { text: String(value) })])))
    ]);
  }
  function statisticsCard(character) {
    const rows = Object.entries(character.statistics).map(
      ([key, value]) => el("tr", {}, [el("td", { text: key }), el("td", { text: `${value} (${character.statisticRolls[key]}%)` })])
    );
    return el("div", { class: "card" }, [el("h3", { text: "Statistics" }), el("table", { class: "char-table" }, rows)]);
  }
  function derivedCard(character) {
    const d = character.derived;
    const rows = [
      ["Hit Points", d.hitPoints],
      ["Willpower Points", d.willpowerPoints],
      ["Sanity", d.sanity],
      ["Breaking Point", d.breakingPoint],
      ["Max Sanity", d.maxSanity],
      ["Recovery Sanity", d.recoverySanity],
      ["Damage Bonus", d.damageBonus > 0 ? `+${d.damageBonus}` : String(d.damageBonus)]
    ];
    return el("div", { class: "card" }, [
      el("h3", { text: "Derived Attributes" }),
      el("table", { class: "char-table" }, rows.map(([label, value]) => el("tr", {}, [el("td", { text: label }), el("td", { text: String(value) })])))
    ]);
  }
  function resourcesCard(character) {
    const r = character.resources;
    const rows = [
      ["Rating", r.rating],
      ["At Hand", r.breakdown.atHand],
      ["Stowed", r.breakdown.stowed],
      ["Stored", r.breakdown.stored],
      ["Check Boxes", r.breakdown.checkBoxes]
    ];
    return el("div", { class: "card" }, [
      el("h3", { text: "Resources" }),
      el("table", { class: "char-table" }, rows.map(([label, value]) => el("tr", {}, [el("td", { text: label }), el("td", { text: String(value) })])))
    ]);
  }
  function bondsCard(character) {
    if (!character.bonds?.length) return null;
    const list = el(
      "ul",
      { class: "features-list" },
      character.bonds.map((b) => el("li", { text: `${b.type}: ${b.name} (${b.rating})` }))
    );
    return el("div", { class: "card" }, [el("h3", { text: "Bonds" }), list]);
  }
  function mentalDamageCard(character) {
    const md = character.mentalDamage;
    if (!md) return null;
    const lines = [];
    if (md.harshBondLoss?.length) {
      for (const loss of md.harshBondLoss) {
        const bond = character.bonds[loss.bondIndex];
        lines.push(`Lost ${loss.amount} from ${bond ? bond.name : `Bond #${loss.bondIndex + 1}`}`);
      }
    }
    if (md.disorder) lines.push(`Starting Disorder: ${md.disorder}`);
    if (md.adapted) lines.push(`Adapted to ${md.adapted.adaptedTo} (-${md.adapted.amount} to ${md.adapted.adaptedTo === "Violence" ? "CHA and every Bond" : "POW"})`);
    if (lines.length === 0) return null;
    return el("div", { class: "card" }, [el("h3", { text: "Mental Damage from Harsh Upbringing" }), el("ul", { class: "features-list" }, lines.map((l) => el("li", { text: l })))]);
  }
  function motivationsCard(character) {
    if (!character.motivations?.length) return null;
    return el("div", { class: "card" }, [
      el("h3", { text: "Motivations" }),
      el("ul", { class: "features-list" }, character.motivations.map((m) => el("li", { text: m })))
    ]);
  }
  function skillsSection(character) {
    const entries = Object.entries(character.skills).filter(([, rating]) => rating > 0).sort((a, b) => a[0].localeCompare(b[0]));
    const grid = el("div", { class: "skills-grid" });
    for (const [name, rating] of entries) {
      grid.appendChild(
        el("div", { class: "skill-row" }, [el("span", { class: "skill-name", text: name }), el("span", { class: "skill-total", text: `${rating}%` })])
      );
    }
    return el("div", { class: "skills-section" }, [el("h3", { text: "Skills" }), grid]);
  }
  function renderCharacterSheet(container, character, { onNameChange } = {}) {
    container.innerHTML = "";
    const nameInput = el("input", {
      type: "text",
      value: character.name || "",
      placeholder: "Protagonist name",
      oninput: (e) => onNameChange?.(e.target.value)
    });
    const header = el("div", { class: "sheet-header" }, [
      el("div", {}, [nameInput, el("div", { class: "sheet-subline", text: `${character.archetypeName} \u2022 ${character.eraName} \u2022 ${character.harshness}` })])
    ]);
    const grid = el("div", { class: "sheet-grid" }, [
      summaryCard(character),
      statisticsCard(character),
      derivedCard(character),
      resourcesCard(character),
      bondsCard(character),
      mentalDamageCard(character),
      motivationsCard(character)
    ]);
    container.appendChild(header);
    container.appendChild(grid);
    container.appendChild(skillsSection(character));
  }

  // js/ui/storage.js
  var STORAGE_KEY = "ce-characters-v1";
  var PROBE_KEY = "__ce_storage_probe__";
  var memoryFallback = [];
  var persistent = null;
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
  function isStoragePersistent() {
    return detectPersistence();
  }
  function loadAllCharacters() {
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
  function saveAllCharacters(list) {
    memoryFallback = list;
    if (!detectPersistence()) return false;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      return true;
    } catch {
      return false;
    }
  }
  function saveCharacter(character) {
    const list = loadAllCharacters();
    const idx = list.findIndex((c) => c._id === character._id);
    if (idx >= 0) list[idx] = character;
    else list.push(character);
    saveAllCharacters(list);
    return list;
  }
  function deleteCharacter(id) {
    const list = loadAllCharacters().filter((c) => c._id !== id);
    saveAllCharacters(list);
    return list;
  }
  function newCharacterId() {
    return `char_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
  }

  // js/ui/export.js
  function triggerDownload(filename, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function safeFileBase(character) {
    const base = (character.name || character.archetypeName || "ce-character").trim();
    return base.replace(/[^a-z0-9\-_ ]/gi, "").replace(/\s+/g, "-").toLowerCase() || "ce-character";
  }
  function exportToJson(character) {
    const blob = new Blob([JSON.stringify(character, null, 2)], { type: "application/json" });
    triggerDownload(`${safeFileBase(character)}.json`, blob);
  }
  function characterToMarkdown(character) {
    const lines = [];
    lines.push(`# ${character.name || "Unnamed Protagonist"}`);
    lines.push("");
    lines.push(`**Archetype:** ${character.archetypeName}  `);
    lines.push(`**Era:** ${character.eraName}  `);
    lines.push(`**Harshness:** ${character.harshness}  `);
    lines.push(`**Sex:** ${character.sex || "-"}  `);
    lines.push(`**Age:** ${character.age ?? "-"}  `);
    lines.push(`**Birthplace:** ${character.birthplace || "-"}  `);
    lines.push(`**Home:** ${character.home || "-"}  `);
    lines.push("");
    lines.push("## Statistics");
    lines.push("");
    lines.push("| Statistic | Value | Roll |");
    lines.push("|---|---|---|");
    for (const [key, value] of Object.entries(character.statistics)) {
      lines.push(`| ${key} | ${value} | ${character.statisticRolls[key]}% |`);
    }
    lines.push("");
    lines.push("## Derived Attributes");
    lines.push("");
    const d = character.derived;
    lines.push(`- Hit Points: ${d.hitPoints}`);
    lines.push(`- Willpower Points: ${d.willpowerPoints}`);
    lines.push(`- Sanity: ${d.sanity}`);
    lines.push(`- Breaking Point: ${d.breakingPoint}`);
    lines.push(`- Max Sanity: ${d.maxSanity}`);
    lines.push(`- Recovery Sanity: ${d.recoverySanity}`);
    lines.push(`- Damage Bonus: ${d.damageBonus > 0 ? `+${d.damageBonus}` : d.damageBonus}`);
    lines.push("");
    lines.push("## Resources");
    lines.push("");
    const r = character.resources;
    lines.push(`Rating ${r.rating} (At Hand ${r.breakdown.atHand}, Stowed ${r.breakdown.stowed}, Stored ${r.breakdown.stored}, Check Boxes ${r.breakdown.checkBoxes})`);
    lines.push("");
    if (character.bonds?.length) {
      lines.push("## Bonds");
      lines.push("");
      for (const b of character.bonds) lines.push(`- ${b.type}: ${b.name} (${b.rating})`);
      lines.push("");
    }
    if (character.mentalDamage) {
      lines.push("## Mental Damage from Harsh Upbringing");
      lines.push("");
      const md = character.mentalDamage;
      if (md.disorder) lines.push(`- Starting Disorder: ${md.disorder}`);
      if (md.adapted) lines.push(`- Adapted to ${md.adapted.adaptedTo} (-${md.adapted.amount})`);
      for (const loss of md.harshBondLoss ?? []) {
        const bond = character.bonds[loss.bondIndex];
        lines.push(`- Lost ${loss.amount} from ${bond ? bond.name : `Bond #${loss.bondIndex + 1}`}`);
      }
      lines.push("");
    }
    if (character.motivations?.length) {
      lines.push("## Motivations");
      lines.push("");
      for (const m of character.motivations) lines.push(`- ${m}`);
      lines.push("");
    }
    lines.push("## Skills");
    lines.push("");
    lines.push("| Skill | Rating |");
    lines.push("|---|---|");
    for (const [name, rating] of Object.entries(character.skills).sort((a, b) => a[0].localeCompare(b[0]))) {
      if (rating > 0) lines.push(`| ${name} | ${rating}% |`);
    }
    lines.push("");
    return lines.join("\n");
  }
  function exportToMarkdown(character) {
    const blob = new Blob([characterToMarkdown(character)], { type: "text/markdown" });
    triggerDownload(`${safeFileBase(character)}.md`, blob);
  }
  function exportToPdf(character) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "pt", format: "letter" });
    const marginX = 40;
    let y = 50;
    const lineHeight = 14;
    const addLine = (text, opts = {}) => {
      const { size = 10, bold = false, gap = lineHeight } = opts;
      doc.setFontSize(size);
      doc.setFont(void 0, bold ? "bold" : "normal");
      if (y > 760) {
        doc.addPage();
        y = 50;
      }
      doc.text(text, marginX, y);
      y += gap;
    };
    addLine(character.name || "Unnamed Protagonist", { size: 18, bold: true, gap: 22 });
    addLine(`${character.archetypeName} - ${character.eraName}, ${character.harshness}, ${character.sex || "?"}, Age ${character.age ?? "?"}`, { size: 11 });
    y += 6;
    addLine("Statistics", { size: 13, bold: true, gap: 18 });
    addLine(Object.entries(character.statistics).map(([k, v]) => `${k} ${v}`).join("   "), { size: 10 });
    y += 6;
    addLine("Derived", { size: 13, bold: true, gap: 18 });
    const d = character.derived;
    addLine(`HP ${d.hitPoints}   WP ${d.willpowerPoints}   SAN ${d.sanity}   BP ${d.breakingPoint}   Max SAN ${d.maxSanity}   Dmg Bonus ${d.damageBonus > 0 ? `+${d.damageBonus}` : d.damageBonus}`, { size: 10 });
    y += 6;
    addLine("Resources", { size: 13, bold: true, gap: 18 });
    const r = character.resources;
    addLine(`Rating ${r.rating}  (At Hand ${r.breakdown.atHand}, Stowed ${r.breakdown.stowed}, Stored ${r.breakdown.stored}, Checks ${r.breakdown.checkBoxes})`, { size: 10 });
    y += 6;
    if (character.bonds?.length) {
      addLine("Bonds", { size: 13, bold: true, gap: 18 });
      for (const b of character.bonds) addLine(`${b.type}: ${b.name} (${b.rating})`, { size: 9, gap: 12 });
      y += 6;
    }
    addLine("Skills", { size: 13, bold: true, gap: 18 });
    for (const [name, rating] of Object.entries(character.skills).sort((a, b) => a[0].localeCompare(b[0]))) {
      if (rating > 0) addLine(`${name}  ${rating}%`, { size: 9, gap: 12 });
    }
    doc.save(`${safeFileBase(character)}.pdf`);
  }

  // js/ui/wizard.js
  var $ = (id) => document.getElementById(id);
  var state = null;
  var stepIndex = 0;
  var onFinishCallback = null;
  function freshState(options) {
    return {
      eraId: options.eraId,
      harshness: options.harshness,
      name: options.name || "",
      sex: options.sex || "",
      age: options.age ?? null,
      birthplace: "",
      home: "",
      motivations: [],
      statMethod: "roll",
      baseStatistics: null,
      harshnessChoice: "STR",
      statistics: null,
      archetypeName: options.archetypeName ?? null,
      archetypeFixedChoices: {},
      archetypeBonusPicks: [],
      resourcesSacrificePicks: 0,
      resourcesZeroed: false,
      bonds: [],
      adversityPicks: [],
      bonusSkillAllocations: [],
      mentalDamage: null
      // computed lazily on the Mental Damage step
    };
  }
  function era() {
    return getEra(state.eraId);
  }
  function activeSteps() {
    const steps = ["setup", "statistics", "archetype", "resourcesBonds", "skillPoints"];
    if (state.harshness !== "Normal(ish)") steps.push("mentalDamage");
    steps.push("finalDetails", "review");
    return steps;
  }
  var STEP_TITLES = {
    setup: "Step 0: Era & Harshness of Upbringing",
    statistics: "Step 1/2: Statistics & Derived Attributes",
    archetype: "Step 3: Select Archetype",
    resourcesBonds: "Step 4/5: Resources & Bonds",
    skillPoints: "Step 6: Adversity & Bonus Skill Points",
    mentalDamage: "Step 7: Mental Damage from Harsh Upbringing",
    finalDetails: "Step 8: Final Details",
    review: "Review & Finish"
  };
  function showError(msg) {
    const box = $("wizard-error");
    if (msg) {
      box.textContent = msg;
      box.hidden = false;
    } else {
      box.hidden = true;
    }
  }
  function currentStepId() {
    return activeSteps()[stepIndex];
  }
  function renderSetupStep(container) {
    const eraSelect = el(
      "select",
      {
        onchange: (e) => {
          state.eraId = e.target.value;
          state.harshness = era().defaultHarshness;
          state.archetypeName = null;
          rerenderStep();
        }
      },
      ERA_LIST.map((e) => {
        const opt = el("option", { value: e.id, text: e.name });
        if (e.id === state.eraId) opt.setAttribute("selected", "selected");
        return opt;
      })
    );
    const harshnessSelect = el(
      "select",
      { onchange: (e) => state.harshness = e.target.value },
      ["Normal(ish)", "Harsh", "Very Harsh"].map((h) => {
        const opt = el("option", { value: h, text: h });
        if (h === state.harshness) opt.setAttribute("selected", "selected");
        return opt;
      })
    );
    container.appendChild(
      el("div", { class: "field-row" }, [
        el("div", { class: "field" }, [el("label", { text: "Era" }), eraSelect]),
        el("div", { class: "field" }, [el("label", { text: "Harshness of Upbringing" }), harshnessSelect])
      ])
    );
    container.appendChild(
      el("p", {
        class: "readonly-note",
        text: "Normal(ish): no mechanical effect. Harsh: +1 STR or CON, 1 Adversity Skill Point pick, possible Bond loss. Very Harsh: +1 STR and CON, 2 Adversity picks, a disorder test, and possibly Adapted status."
      })
    );
  }
  function rerollStatistics() {
    if (state.statMethod === "assign") {
      state.baseStatistics = assignPointsBaseline();
    } else {
      state.baseStatistics = rollStatistics();
    }
  }
  function renderStatisticsStep(container) {
    if (!state.baseStatistics) rerollStatistics();
    const methodSelect = el(
      "select",
      {
        onchange: (e) => {
          state.statMethod = e.target.value;
          rerollStatistics();
          rerenderStep();
        }
      },
      [
        { v: "roll", t: "Roll (4D6 drop lowest x6)" },
        { v: "assign", t: "Assign 72 points" }
      ].map(({ v, t }) => {
        const opt = el("option", { value: v, text: t });
        if (v === state.statMethod) opt.setAttribute("selected", "selected");
        return opt;
      })
    );
    container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Method" }), methodSelect])]));
    if (state.statMethod === "assign") {
      const presetSelect = el(
        "select",
        {
          onchange: (e) => {
            if (!e.target.value) return;
            const values = ASSIGNABLE_STAT_SETS[e.target.value];
            STATISTICS.forEach((s, i) => state.baseStatistics[s] = values[i]);
            rerenderStep();
          }
        },
        [el("option", { value: "", text: "-- load a suggested set --" })].concat(
          Object.keys(ASSIGNABLE_STAT_SETS).map((name) => el("option", { value: name, text: name }))
        )
      );
      container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Suggested sets" }), presetSelect])]));
      const total = STATISTICS.reduce((sum, s) => sum + state.baseStatistics[s], 0);
      container.appendChild(el("p", { class: `budget-line${total !== ASSIGN_POINTS_TOTAL ? " over" : ""}`, text: `${total} / ${ASSIGN_POINTS_TOTAL} points assigned` }));
      const rows = STATISTICS.map((s) => {
        const minus = el("button", { class: "pip-btn", text: "-", onclick: () => {
          if (state.baseStatistics[s] > 3) {
            state.baseStatistics[s] -= 1;
            rerenderStep();
          }
        } });
        const plus = el("button", { class: "pip-btn", text: "+", onclick: () => {
          if (state.baseStatistics[s] < 21) {
            state.baseStatistics[s] += 1;
            rerenderStep();
          }
        } });
        return el("tr", {}, [el("td", { text: s }), el("td", {}, [minus]), el("td", { text: String(state.baseStatistics[s]) }), el("td", {}, [plus])]);
      });
      container.appendChild(el("table", { class: "char-edit-table" }, rows));
    } else {
      const rollBtn = el("button", { class: "btn btn-small", text: "Reroll all", onclick: () => {
        rerollStatistics();
        rerenderStep();
      } });
      container.appendChild(rollBtn);
      const rows = STATISTICS.map((s) => el("tr", {}, [el("td", { text: s }), el("td", { text: String(state.baseStatistics[s]) })]));
      container.appendChild(el("table", { class: "char-edit-table" }, rows));
    }
    if (state.harshness === "Harsh") {
      const sel = el(
        "select",
        { onchange: (e) => state.harshnessChoice = e.target.value },
        ["STR", "CON"].map((s) => {
          const opt = el("option", { value: s, text: s });
          if (s === state.harshnessChoice) opt.setAttribute("selected", "selected");
          return opt;
        })
      );
      container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Harsh upbringing: +1 to" }), sel])]));
    } else if (state.harshness === "Very Harsh") {
      container.appendChild(el("p", { class: "readonly-note", text: "Very Harsh upbringing: +1 to both STR and CON." }));
    }
    const preview = applyHarshnessStatBonus(state.baseStatistics, state.harshness, state.harshnessChoice);
    const derived = computeDerivedAttributes(preview, state.harshness, 0);
    const rolls = statisticRolls(preview);
    container.appendChild(
      el("div", { class: "card" }, [
        el("h3", { text: "Preview" }),
        el("p", { text: STATISTICS.map((s) => `${s} ${preview[s]} (${rolls[s]}%)`).join("  \u2022  "), style: "font-size:0.85rem;" }),
        el("p", {
          text: `HP ${derived.hitPoints} \u2022 WP ${derived.willpowerPoints} \u2022 SAN ${derived.sanity} \u2022 BP ${derived.breakingPoint} \u2022 Max SAN ${derived.maxSanity} \u2022 Dmg Bonus ${derived.damageBonus > 0 ? "+" + derived.damageBonus : derived.damageBonus}`,
          style: "font-size:0.85rem;"
        })
      ])
    );
  }
  function finalizeStatisticsStep() {
    if (state.statMethod === "assign") {
      const total = STATISTICS.reduce((sum, s) => sum + state.baseStatistics[s], 0);
      if (total !== ASSIGN_POINTS_TOTAL) throw new Error(`Assign exactly ${ASSIGN_POINTS_TOTAL} points (currently ${total}).`);
    }
    state.statistics = applyHarshnessStatBonus(state.baseStatistics, state.harshness, state.harshnessChoice);
  }
  function renderArchetypeStep(container) {
    if (!state.archetypeName) state.archetypeName = era().archetypes[0].name;
    const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
    const select = el(
      "select",
      {
        onchange: (e) => {
          state.archetypeName = e.target.value;
          state.archetypeFixedChoices = {};
          state.archetypeBonusPicks = [];
          rerenderStep();
        }
      },
      [...era().archetypes].sort((a, b) => a.name.localeCompare(b.name)).map((a) => {
        const opt = el("option", { value: a.name, text: a.name });
        if (a.name === state.archetypeName) opt.setAttribute("selected", "selected");
        return opt;
      })
    );
    container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Archetype" }), select])]));
    container.appendChild(el("p", { class: "readonly-note", text: `Recommended Stats: ${archetype.recommendedStats.join(", ")} \u2022 Starting Resources: ${archetype.startingResources} \u2022 Bonds: ${archetype.bonds}` }));
    const openFixed = archetype.archetypalSkills.filter((s) => ceRefNeedsChoice(s.ref, era()));
    if (openFixed.length > 0) {
      container.appendChild(el("div", { class: "choice-pool-title", text: "Choose specialties for the fixed archetypal skills:" }));
      for (const { ref, rating } of openFixed) {
        container.appendChild(renderSpecialtyPicker(ref, rating, state.archetypeFixedChoices, () => rerenderStep()));
      }
    }
    const plainFixed = archetype.archetypalSkills.filter((s) => !ceRefNeedsChoice(s.ref, era()));
    if (plainFixed.length > 0) {
      container.appendChild(el("p", { class: "readonly-note", text: `Fixed skills: ${plainFixed.map((s) => `${s.ref} ${s.rating}%`).join(", ")}` }));
    }
    while (state.archetypeBonusPicks.length < archetype.bonusChoice.count) state.archetypeBonusPicks.push(null);
    state.archetypeBonusPicks.length = archetype.bonusChoice.count;
    const pool = archetype.bonusChoice.options;
    const selectedRefs = state.archetypeBonusPicks.filter(Boolean).map((p) => p.ref);
    container.appendChild(el("div", { class: "choice-pool-title", text: `Choose ${archetype.bonusChoice.count} bonus skills:` }));
    container.appendChild(el("div", { class: "choice-pool-status", text: `Selected: ${selectedRefs.length} / ${archetype.bonusChoice.count}` }));
    const poolBox = el("div", { class: "choice-pool" });
    for (const option of pool) {
      const isChecked = selectedRefs.includes(option.ref);
      const row = el("div", { class: "choice-item" });
      row.appendChild(
        el("label", {}, [
          el("input", {
            type: "checkbox",
            ...isChecked ? { checked: "checked" } : {},
            onchange: (e) => {
              if (e.target.checked) {
                const emptyIdx = state.archetypeBonusPicks.findIndex((p) => p === null);
                if (emptyIdx === -1) {
                  e.target.checked = false;
                  return showError(`Choose exactly ${archetype.bonusChoice.count} bonus skills.`);
                }
                state.archetypeBonusPicks[emptyIdx] = { ref: option.ref, rating: option.rating };
              } else {
                const idx = state.archetypeBonusPicks.findIndex((p) => p?.ref === option.ref);
                if (idx >= 0) state.archetypeBonusPicks[idx] = null;
              }
              showError(null);
              rerenderStep();
            }
          }),
          ` ${option.ref} ${option.rating}%`
        ])
      );
      if (isChecked && ceRefNeedsChoice(option.ref, era())) {
        const pick = state.archetypeBonusPicks.find((p) => p?.ref === option.ref);
        row.appendChild(renderSpecialtyPicker(option.ref, option.rating, { [option.ref]: pick }, () => rerenderStep(), pick));
      }
      poolBox.appendChild(row);
    }
    container.appendChild(poolBox);
  }
  function renderSpecialtyPicker(ref, rating, store, onChange, externalTarget) {
    const { bases, needsBaseChoice } = parseCeSkillRef(ref);
    const target = externalTarget ?? (store[ref] ??= {});
    if (!target.chosenBase) target.chosenBase = bases[0];
    store[ref] = target;
    const row = el("span", { class: "choice-item" }, [el("span", { text: `${ref} ${rating}%: ` })]);
    if (needsBaseChoice) {
      row.appendChild(
        el(
          "select",
          {
            onchange: (e) => {
              target.chosenBase = e.target.value;
              target.chosenSpecialty = null;
              onChange();
            }
          },
          bases.map((b) => {
            const opt = el("option", { value: b, text: b });
            if (b === target.chosenBase) opt.setAttribute("selected", "selected");
            return opt;
          })
        )
      );
    }
    const options = ceSpecialtyOptionsFor(target.chosenBase, era());
    if (!target.chosenSpecialty) target.chosenSpecialty = options ? options[0] : "General";
    if (options) {
      row.appendChild(
        el(
          "select",
          { onchange: (e) => {
            target.chosenSpecialty = e.target.value;
            onChange();
          } },
          options.map((o) => {
            const opt = el("option", { value: o, text: o });
            if (o === target.chosenSpecialty) opt.setAttribute("selected", "selected");
            return opt;
          })
        )
      );
    } else {
      row.appendChild(
        el("input", {
          type: "text",
          value: target.chosenSpecialty,
          placeholder: "specialty",
          onchange: (e) => {
            target.chosenSpecialty = e.target.value || "General";
            onChange();
          }
        })
      );
    }
    return row;
  }
  function finalizeArchetypeStep() {
    const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
    const bonusPicks = state.archetypeBonusPicks.map((p) => p ?? {});
    if (bonusPicks.some((p) => !p.ref)) throw new Error(`Choose exactly ${archetype.bonusChoice.count} bonus skills.`);
    resolveArchetypeSkillsManual(archetype, era(), bonusPicks, state.archetypeFixedChoices);
  }
  function totalBonusPicksAvailable() {
    const communityBondsSetToOne = state.bonds.filter((b) => b.type === "Community" && b.setToOne).length;
    return totalBonusSkillPicks({ zeroedResources: state.resourcesZeroed, communityBondsSetToOne });
  }
  function bonusPicksSpentSoFar() {
    const bondSpend = state.bonds.reduce((sum, b) => sum + (b.sacrificePicks || 0), 0);
    return state.resourcesSacrificePicks + bondSpend + state.bonusSkillAllocations.length;
  }
  function bonusPicksRemaining() {
    return totalBonusPicksAvailable() - bonusPicksSpentSoFar();
  }
  function initBondsIfNeeded() {
    const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
    if (state.bonds.length === archetype.bonds) return;
    state.bonds = Array.from({ length: archetype.bonds }, (_, i) => ({
      type: i % 2 === 0 ? "Individual" : "Community",
      name: i % 2 === 0 ? SAMPLE_INDIVIDUAL_BONDS[0] : SAMPLE_COMMUNITY_BONDS[0],
      sacrificePicks: 0,
      setToOne: false
    }));
  }
  function currentResourcesRating() {
    const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
    if (state.resourcesZeroed) return 0;
    return archetype.startingResources + resourcesBoostFromSacrifices(state.resourcesSacrificePicks);
  }
  function currentBondRating(bond) {
    const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
    if (bond.type === "Individual") return individualBondStartingScore(state.statistics.CHA);
    if (bond.setToOne) return 1;
    let base = communityBondStartingScore(currentResourcesRating());
    if (archetype.fixedCommunityBond != null) base = Math.max(base, archetype.fixedCommunityBond);
    return Math.min(COMMUNITY_BOND_MAX, base + communityBondBoostFromSacrifices(bond.sacrificePicks));
  }
  function renderResourcesBondsStep(container) {
    initBondsIfNeeded();
    container.appendChild(el("h3", { text: "Resources" }));
    container.appendChild(el("p", { class: "readonly-note", text: `Base starting Resources: ${era().archetypes.find((a) => a.name === state.archetypeName).startingResources}` }));
    const zeroLabel = el("label", { class: "toggle" }, [
      el("input", {
        type: "checkbox",
        ...state.resourcesZeroed ? { checked: "checked" } : {},
        onchange: (e) => {
          state.resourcesZeroed = e.target.checked;
          if (e.target.checked) state.resourcesSacrificePicks = 0;
          rerenderStep();
        }
      }),
      " Set Resources to 0 for +1 Bonus Skill Point pick"
    ]);
    container.appendChild(zeroLabel);
    if (!state.resourcesZeroed) {
      const minus = el("button", { class: "pip-btn", text: "-", onclick: () => {
        if (state.resourcesSacrificePicks > 0) {
          state.resourcesSacrificePicks--;
          rerenderStep();
        }
      } });
      const plus = el("button", { class: "pip-btn", text: "+", onclick: () => {
        if (bonusPicksRemaining() > 0) {
          state.resourcesSacrificePicks++;
          rerenderStep();
        } else showError("No Bonus Skill Point picks left to sacrifice.");
      } });
      container.appendChild(
        el("div", { class: "field-row" }, [
          el("span", { text: "Sacrifice picks to boost Resources: " }),
          minus,
          el("span", { text: ` ${state.resourcesSacrificePicks} ` }),
          plus
        ])
      );
    }
    const resourcesRating = currentResourcesRating();
    const breakdown = resourcesBreakdown(resourcesRating);
    container.appendChild(
      el("p", { class: "readonly-note", text: `Resources rating: ${resourcesRating} (At Hand ${breakdown.atHand}, Stowed ${breakdown.stowed}, Stored ${breakdown.stored}, Check Boxes ${breakdown.checkBoxes})` })
    );
    container.appendChild(el("h3", { text: "Bonds", style: "margin-top:18px;" }));
    container.appendChild(el("p", { class: "budget-line", text: `Bonus Skill Point picks remaining: ${bonusPicksRemaining()} / ${totalBonusPicksAvailable()}` }));
    state.bonds.forEach((bond, i) => {
      const row = el("div", { class: "choice-pool" });
      const typeSelect = el(
        "select",
        { onchange: (e) => {
          bond.type = e.target.value;
          bond.name = bond.type === "Individual" ? SAMPLE_INDIVIDUAL_BONDS[0] : SAMPLE_COMMUNITY_BONDS[0];
          rerenderStep();
        } },
        ["Individual", "Community"].map((t) => {
          const opt = el("option", { value: t, text: t });
          if (t === bond.type) opt.setAttribute("selected", "selected");
          return opt;
        })
      );
      const suggestions = bond.type === "Individual" ? SAMPLE_INDIVIDUAL_BONDS : SAMPLE_COMMUNITY_BONDS;
      const nameSelect = el(
        "select",
        { onchange: (e) => bond.name = e.target.value },
        suggestions.map((s) => {
          const opt = el("option", { value: s, text: s });
          if (s === bond.name) opt.setAttribute("selected", "selected");
          return opt;
        })
      );
      row.appendChild(el("div", { class: "field-row" }, [
        el("div", { class: "field" }, [el("label", { text: `Bond ${i + 1} type` }), typeSelect]),
        el("div", { class: "field" }, [el("label", { text: "Name" }), nameSelect])
      ]));
      if (bond.type === "Community") {
        const setOneLabel = el("label", { class: "toggle" }, [
          el("input", {
            type: "checkbox",
            ...bond.setToOne ? { checked: "checked" } : {},
            onchange: (e) => {
              bond.setToOne = e.target.checked;
              if (e.target.checked) bond.sacrificePicks = 0;
              rerenderStep();
            }
          }),
          " Set to 1 for +1 Bonus Skill Point pick"
        ]);
        row.appendChild(setOneLabel);
        if (!bond.setToOne) {
          const minus = el("button", { class: "pip-btn", text: "-", onclick: () => {
            if (bond.sacrificePicks > 0) {
              bond.sacrificePicks--;
              rerenderStep();
            }
          } });
          const plus = el("button", { class: "pip-btn", text: "+", onclick: () => {
            if (bonusPicksRemaining() > 0) {
              bond.sacrificePicks++;
              rerenderStep();
            } else showError("No Bonus Skill Point picks left to sacrifice.");
          } });
          row.appendChild(el("div", { class: "field-row" }, [el("span", { text: "Sacrifice picks to boost this Bond: " }), minus, el("span", { text: ` ${bond.sacrificePicks} ` }), plus]));
        }
      }
      row.appendChild(el("p", { class: "readonly-note", text: `Rating: ${currentBondRating(bond)}` }));
      container.appendChild(row);
    });
  }
  function finalizeResourcesBondsStep() {
    if (bonusPicksRemaining() < 0) throw new Error("You've sacrificed more Bonus Skill Point picks than you have.");
  }
  function buildBaselineSkillsForWizard() {
    const skills = baselineSkills(era());
    const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
    const bonusPicks = state.archetypeBonusPicks.map((p) => p ?? {});
    try {
      const archetypeSkills = resolveArchetypeSkillsManual(archetype, era(), bonusPicks, state.archetypeFixedChoices);
      for (const [name, rating] of Object.entries(archetypeSkills)) setSkillRating(skills, name, rating, era());
    } catch {
    }
    return skills;
  }
  function renderSkillPointsStep(container) {
    const adversityCount = adversitySkillPickCount(state.harshness);
    while (state.adversityPicks.length < adversityCount) state.adversityPicks.push({ ref: era().adversitySkills[0] });
    state.adversityPicks.length = adversityCount;
    container.appendChild(el("h3", { text: `Adversity Skill Points (${adversityCount} pick${adversityCount === 1 ? "" : "s"})` }));
    container.appendChild(el("p", { class: "readonly-note", text: "Each pick adds +20% to one of these skills (repeats allowed):" }));
    state.adversityPicks.forEach((pick, i) => {
      const sel = el(
        "select",
        { onchange: (e) => pick.ref = e.target.value },
        era().adversitySkills.map((ref) => {
          const opt = el("option", { value: ref, text: ref });
          if (ref === pick.ref) opt.setAttribute("selected", "selected");
          return opt;
        })
      );
      container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: `Pick ${i + 1}` }), sel])]));
    });
    container.appendChild(el("h3", { text: "Bonus Skill Points", style: "margin-top:18px;" }));
    container.appendChild(el("p", { class: "budget-line", text: `Picks remaining: ${bonusPicksRemaining()} / ${totalBonusPicksAvailable()} (some may already be spent on Resources/Bonds)` }));
    const addRow = el("div", { class: "add-skill-row" });
    const baseSelect = el(
      "select",
      {},
      era().skills.filter((s) => s.name !== "Unnatural").map((s) => el("option", { value: s.name, text: s.name }))
    );
    let specialtyEl = null;
    const syncSpecialty = () => {
      if (specialtyEl) addRow.removeChild(specialtyEl);
      const def = era().skills.find((s) => s.name === baseSelect.value);
      if (def?.specialty) {
        const options = ceSpecialtyOptionsFor(def.name, era());
        specialtyEl = options ? el("select", {}, options.map((o) => el("option", { value: o, text: o }))) : el("input", { type: "text", placeholder: "specialty", value: "General" });
        addRow.insertBefore(specialtyEl, addBtn);
      } else {
        specialtyEl = null;
      }
    };
    baseSelect.addEventListener("change", syncSpecialty);
    const addBtn = el("button", {
      class: "btn btn-small",
      text: "+20% Add pick",
      onclick: () => {
        if (bonusPicksRemaining() <= 0) return showError("No Bonus Skill Point picks remaining.");
        const def = era().skills.find((s) => s.name === baseSelect.value);
        const ref = def.specialty ? `${def.name} (Type)` : def.name;
        const chosenSpecialty = specialtyEl ? specialtyEl.value : void 0;
        state.bonusSkillAllocations.push({ ref, chosenSpecialty });
        showError(null);
        rerenderStep();
      }
    });
    addRow.appendChild(baseSelect);
    addRow.appendChild(addBtn);
    container.appendChild(addRow);
    if (state.bonusSkillAllocations.length > 0) {
      container.appendChild(
        el(
          "ul",
          { class: "features-list" },
          state.bonusSkillAllocations.map((pick, i) => {
            const name = resolveCeSkillDisplayNameManual(pick.ref, era(), pick) ?? pick.ref;
            return el("li", {}, [`${name} `, el("button", { class: "btn-link", text: "remove", onclick: () => {
              state.bonusSkillAllocations.splice(i, 1);
              rerenderStep();
            } })]);
          })
        )
      );
    }
    const skills = buildBaselineSkillsForWizard();
    for (const pick of state.adversityPicks) {
      const name = resolveCeSkillDisplayNameManual(pick.ref, era(), pick) ?? ceBaseSkillName(pick.ref);
      skills[name] = applyAdversitySkillPick(ensureSkill(skills, name, era()));
    }
    for (const pick of state.bonusSkillAllocations) {
      const name = resolveCeSkillDisplayNameManual(pick.ref, era(), pick) ?? ceBaseSkillName(pick.ref);
      skills[name] = applyBonusSkillPick(ensureSkill(skills, name, era()));
    }
    container.appendChild(el("h3", { text: "Skill Sheet Preview", style: "margin-top:18px;" }));
    const grid = el("div", { class: "skills-grid" });
    for (const [name, rating] of Object.entries(skills).sort((a, b) => a[0].localeCompare(b[0]))) {
      if (rating > 0) grid.appendChild(el("div", { class: "skill-row" }, [el("span", { class: "skill-name", text: name }), el("span", { class: "skill-total", text: `${rating}%` })]));
    }
    container.appendChild(grid);
  }
  function finalizeSkillPointsStep() {
    if (bonusPicksRemaining() < 0) throw new Error("You've spent more Bonus Skill Point picks than you have.");
    for (const pick of state.adversityPicks) {
      if (ceRefNeedsChoice(pick.ref, era()) && !pick.chosenSpecialty) {
        pick.chosenSpecialty = ceSpecialtyOptionsFor(ceBaseSkillName(pick.ref), era())?.[0] ?? "General";
      }
    }
  }
  function renderMentalDamageStep(container) {
    if (!state.mentalDamage) state.mentalDamage = {};
    const md = state.mentalDamage;
    if (state.harshness === "Harsh") {
      const applies = harshMentalDamageApplies(state.statistics.CHA, state.statistics.POW);
      container.appendChild(el("p", { class: "readonly-note", text: `CHA ${state.statistics.CHA}, POW ${state.statistics.POW} -- ${applies ? "below 7, so Mental Damage applies." : "both 7 or higher, so no Mental Damage."}` }));
      if (applies) {
        if (!md.harshBondIndices) md.harshBondIndices = state.bonds.slice(0, 2).map((_, i) => i);
        container.appendChild(el("p", { class: "readonly-note", text: "Choose two Bonds to each lose 1D4 (roll happens on Finish):" }));
        [0, 1].forEach((slot) => {
          const sel = el(
            "select",
            { onchange: (e) => md.harshBondIndices[slot] = Number(e.target.value) },
            state.bonds.map((b, i) => {
              const opt = el("option", { value: String(i), text: `${b.type}: ${b.name}` });
              if (md.harshBondIndices[slot] === i) opt.setAttribute("selected", "selected");
              return opt;
            })
          );
          container.appendChild(sel);
        });
      }
    } else if (state.harshness === "Very Harsh") {
      container.appendChild(el("p", { class: "readonly-note", text: `A POW\xD74 test (${state.statistics.POW * 4}%) determines a starting disorder; roll happens on Finish. If it fails, pick a disorder below (the book recommends choosing one that fits your Protagonist's trauma rather than rolling randomly):` }));
      const disorderSelect = el(
        "select",
        { onchange: (e) => md.chosenDisorder = e.target.value },
        DISORDERS.map((d) => {
          const opt = el("option", { value: d.name, text: d.name });
          if (d.name === md.chosenDisorder) opt.setAttribute("selected", "selected");
          return opt;
        })
      );
      if (!md.chosenDisorder) md.chosenDisorder = DISORDERS[0].name;
      container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Disorder if the test fails" }), disorderSelect])]));
      const applies = veryHarshAdaptedApplies(state.statistics.CHA, state.statistics.POW);
      container.appendChild(el("p", { class: "readonly-note", text: `CHA ${state.statistics.CHA}, POW ${state.statistics.POW} -- ${applies ? "below 10, so your Protagonist starts Adapted." : "both 10 or higher, so no Adapted status."}` }));
      if (applies) {
        if (!md.adaptedChoice) md.adaptedChoice = "Violence";
        const sel = el(
          "select",
          { onchange: (e) => md.adaptedChoice = e.target.value },
          ["Violence", "Helplessness"].map((t) => {
            const opt = el("option", { value: t, text: t });
            if (t === md.adaptedChoice) opt.setAttribute("selected", "selected");
            return opt;
          })
        );
        container.appendChild(el("div", { class: "field-row" }, [el("div", { class: "field" }, [el("label", { text: "Adapted to" }), sel])]));
        container.appendChild(el("p", { class: "readonly-note", text: "Adapted to Violence: -1D6 CHA and every Bond. Adapted to Helplessness: -1D6 POW." }));
      }
    }
  }
  function renderFinalDetailsStep(container) {
    const nameInput = el("input", { type: "text", value: state.name, oninput: (e) => state.name = e.target.value });
    const sexInput = el("input", { type: "text", value: state.sex, oninput: (e) => state.sex = e.target.value });
    const ageInput = el("input", { type: "number", value: state.age ?? "", oninput: (e) => state.age = e.target.value ? Number(e.target.value) : null });
    const birthplaceInput = el("input", { type: "text", value: state.birthplace, oninput: (e) => state.birthplace = e.target.value });
    const homeInput = el("input", { type: "text", value: state.home, oninput: (e) => state.home = e.target.value });
    container.appendChild(
      el("div", { class: "field-row" }, [
        el("div", { class: "field" }, [el("label", { text: "Name" }), nameInput]),
        el("div", { class: "field" }, [el("label", { text: "Sex" }), sexInput]),
        el("div", { class: "field" }, [el("label", { text: "Age" }), ageInput])
      ])
    );
    container.appendChild(
      el("div", { class: "field-row" }, [
        el("div", { class: "field" }, [el("label", { text: "Birthplace" }), birthplaceInput]),
        el("div", { class: "field" }, [el("label", { text: "Current Home" }), homeInput])
      ])
    );
    container.appendChild(el("p", { class: "readonly-note", text: "Up to five Motivations (things your Protagonist cares about, beyond their Bonds):" }));
    const list = el("div", {});
    state.motivations.forEach((m, i) => {
      const input = el("input", { type: "text", value: m, oninput: (e) => state.motivations[i] = e.target.value });
      const removeBtn = el("button", { class: "btn-link", text: "remove", onclick: () => {
        state.motivations.splice(i, 1);
        rerenderStep();
      } });
      list.appendChild(el("div", { class: "field-row" }, [input, removeBtn]));
    });
    container.appendChild(list);
    if (state.motivations.length < 5) {
      container.appendChild(el("button", { class: "btn btn-small", text: "+ Add motivation", onclick: () => {
        state.motivations.push("");
        rerenderStep();
      } }));
    }
  }
  function buildFinalCharacter() {
    const skills = baselineSkills(era());
    const archetype = era().archetypes.find((a) => a.name === state.archetypeName);
    const bonusPicks = state.archetypeBonusPicks.map((p) => p ?? {});
    const archetypeSkills = resolveArchetypeSkillsManual(archetype, era(), bonusPicks, state.archetypeFixedChoices);
    for (const [name, rating] of Object.entries(archetypeSkills)) setSkillRating(skills, name, rating, era());
    const resourcesRating = currentResourcesRating();
    const resources = { rating: resourcesRating, breakdown: resourcesBreakdown(resourcesRating) };
    const bonds = state.bonds.map((b) => ({ type: b.type, name: b.name, rating: currentBondRating(b) }));
    const adversitySkillPicks = [];
    for (const pick of state.adversityPicks) {
      const name = resolveCeSkillDisplayNameManual(pick.ref, era(), pick) ?? resolveCeSkillDisplayNameRandom(pick.ref, era());
      skills[name] = applyAdversitySkillPick(ensureSkill(skills, name, era()));
      adversitySkillPicks.push(name);
    }
    for (const pick of state.bonusSkillAllocations) {
      const name = resolveCeSkillDisplayNameManual(pick.ref, era(), pick) ?? resolveCeSkillDisplayNameRandom(pick.ref, era());
      skills[name] = applyBonusSkillPick(ensureSkill(skills, name, era()));
    }
    let statistics = { ...state.statistics };
    let mentalDamage = null;
    if (state.harshness === "Harsh" && harshMentalDamageApplies(statistics.CHA, statistics.POW)) {
      const harshBondLoss = [];
      for (const idx of state.mentalDamage?.harshBondIndices ?? []) {
        const amount = rollNotation("1D4");
        bonds[idx].rating = Math.max(0, bonds[idx].rating - amount);
        harshBondLoss.push({ bondIndex: idx, amount });
      }
      mentalDamage = { harshBondLoss, disorder: null, adapted: null };
    } else if (state.harshness === "Very Harsh") {
      const disorderTest = rollDisorderTest(statistics.POW);
      const disorder = disorderTest.failed ? state.mentalDamage?.chosenDisorder ?? DISORDERS[0].name : null;
      let adapted = null;
      if (veryHarshAdaptedApplies(statistics.CHA, statistics.POW)) {
        const adaptedTo = state.mentalDamage?.adaptedChoice ?? "Violence";
        const { amount } = rollAdaptedAdjustment(adaptedTo);
        if (adaptedTo === "Violence") {
          statistics.CHA = Math.max(0, statistics.CHA - amount);
          for (const bond of bonds) bond.rating = Math.max(0, bond.rating - amount);
        } else {
          statistics.POW = Math.max(0, statistics.POW - amount);
        }
        adapted = { adaptedTo, amount };
      }
      mentalDamage = { harshBondLoss: [], disorder, adapted };
    }
    const derived = computeDerivedAttributes(statistics, state.harshness, skills["Unnatural"] ?? 0);
    return assembleCharacter({
      name: state.name,
      sex: state.sex,
      age: state.age,
      birthplace: state.birthplace,
      home: state.home,
      eraId: era().id,
      eraName: era().name,
      harshness: state.harshness,
      statistics,
      statisticRolls: statisticRolls(statistics),
      derived,
      archetypeName: archetype.name,
      skills,
      resources,
      bonds,
      adversitySkillPicks,
      bonusSkillPicks: { total: totalBonusPicksAvailable(), spentOnSkills: state.bonusSkillAllocations.length, spentOnResources: state.resourcesSacrificePicks, spentOnBonds: state.bonds.reduce((s, b) => s + (b.sacrificePicks || 0), 0) },
      mentalDamage,
      motivations: state.motivations.filter((m) => m.trim()),
      options: { eraId: state.eraId, harshness: state.harshness }
    });
  }
  function renderReviewStep(container) {
    const character = buildFinalCharacter();
    renderCharacterSheet(container, character, { onNameChange: (v) => state.name = v });
  }
  function randomizeCurrentStep() {
    const id = currentStepId();
    const rng = Math.random;
    if (id === "setup") {
    } else if (id === "statistics") {
      rerollStatistics();
      if (state.harshness === "Harsh") state.harshnessChoice = rng() < 0.5 ? "STR" : "CON";
    } else if (id === "archetype") {
      const archetype = era().archetypes[Math.floor(rng() * era().archetypes.length)];
      state.archetypeName = archetype.name;
      state.archetypeFixedChoices = {};
      for (const { ref } of archetype.archetypalSkills) {
        if (ceRefNeedsChoice(ref, era())) {
          const { bases } = parseCeSkillRef(ref);
          const base = bases[Math.floor(rng() * bases.length)];
          const options = ceSpecialtyOptionsFor(base, era());
          state.archetypeFixedChoices[ref] = { chosenBase: base, chosenSpecialty: options ? options[Math.floor(rng() * options.length)] : "General" };
        }
      }
      const pool = [...archetype.bonusChoice.options].sort(() => rng() - 0.5).slice(0, archetype.bonusChoice.count);
      state.archetypeBonusPicks = pool.map(({ ref }) => {
        if (!ceRefNeedsChoice(ref, era())) return { ref };
        const { bases } = parseCeSkillRef(ref);
        const base = bases[Math.floor(rng() * bases.length)];
        const options = ceSpecialtyOptionsFor(base, era());
        return { ref, chosenBase: base, chosenSpecialty: options ? options[Math.floor(rng() * options.length)] : "General" };
      });
    } else if (id === "resourcesBonds") {
      initBondsIfNeeded();
      state.resourcesZeroed = false;
      state.resourcesSacrificePicks = 0;
      for (const bond of state.bonds) {
        bond.type = rng() < 0.5 ? "Individual" : "Community";
        bond.name = bond.type === "Individual" ? SAMPLE_INDIVIDUAL_BONDS[Math.floor(rng() * SAMPLE_INDIVIDUAL_BONDS.length)] : SAMPLE_COMMUNITY_BONDS[Math.floor(rng() * SAMPLE_COMMUNITY_BONDS.length)];
        bond.setToOne = false;
        bond.sacrificePicks = 0;
      }
    } else if (id === "skillPoints") {
      for (const pick of state.adversityPicks) {
        pick.ref = era().adversitySkills[Math.floor(rng() * era().adversitySkills.length)];
        if (ceRefNeedsChoice(pick.ref, era())) {
          const options = ceSpecialtyOptionsFor(ceBaseSkillName(pick.ref), era());
          pick.chosenSpecialty = options ? options[Math.floor(rng() * options.length)] : "General";
        }
      }
      state.bonusSkillAllocations = [];
      const skillDefs = era().skills.filter((s) => s.name !== "Unnatural");
      while (bonusPicksRemaining() > 0) {
        const def = skillDefs[Math.floor(rng() * skillDefs.length)];
        const ref = def.specialty ? `${def.name} (Type)` : def.name;
        const options = def.specialty ? ceSpecialtyOptionsFor(def.name, era()) : null;
        state.bonusSkillAllocations.push({ ref, chosenSpecialty: options ? options[Math.floor(rng() * options.length)] : def.specialty ? "General" : void 0 });
      }
    } else if (id === "mentalDamage") {
      state.mentalDamage = {};
      if (state.harshness === "Harsh") {
        const indices = state.bonds.map((_, i) => i);
        state.mentalDamage.harshBondIndices = indices.sort(() => rng() - 0.5).slice(0, 2);
      } else if (state.harshness === "Very Harsh") {
        state.mentalDamage.chosenDisorder = DISORDERS[Math.floor(rng() * DISORDERS.length)].name;
        state.mentalDamage.adaptedChoice = rng() < 0.5 ? "Violence" : "Helplessness";
      }
    } else if (id === "finalDetails") {
    }
  }
  var STEP_RENDERERS = {
    setup: renderSetupStep,
    statistics: renderStatisticsStep,
    archetype: renderArchetypeStep,
    resourcesBonds: renderResourcesBondsStep,
    skillPoints: renderSkillPointsStep,
    mentalDamage: renderMentalDamageStep,
    finalDetails: renderFinalDetailsStep,
    review: renderReviewStep
  };
  var STEP_FINALIZERS = {
    statistics: finalizeStatisticsStep,
    archetype: finalizeArchetypeStep,
    resourcesBonds: finalizeResourcesBondsStep,
    skillPoints: finalizeSkillPointsStep
  };
  function renderProgress() {
    const steps = activeSteps();
    const progress = $("wizard-progress");
    progress.innerHTML = "";
    steps.forEach((id, i) => {
      progress.appendChild(el("span", { class: `step-dot${i === stepIndex ? " current" : i < stepIndex ? " done" : ""}`, text: `${i + 1}. ${STEP_TITLES[id].replace(/^Step \S+: /, "")}` }));
    });
  }
  function rerenderStep() {
    const id = currentStepId();
    $("wizard-step-title").textContent = STEP_TITLES[id];
    const body = $("wizard-step-body");
    body.innerHTML = "";
    showError(null);
    renderProgress();
    STEP_RENDERERS[id](body);
    $("btn-wizard-back").disabled = stepIndex === 0;
    $("btn-wizard-randomize").hidden = id === "review";
    $("btn-wizard-next").textContent = id === "review" ? "Finish & Save \u2192" : "Next \u2192";
  }
  function goNext() {
    const id = currentStepId();
    if (id === "review") {
      onFinishCallback?.(buildFinalCharacter());
      return;
    }
    const finalizer = STEP_FINALIZERS[id];
    if (finalizer) {
      try {
        finalizer();
      } catch (err) {
        showError(err.message);
        return;
      }
    }
    const steps = activeSteps();
    if (stepIndex < steps.length - 1) {
      stepIndex += 1;
      rerenderStep();
    }
  }
  function goBack() {
    if (stepIndex > 0) {
      stepIndex -= 1;
      rerenderStep();
    }
  }
  function startWizard(options, { onFinish, onCancel } = {}) {
    state = freshState(options);
    stepIndex = 0;
    onFinishCallback = onFinish;
    $("btn-wizard-back").onclick = goBack;
    $("btn-wizard-next").onclick = goNext;
    $("btn-wizard-randomize").onclick = () => {
      randomizeCurrentStep();
      rerenderStep();
    };
    $("btn-wizard-cancel").onclick = () => onCancel?.();
    rerenderStep();
  }

  // js/ui/app.js
  var currentCharacter = null;
  var $2 = (id) => document.getElementById(id);
  function populateArchetypeSelect() {
    const select = $2("opt-archetype");
    const eraId = $2("opt-era").value;
    const era2 = getEra(eraId);
    select.innerHTML = '<option value="">Random</option>';
    for (const a of [...era2.archetypes].sort((a2, b) => a2.name.localeCompare(b.name))) {
      const opt = document.createElement("option");
      opt.value = a.name;
      opt.textContent = a.name;
      select.appendChild(opt);
    }
  }
  function syncHarshnessDefault() {
    const era2 = getEra($2("opt-era").value);
    $2("opt-harshness").value = era2.defaultHarshness;
  }
  function readOptionsFromForm() {
    const options = defaultOptions($2("opt-era").value);
    options.eraId = $2("opt-era").value;
    options.harshness = $2("opt-harshness").value;
    const archetypeValue = $2("opt-archetype").value;
    options.archetypeName = archetypeValue || null;
    options.name = $2("opt-name").value.trim();
    options.sex = $2("opt-sex").value.trim();
    const ageValue = $2("opt-age").value;
    options.age = ageValue ? parseInt(ageValue, 10) : null;
    return options;
  }
  function showSheet(character) {
    currentCharacter = character;
    $2("sheet-panel").hidden = false;
    renderCharacterSheet($2("character-sheet"), character, {
      onNameChange: (value) => {
        currentCharacter.name = value;
      }
    });
    $2("sheet-panel").scrollIntoView?.({ behavior: "smooth", block: "start" });
  }
  function generate() {
    const options = readOptionsFromForm();
    const character = generateRandomCharacter(options);
    if (!character._id) character._id = newCharacterId();
    showSheet(character);
  }
  function renderSavedList() {
    const list = $2("saved-character-list");
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
      delBtn.textContent = "\u2715";
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
    $2("sheet-panel").hidden = true;
    $2("wizard-panel").hidden = false;
    startWizard(readOptionsFromForm(), {
      onFinish: (character) => {
        if (!character._id) character._id = newCharacterId();
        $2("wizard-panel").hidden = true;
        showSheet(character);
      },
      onCancel: () => {
        $2("wizard-panel").hidden = true;
      }
    });
    $2("wizard-panel").scrollIntoView?.({ behavior: "smooth", block: "start" });
  }
  function wireEvents() {
    $2("btn-generate").addEventListener("click", generate);
    $2("btn-regenerate").addEventListener("click", generate);
    $2("btn-start-wizard").addEventListener("click", startWizardFlow);
    $2("opt-era").addEventListener("change", () => {
      populateArchetypeSelect();
      syncHarshnessDefault();
    });
    $2("btn-new-character").addEventListener("click", () => {
      $2("sheet-panel").hidden = true;
      $2("wizard-panel").hidden = true;
      currentCharacter = null;
      $2("opt-name").value = "";
      $2("opt-sex").value = "";
      $2("opt-age").value = "";
    });
    $2("btn-save").addEventListener("click", () => {
      if (!currentCharacter) return;
      saveCharacter(currentCharacter);
      renderSavedList();
    });
    $2("btn-export-json").addEventListener("click", () => currentCharacter && exportToJson(currentCharacter));
    $2("btn-export-md").addEventListener("click", () => currentCharacter && exportToMarkdown(currentCharacter));
    $2("btn-export-pdf").addEventListener("click", () => currentCharacter && exportToPdf(currentCharacter));
    $2("toggle-settings").addEventListener("click", () => {
      const body = $2("settings-body");
      const hidden = body.style.display === "none";
      body.style.display = hidden ? "" : "none";
      $2("toggle-settings").textContent = hidden ? "hide" : "show";
    });
  }
  function init() {
    populateArchetypeSelect();
    syncHarshnessDefault();
    wireEvents();
    renderSavedList();
    $2("storage-warning").hidden = isStoragePersistent();
  }
  init();
})();
