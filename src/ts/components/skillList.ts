import { SKILLS } from "../constants/skill";

export const SkillList = () => {
  const skillListEl = document.getElementById("skillList");
  const learningSkillListEl = document.getElementById("learningSkillList");

  if (!skillListEl || !learningSkillListEl) {
    !skillListEl
      ? console.error("Element with id 'skillList' not found.")
      : console.error("Element with id 'learningSkillList' not found.");
    return false;
  }

  Object.keys(SKILLS).forEach((key) => {
    console.log(`key: ${key}`);

    const ulEl = document.createElement("ul");
    ulEl.classList.add("skillList");
    const learningUlEl = document.createElement("ul");
    learningUlEl.classList.add("skillList");

    // ul作成
    skillListEl.appendChild(ulEl);
    learningSkillListEl.appendChild(learningUlEl);

    for (const skill of SKILLS[key].list) {
      console.log(`skill: ${skill.name}`);

      const liEl = document.createElement("li");
      liEl.classList.add("skillList__item");
      const titleEl = document.createElement("h3");
      const dlEl = document.createElement("dl");
      dlEl.classList.add("skillList__years");
      const dtEl = document.createElement("dt");
      dtEl.classList.add("__title");
      dtEl.textContent = "経験年数";
      const ddEl = document.createElement("dd");
      ddEl.classList.add("__year");
      const descriptionEl = document.createElement("p");

      // liのリセット
      liEl.innerHTML = "";

      // タイトル
      titleEl.innerHTML = skill.learning
        ? `${skill.name}<span class="skillList__smallTitle">（学習中）</span>`
        : skill.name;
      liEl.appendChild(titleEl);

      // 経験年数
      if (skill.years) {
        const years =
          typeof skill.years === "number" ? `${skill.years}年` : skill.years;
        ddEl.textContent = years;

        dlEl.append(dtEl, ddEl);
        liEl.appendChild(dlEl);
      }

      // 説明
      if (skill.description) {
        descriptionEl.innerHTML = skill.description;
        liEl.appendChild(descriptionEl);
      }

      if (skill.learning) {
        learningUlEl.appendChild(liEl);
      } else {
        ulEl.appendChild(liEl);
      }
    }

    // 空のulを削除
    if (ulEl.children.length === 0) {
      skillListEl.removeChild(ulEl);
    }

    if (learningUlEl.children.length === 0) {
      learningSkillListEl.removeChild(learningUlEl);
    }
  });
};
