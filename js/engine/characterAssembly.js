// Packages already-resolved character pieces into the final character
// object shape that js/ui/render.js and js/ui/export.js expect. Both the
// random generator (characterFactory.js) and the manual wizard build their
// pieces differently but both hand off to this one function, so the two
// paths can never produce divergent output shapes.
export function assembleCharacter(parts) {
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
    options: parts.options,
  };
}
