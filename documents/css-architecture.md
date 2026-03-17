# CSS設計

このプロジェクトのCSSは **BEM** と **FLOCSS** を参考にした独自ルールで設計しています。

---

# フォルダ構成

css/
foundations/
layouts/
components/
utilities/

## foundations

リセット、ベーススタイル、カスタムプロパティなど  
サイト全体の基礎となるスタイルを定義します。

例.  
reset.css  
base.css  
variables.css

## layouts

ページの大枠となるレイアウト構造を定義します。  
レイアウト用クラスには `.l-` プレフィックスを使用します。

例.  
.l-container  
.l-header  
.l-main  
.l-footer

## components

再利用可能なUIコンポーネントを定義します。  
コンポーネント用クラスには `.c-` プレフィックスを使用します。

例.  
.c-button  
.c-card  
.c-modal  
.c-nav

## utilities

単一の役割のみを持つユーティリティクラスを定義します。  
ユーティリティ用クラスには `.u-` プレフィックスを使用します。

プレフィックス以降のクラス名は **Tailwind CSS と同様の命名規則**を参考にします。

必要に応じて `!important` を使用します。

例.  
.u-text-center  
.u-font-bold  
.u-hidden  
.u-flex  
.u-items-center  
.u-justify-between  
.u-mt-16  
.u-px-8

# クラス命名規則

## 基本

クラス名は **ケバブケース（kebab-case）** を使用します。

.c-card  
.c-card__title  
.c-card__image

## BEM構造

BEMの概念をベースに命名します。

Block
Block__Element
Block--Modifier

例.  
.c-card  
.c-card__title  
.c-card--large

## State

状態を表すクラスには `is-` プレフィックスを使用します。

例.  
is-active  
is-open  
is-disabled

使用例.  
.c-accordion.is-open  
.c-tab.is-active

# 詳細度（specificity）

CSSの詳細度は `@layer` を使用して制御します。

例.
@layer foundations;  
@layer layouts;  
@layer components;  
@layer utilities;

基本的な優先順位  
foundation  
layout  
component  
utility

# カスタムプロパティ

カスタムプロパティは `foundations` レイヤーで管理します。

例.  
```
:root {
  --color-primary: #0055ff;
  --space-md: 16px;
}
```

# Focus style

フォーカス表示はアクセシビリティ確保のため  
`foundations` レイヤーでグローバルに定義します。

:focus-visible

例.  
```
:focus-visible {
  outline: 2px solid var(–color-focus);
  outline-offset: 2px;
}
```

# JavaScript用クラス

JavaScriptから操作する要素には `js-` プレフィックスを使用します。

JavaScript用クラスには **CSSを定義しません**。

これにより、スタイルと挙動の責務を分離します。

例.
```
<button class="c-button js-modal-open">
  モーダルを開く
</button>
```


<div class="c-modal js-modal"></div>

命名例  
.js-modal  
.js-modal-open  
.js-accordion  
.js-tab  
.js-toggle

JavaScriptで要素を取得する場合は js- クラスを使用します。

例.  
```
document.querySelector('.js-modal')
```

⸻

# 現在の課題
- カスタムプロパティの命名規則が決まっていない