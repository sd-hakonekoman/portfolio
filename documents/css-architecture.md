# CSS設計

このプロジェクトのスタイルは **SCSS** で管理しています。設計方針は **BEM** と **FLOCSS** を参考にした独自ルールです。

---

# フォルダ構成

```
src/scss/
├──style.scss
├──foundations/
│  ├──_.scss
│  ├──_base.scss
│  ├──_constants.scss
│  ├──_inert.scss
│  ├──_mediaQuery.scss
│  └──_sanitize.scss
├──layouts/
│  ├──_.scss
│  ├──_card-list.scss
│  ├──_container.scss
│  └──_footer.scss
├──components/
│  ├──_.scss
│  ├──_definitionList.scss
│  ├──_header.scss
│  ├──_list.scss
│  ├──_mv.scss
│  ├──_profile.scss
│  ├──_section.scss
│  ├──_skills.scss
│  └──_work.scss
└──utilities/
   ├──_.scss
   └──_utilities.scss
```

`style.scss` がスタイルのエントリーポイントです。  
各ディレクトリの `_.scss` は barrel ファイルとして扱い、`@forward` で同階層のパーシャルを束ねます。  
`style.scss` からは各 `_.scss` を `@use` して読み込みます。

# SCSSの構成ルール

## パーシャルファイル

- スタイルは `_` で始まる SCSS パーシャルに分割します
- 1ファイル1責務を基本とします
- ディレクトリ単位の公開入口は `_.scss` とします

例.  
`components/_header.scss`  
`components/_skills.scss`  
`layouts/_container.scss`

## `_.scss` の役割

各ディレクトリの `_.scss` では、そのディレクトリ内のパーシャルを `@forward` で公開します。

例.
```scss
@forward "header";
@forward "skills";
```

## `style.scss` の役割

`src/scss/style.scss` では、各ディレクトリの `_.scss` を `@use` して全体の読み込み順を管理します。

例.
```scss
@use "./foundations/_" as *;
@use "./layouts/_" as *;
@use "./components/_" as *;
@use "./utilities/_" as *;
```

読み込み順は `style.scss` の `@use` 順に依存します。

## foundations

リセット、ベーススタイル、カスタムプロパティ、メディアクエリ定義など、サイト全体の基礎となるスタイルを定義します。

例.  
`_sanitize.scss`  
`_base.scss`  
`_constants.scss`

## layouts

ページの大枠となるレイアウト構造を定義します。  
レイアウト用クラスには `.l-` プレフィックスを使用します。

例.  
.l-container  
.l-footer  
.l-card-list

## components

再利用可能なUIコンポーネントを定義します。  
コンポーネント用クラスには `.c-` プレフィックスを使用します。

例.  
.c-header  
.c-section  
.c-work  
.c-skills__item

## utilities

単一の役割のみを持つユーティリティクラスを定義します。  
ユーティリティ用クラスには `.u-` プレフィックスを使用します。

プレフィックス以降のクラス名は **Tailwind CSS と同様の命名規則** を参考にします。

必要に応じて `!important` を使用します。

例.  
.u-hidden  
.u-overscroll-y-none

# クラス命名規則

## 基本

クラス名は **ケバブケース（kebab-case）** を使用します。

.c-primary-card  
.c-primary-card__title  
.c-primary-card__top-image

## BEM構造

BEMの概念をベースに命名します。

Block  
Block__Element  
--Modifier

例.  
.c-card  
.c-card__title  
--large

### Modifier

Modifier は単独では使わず、必ず Block または Element のクラスと組み合わせます。

HTML例.  
```html
<article class="c-card --large">
  <h2 class="c-card__title">Title</h2>
</article>
```

SCSS例.  
```scss
.c-card {
  &.--large {
    inline-size: 100%;
  }
}
```

## State

状態を表すクラスには `is-` プレフィックスを使用します。

例.  
is-active  
is-open  
is-disabled

使用例.  
.c-accordion.is-open  
.c-tab.is-active

# カスタムプロパティ

カスタムプロパティは `foundations` 配下で管理します。

例.  
```scss
:root {
  --color-primary: #0055ff;
  --space-md: 16px;
}
```

# Focus style

フォーカス表示はアクセシビリティ確保のため、グローバルに定義します。  
定義場所は `foundations` 配下とします。

例.  
```scss
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

# JavaScript用クラス

JavaScriptから操作する要素には `js-` プレフィックスを使用します。

JavaScript用クラスには **CSSを定義しません**。

これにより、スタイルと挙動の責務を分離します。

例.  
```html
<button class="c-button js-modal-open">
  モーダルを開く
</button>

<div class="c-modal js-modal"></div>
```

**命名例**  
.js-modal  
.js-modal-open  
.js-accordion  
.js-tab  
.js-toggle

JavaScriptで要素を取得する場合は `js-` クラスを使用します。

例.  
```js
document.querySelector(".js-modal");
```

---

# 現在の課題

- カスタムプロパティの命名規則が決まっていない
