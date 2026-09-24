export function el(tag, attrs = {}, children = []) {
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
    ["Home", character.home || "-"],
  ];
  return el("div", { class: "card" }, [
    el("h3", { text: "Summary" }),
    el("table", { class: "char-table" }, rows.map(([label, value]) => el("tr", {}, [el("td", { text: label }), el("td", { text: String(value) })]))),
  ]);
}

function statisticsCard(character) {
  const rows = Object.entries(character.statistics).map(([key, value]) =>
    el("tr", {}, [el("td", { text: key }), el("td", { text: `${value} (${character.statisticRolls[key]}%)` })])
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
    ["Damage Bonus", d.damageBonus > 0 ? `+${d.damageBonus}` : String(d.damageBonus)],
  ];
  return el("div", { class: "card" }, [
    el("h3", { text: "Derived Attributes" }),
    el("table", { class: "char-table" }, rows.map(([label, value]) => el("tr", {}, [el("td", { text: label }), el("td", { text: String(value) })]))),
  ]);
}

function resourcesCard(character) {
  const r = character.resources;
  const rows = [
    ["Rating", r.rating],
    ["At Hand", r.breakdown.atHand],
    ["Stowed", r.breakdown.stowed],
    ["Stored", r.breakdown.stored],
    ["Check Boxes", r.breakdown.checkBoxes],
  ];
  return el("div", { class: "card" }, [
    el("h3", { text: "Resources" }),
    el("table", { class: "char-table" }, rows.map(([label, value]) => el("tr", {}, [el("td", { text: label }), el("td", { text: String(value) })]))),
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
    el("ul", { class: "features-list" }, character.motivations.map((m) => el("li", { text: m }))),
  ]);
}

function skillsSection(character) {
  const entries = Object.entries(character.skills)
    .filter(([, rating]) => rating > 0)
    .sort((a, b) => a[0].localeCompare(b[0]));
  const grid = el("div", { class: "skills-grid" });
  for (const [name, rating] of entries) {
    grid.appendChild(
      el("div", { class: "skill-row" }, [el("span", { class: "skill-name", text: name }), el("span", { class: "skill-total", text: `${rating}%` })])
    );
  }
  return el("div", { class: "skills-section" }, [el("h3", { text: "Skills" }), grid]);
}

export function renderCharacterSheet(container, character, { onNameChange } = {}) {
  container.innerHTML = "";

  const nameInput = el("input", {
    type: "text",
    value: character.name || "",
    placeholder: "Protagonist name",
    oninput: (e) => onNameChange?.(e.target.value),
  });

  const header = el("div", { class: "sheet-header" }, [
    el("div", {}, [nameInput, el("div", { class: "sheet-subline", text: `${character.archetypeName} • ${character.eraName} • ${character.harshness}` })]),
  ]);

  const grid = el("div", { class: "sheet-grid" }, [
    summaryCard(character),
    statisticsCard(character),
    derivedCard(character),
    resourcesCard(character),
    bondsCard(character),
    mentalDamageCard(character),
    motivationsCard(character),
  ]);

  container.appendChild(header);
  container.appendChild(grid);
  container.appendChild(skillsSection(character));
}
