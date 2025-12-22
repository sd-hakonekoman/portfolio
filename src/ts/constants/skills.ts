/**
 * スキルセットのデータ
 */
type Skill = {
  name: string;
  years?: number | string; // 経験年数、1年未満の場合は文字列で記載、未経験の場合は記載しない
  description?: string;
  learning?: boolean; // 学習中の場合はtrue
};

type SkillCategory = {
  title: string; // スキルのカテゴリー名
  description?: string; // スキルのカテゴリーの説明
  list: Skill[];
};

type Skills = {
  [key: string]: SkillCategory;
};

export const SKILLS: Skills = {
  html: {
    title: "HTML関連",
    list: [
      {
        name: "HTML",
        years: 9,
        description:
          "アクセシビリティに配慮した実装を心がけており、誰にとっても使いやすいWebページを目指しています。",
      },
      {
        name: "Pug",
        years: 9,
        description:
          "HTMLの実装には主にPugを使用しています。<br>コンポーネント毎にファイルを分割することで可読性を向上させ、保守性の高いコードを実現しています。",
      },
    ],
  },
  css: {
    title: "CSS関連",
    list: [
      {
        name: "CSS",
        years: 9,
        description:
          "CSSカスタムプロパティを活用し、柔軟で管理しやすいスタイル設計を行っています。<br>またCSS Grid Layoutを用いて効率的かつ直感的なレイアウトを実装しています。<br>classの命名規則はBEMベースです。",
      },
      {
        name: "PostCSS",
        years: 8,
        description:
          "PostCSSを活用し、ベンダープレフィックスの自動付与を行うことで、幅広いブラウザへの対応を実現しています。<br>またメディアクエリを整理し、任意の名前を付けることで、管理しやすいスタイル設計を心がけています。",
      },
      {
        name: "SCSS",
        years: 9,
        description:
          "Dart Sassを使用しています。<br>コンポーネント毎にファイルを分割することで可読性を向上させ、管理しやすいコードを実現しています。",
      },
      {
        name: "Tailwind CSS",
        years: 1,
        description:
          "プロジェクトに応じてTailwind CSSを使用することがあります。<br>必要に応じて、コンポーネント毎のマージンのみをTailwind CSSで実装するなど、柔軟なスタイル設計を行っています。",
      },
    ],
  },
  js: {
    title: "JavaScript関連",
    list: [
      {
        name: "JavaScript",
        years: 9,
        description:
          "ES6+の構文を用いて実装を行っています。<br>またGSAPを使用したアニメーションの実装も行っています。",
      },
      // {
      //   name: "TypeScript",
      //   description:
      //     "参考書などで学習中です。<br>型定義を意識した実装を心がけ、より安全で保守性の高いコードを書くことを目指しています。",
      //   learning: true,
      // },
    ],
  },
  framework: {
    // ライブラリとフレームワーク
    title: " ライブラリ・フレームワーク",
    list: [
      {
        name: "jQuery",
        years: 9,
        description:
          "Webサイトの実装で使用していますが、現在はJavaScriptで完結させることが多いです。",
      },
      {
        name: "Astro",
        years: "2ヶ月",
        description:
          "チュートリアルを学習済みです。<br>実務ではサイトの修正対応やAstroのバージョンアップ対応を行いました。",
      },
      {
        name: "Vue.js (v2)",
        years: "2ヶ月",
        description: "LP制作で使用した経験があります。<br>既存LPの改修対応、既存LPを流用した新規LPの制作を行いました。",
      },
      {
        name: "Nuxt.js",
        years: "2ヶ月",
        description: "LP制作で使用した経験があります。<br>既存LPの改修対応、既存LPを流用した新規LPの制作を行いました。",
      },
      {
        name: "React",
        years: "2ヶ月",
        description: "LP制作で使用した経験があります。<br>既存LPの改修対応、既存LPを流用した新規LPの制作を行いました。",
      },
      {
        name: "Next.js",
        years: "2ヶ月",
        description: "LP制作で使用した経験があります。<br>既存LPの改修対応、既存LPを流用した新規LPの制作を行いました。",
      },
    ],
  },
  cms: {
    title: "CMS",
    list: [
      {
        name: "WordPress",
        years: 6,
        description:
          "オリジナルテーマの制作が可能です。<br>ただしブロックテーマでの実装経験はありません。<br>近年は修正対応がメインで、オリジナルテーマの新規制作は2年ほどブランクがあります。",
      },
      // {
      //   name: "microCMS",
      //   description: "参考書で学習中です。",
      //   learning: true,
      // },
    ],
  },
  tools: {
    title: "ツール",
    list: [
      {
        name: "Git / GitHub",
        years: 8,
        description:
          "案件のソースコード管理に使用しています。<br>Gitコマンドでコミットなどの操作ができます。",
      },
      {
        name: "npm",
        years: 8,
        description:
          "npmパッケージのインストールや、package.jsonの編集ができます。",
      },
      {
        name: "Webpack",
        years: 8,
        description: "Pug、SCSS、PostCSS、Babelのビルドを行っています。",
      },
      {
        name: "Vite",
        description:
          "学習中です。<br>ポートフォリオサイトで実際に使用してみたりしています。",
        learning: true,
      },
    ],
  },
  designTools: {
    title: "デザインツール",
    description:
      "デザインデータからコーディングをするために使用。メインに使用していたのはFigmaとXDです。",
    list: [
      {
        name: "Figma",
        years: 2,
        description: "主に開発モードで作業していました。",
      },
      {
        name: "Adobe XD",
        years: 5,
      },
      {
        name: "Adobe Photoshop",
        years: 3,
      },
      {
        name: "Adobe Illustrator",
        years: 3,
      },
    ],
  },
};
