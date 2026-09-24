function triggerDownload(filename, blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function safeFileBase(character) {
  const base = (character.name || character.archetypeName || "ce-character").trim();
  return base.replace(/[^a-z0-9\-_ ]/gi, "").replace(/\s+/g, "-").toLowerCase() || "ce-character";
}

export function exportToJson(character) {
  const blob = new Blob([JSON.stringify(character, null, 2)], { type: "application/json" });
  triggerDownload(`${safeFileBase(character)}.json`, blob);
}

export function characterToMarkdown(character) {
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

export function exportToMarkdown(character) {
  const blob = new Blob([characterToMarkdown(character)], { type: "text/markdown" });
  triggerDownload(`${safeFileBase(character)}.md`, blob);
}

export function exportToPdf(character) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const marginX = 40;
  let y = 50;
  const lineHeight = 14;

  const addLine = (text, opts = {}) => {
    const { size = 10, bold = false, gap = lineHeight } = opts;
    doc.setFontSize(size);
    doc.setFont(undefined, bold ? "bold" : "normal");
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
