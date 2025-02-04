import { SKILLS } from "../constants/skills";

export const Skills = () => {
  const skillListEl = document.getElementById("skillList");

  if (!skillListEl) {
    console.error("Element with id 'skillList' not found.");
    return false;
  }

  Object.keys(SKILLS).forEach((key) => {
    console.log(`key: ${key}`);

    // カテゴリー名
    const titleEl = document.createElement("h3");
    titleEl.classList.add("skills__title");
    titleEl.textContent = SKILLS[key].title;
    skillListEl.appendChild(titleEl);

    // スキルの説明
    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("skills__description");
    descriptionEl.innerHTML = SKILLS[key].description ?? "";
    if (descriptionEl.innerHTML) {
      skillListEl.appendChild(descriptionEl);
    }

    // ul作成
    const ulEl = document.createElement("ul");
    ulEl.classList.add("skills__list");
    skillListEl.appendChild(ulEl);

    for (const skill of SKILLS[key].list) {
      console.log(`skill: ${skill.name}`);

      const liEl = document.createElement("li");
      liEl.classList.add("skills__item");
      const titleEl = document.createElement("h3");
      const dlEl = document.createElement("dl");
      dlEl.classList.add("skills__years");
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
        ? `${skill.name}<span class="skills__smallTitle">（学習中）</span>`
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

      ulEl.appendChild(liEl);
    }
  });
};
