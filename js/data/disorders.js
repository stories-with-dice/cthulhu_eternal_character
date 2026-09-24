// Sample Disorders (Part 7 - Sanity). The book stresses a disorder should
// be player/GM-chosen to fit the character's trauma, not randomly rolled --
// the wizard lets the player pick; Quick Random picks one at random as a
// practical necessity (there's no specific in-play trauma to match yet).
export const DISORDERS = [
  {
    name: "Addiction",
    description: "Relies on a harmful habit or substance to get by. Losing 2+ SAN in a single roll triggers an acute episode (an overwhelming need); feeding it costs -20% to stats/skills for a few hours; going 24 hours without feeding it costs 1D6 WP (and prevents WP recovery), repeating every 24 hours.",
  },
  {
    name: "Amnesia",
    description: "Losing 2+ SAN in a single roll triggers an acute episode that erases all memory of the episode until recovered somehow.",
  },
  {
    name: "Depression",
    description: "Total despair and crushing inability to get anything done, sometimes as overwhelming guilt. Triggered by reminders of past trauma; during an episode every skill or stat test costs 1D4 WP.",
  },
  {
    name: "Hysterical Blindness / Deafness / Paralysis",
    description: "Conversion disorder: losing 2+ SAN in a single roll triggers an acute episode leaving the Protagonist blind, deaf, or paralyzed (pick one) until the stressor passes.",
  },
  {
    name: "Mania",
    description: "A consistently euphoric or irritable mood: frenzied activity, garrulousness, racing thoughts, trouble sleeping. Losing 2+ SAN in a single roll triggers an episode where tasks needing concentration or fine control are at one-fifth chance.",
  },
  {
    name: "Megalomania / Narcissistic",
    description: "Sees themselves as a messiah or exempt from ordinary morality. Losing 2+ SAN in a single roll triggers an episode where any doubt about their superiority causes every attempt to get help or make a good impression to fail.",
  },
  {
    name: "Multiple Personalities",
    description: "Suffering temporary insanity or reaching the Breaking Point triggers an episode where an alternate identity, with its own personality and memories, takes over.",
  },
  {
    name: "Obsession",
    description: "Fixated on a person, place, event, act, or idea. Losing 2+ SAN in a single roll triggers a days-long episode where any long-term action or skill use is at -20%.",
  },
  {
    name: "Paranoia",
    description: "Extreme suspicion and fear of invisible enemies. Losing 2+ SAN in a single roll triggers an episode of being unable to trust or rely on anyone.",
  },
  {
    name: "Phobia",
    description: "An irrational fear related to the traumatic incident. Presence of the trigger requires a SAN test; failure triggers an acute episode forcing the Flee or Submit response to temporary insanity.",
  },
  {
    name: "Philia",
    description: "An irrational fetish or allure for something odd associated with the trauma. Presence of the object requires a SAN test to maintain self-control; failure triggers an episode where the GM dictates the Protagonist's actions.",
  },
  {
    name: "Psychogenic Fugue",
    description: "Suffering temporary insanity or reaching the Breaking Point triggers an episode of catatonia or wandering off in a daze, sometimes disappearing for days with no memory of the interval.",
  },
  {
    name: "Schizoid",
    description: "Personality shifts toward uncharacteristic emotionlessness, perceived as cold or aloof; personal interaction and CHA tests are always halved. Losing 2+ SAN in a single roll triggers a days-long episode where CHA tests drop to one-fifth chance.",
  },
  {
    name: "PTSD (\"Shell Shock\")",
    description: "Nightmares, flashbacks, sleep trouble, and anxiety following life-threatening events. Triggered by reminders of past trauma; during an episode the GM chooses either a violent reaction to a perceived (possibly imagined) threat, or an acute depressive episode.",
  },
];

export function findDisorder(name) {
  return DISORDERS.find((d) => d.name === name);
}

// Sample phobia/philia triggers (Part 7 - Sanity), for flavor when the
// Phobia or Philia disorder is chosen.
export const PHOBIA_EXAMPLES = [
  { name: "Acrophobia", trigger: "heights" },
  { name: "Agoraphobia", trigger: "open places" },
  { name: "Ailurophobia", trigger: "cats" },
  { name: "Androphobia", trigger: "males" },
  { name: "Apiphobia", trigger: "bees" },
  { name: "Arachnophobia", trigger: "spiders" },
  { name: "Astrophobia", trigger: "thunder, lightning and storms" },
  { name: "Bacteriophobia", trigger: "bacteria" },
  { name: "Bactrachophobia", trigger: "frogs and toads" },
  { name: "Bathophobia", trigger: "the deep sea" },
  { name: "Belonephobia", trigger: "pins and needles" },
  { name: "Botanophobia", trigger: "plants" },
  { name: "Catoptrophobia", trigger: "mirrors" },
  { name: "Claustrophobia", trigger: "confined spaces" },
  { name: "Demophobia", trigger: "crowds" },
  { name: "Dendrophobia", trigger: "trees" },
  { name: "Doraphobia", trigger: "fur" },
  { name: "Entophobia", trigger: "insects" },
  { name: "Gynephobia", trigger: "females" },
  { name: "Hematophobia", trigger: "blood" },
  { name: "Hylephobia", trigger: "forests" },
  { name: "Iatrophobia", trigger: "doctors" },
  { name: "Monophobia", trigger: "being alone" },
  { name: "Necrophobia", trigger: "dead things" },
  { name: "Ophiophobia", trigger: "snakes" },
  { name: "Pyrophobia", trigger: "fire" },
  { name: "Scotophobia", trigger: "darkness" },
  { name: "Taphephobia", trigger: "being buried alive" },
  { name: "Technophobia", trigger: "technology" },
  { name: "Thalassophobia", trigger: "the sea" },
  { name: "Trichophobia", trigger: "hair" },
  { name: "Triskadekaphobia", trigger: "the number 13" },
  { name: "Xenophobia", trigger: "foreigners" },
  { name: "Zoophobia", trigger: "animals" },
];
