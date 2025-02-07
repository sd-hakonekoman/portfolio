(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const y=`
<svg role="img" aria-label="外部サイトへのリンク" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>`,S=()=>{document.querySelectorAll("a[target='_blank']").forEach(r=>{r.insertAdjacentHTML("beforeend",y)})},h=768,u=window.matchMedia(`(width >= ${h}px)`),E=()=>{L(),b()};function L(){const n=document.getElementById("header");n&&n.querySelectorAll(".js-menuButton").forEach(r=>{r.addEventListener("click",()=>{if(!u.matches){const i=n.querySelector(".header__button");i&&(i.ariaExpanded=i.ariaExpanded==="true"?"false":"true"),n.querySelectorAll(".header__button > img").forEach(s=>{s.classList.toggle("u-hidden")}),document.querySelectorAll("body > *:not(#header)").forEach(s=>{s instanceof HTMLElement&&(s.inert=!s.inert)})}})})}function b(){const n=document.querySelector("#header .header__button");u.addEventListener("change",r=>{if(r.matches){if(n){n.ariaExpanded="false";const i=n.querySelector("& > img.__open");i&&i.classList.remove("u-hidden");const s=n.querySelector("& > img.__close");s&&s.classList.add("u-hidden")}document.querySelectorAll("body > *:not(#header)").forEach(i=>{i instanceof HTMLElement&&(i.inert=!1)})}})}const a={html:{title:"HTML関連",list:[{name:"HTML",years:8,description:"アクセシビリティに配慮した実装を心がけており、誰にとっても使いやすいWebページを目指しています。"},{name:"Pug",years:8,description:"HTMLの実装には主にPugを使用しています。<br>コンポーネント毎にファイルを分割することで可読性を向上させ、保守性の高いコードを実現しています。"}]},css:{title:"CSS関連",list:[{name:"CSS",years:8,description:"CSSカスタムプロパティを活用し、柔軟で管理しやすいスタイル設計を行っています。<br>またCSS Grid Layoutを用いて効率的かつ直感的なレイアウトを実装しています。<br>classの命名規則はBEMベースです。"},{name:"PostCSS",years:8,description:"PostCSSを活用し、ベンダープレフィックスの自動付与を行うことで、幅広いブラウザへの対応を実現しています。<br>またメディアクエリを整理し、任意の名前を付けることで、管理しやすいスタイル設計を心がけています。"},{name:"SCSS",years:8,description:"Dart Sassを使用しています。<br>コンポーネント毎にファイルを分割することで可読性を向上させ、管理しやすいコードを実現しています。"},{name:"Tailwind CSS",years:1,description:"プロジェクトに応じてTailwind CSSを使用することがあります。<br>必要に応じて、コンポーネント毎のマージンのみをTailwind CSSで実装するなど、柔軟なスタイル設計を行っています。"}]},js:{title:"JavaScript関連",list:[{name:"JavaScript",years:8,description:"ES6+の構文を用いて実装を行っています。<br>またGSAPを使用したアニメーションの実装も行っています。"},{name:"TypeScript",description:"参考書などで学習中です。<br>型定義を意識した実装を心がけ、より安全で保守性の高いコードを書くことを目指しています。",learning:!0}]},php:{title:"PHP",list:[{name:"PHP",description:"WordPressのオリジナルテーマ実装時に使用した経験があります。"}]},framework:{title:" ライブラリ・フレームワーク",list:[{name:"jQuery",years:8,description:"Webサイトの実装で使用していますが、現在はJavaScriptで完結させることが多いです。"},{name:"React",description:"参考書で学習中です。",learning:!0},{name:"Next.js",description:"参考書で学習中です。",learning:!0},{name:"Astro",years:"2ヶ月",description:"チュートリアルを学習済みです。<br>実務ではサイトの修正対応やAstroのバージョンアップ対応を行いました。"}]},cms:{title:"CMS",list:[{name:"WordPress",years:8,description:"オリジナルテーマの制作が可能です。<br>ただしブロックテーマでの実装経験はありません。"},{name:"microCMS",description:"参考書で学習中です。",learning:!0}]},tools:{title:"ツール",list:[{name:"Git / GitHub",years:8,description:"案件のソースコード管理に使用しています。<br>Gitコマンドでコミットなどの操作ができます。"},{name:"npm",years:8,description:"npmパッケージのインストールや、package.jsonの編集ができます。"},{name:"Webpack",years:8,description:"Pug、SCSS、PostCSS、Babelのビルドを行っています。"},{name:"Vite",description:"学習中です。<br>ポートフォリオサイトで実際に使用してみたりしています。",learning:!0}]},designTools:{title:"デザインツール",description:"デザインデータからコーディングをするために使用。メインに使用していたのはFigmaとXDです。",list:[{name:"Figma",years:2,description:"主に開発モードで作業していました。"},{name:"Adobe XD",years:5},{name:"Adobe Photoshop",years:3},{name:"Adobe Illustrator",years:3}]}},g=()=>{const n=document.getElementById("skillList");if(!n)return!1;Object.keys(a).forEach(r=>{const i=document.createElement("h3");i.classList.add("skills__title"),i.textContent=a[r].title,n.appendChild(i);const s=document.createElement("p");s.classList.add("skills__description"),s.innerHTML=a[r].description??"",s.innerHTML&&n.appendChild(s);const t=document.createElement("ul");t.classList.add("skills__list"),n.appendChild(t);for(const e of a[r].list){const o=document.createElement("li");o.classList.add("skills__item");const m=document.createElement("h3"),l=document.createElement("dl");l.classList.add("skills__years");const c=document.createElement("dt");c.classList.add("__title"),c.textContent="経験年数";const d=document.createElement("dd");d.classList.add("__year");const p=document.createElement("p");if(o.innerHTML="",m.innerHTML=e.learning?`${e.name}<span class="skills__smallTitle">（学習中）</span>`:e.name,o.appendChild(m),e.years){const f=typeof e.years=="number"?`${e.years}年`:e.years;d.textContent=f,l.append(c,d),o.appendChild(l)}e.description&&(p.innerHTML=e.description,o.appendChild(p)),t.appendChild(o)}})};g();S();E();
