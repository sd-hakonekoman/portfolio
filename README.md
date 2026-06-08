# 概要

Astro で構築しているポートフォリオサイトです。

# 使用技術

- Astro
- HTML
- SCSS
- JavaScript
- PostCSS

## CSS
[CSS設計](./documents/css-architecture.md)

# ディレクトリ構成

```text
src/
├─ assets/
│  ├─ js/        # フロントエンド用のJavaScript
│  └─ scss/      # スタイル
├─ components/   # Astroコンポーネント
├─ data/         # 表示用データ
├─ pages/        # ページエントリ
└─ public/       # 静的アセット
```

# 環境構築の手順

1. Node.js 24系をインストールします。

   ```bash
   fnm install 24
   ```

2. このリポジトリでNode.js 24系を有効化します。

   ```bash
   fnm use
   ```

3. Node.jsのバージョンが24系であることを確認します。

   ```bash
   node -v
   ```

   `v24.*` と表示されればOKです。

4. 依存関係をインストールします。

   ```bash
   npm ci
   ```

5. 開発サーバーを起動します。

   ```bash
   npm run dev
   ```

6. ビルド確認を行います。

   ```bash
   npm run build
   ```

   ビルド結果は `docs` に出力されます。

# 開発時の主な参照先

- ページエントリは `src/pages/index.astro` です。
- 各セクションは `src/components` 配下の Astro コンポーネントで管理しています。
- 表示用データは `src/data` 配下で管理しています。
- JavaScript と SCSS は `src/assets` 配下で管理しています。
- 画像などの静的アセットは `src/public` 配下に配置しています。

# npm scripts

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: 本番用にビルドし、`docs` を更新します。
- `npm run preview`: ビルド済みファイルをローカルで確認します。

# GitHub Actions

GitHub Actions により、基本的には `main` ブランチへの `push` をトリガーに自動的に GitHub Pages サイトに変更内容が反映されるようになっています。

ただし、Actions 自身が行う `docs` 更新コミットの `push` については、各 job の `if: github.actor != 'github-actions[bot]'` により実行されません（無限ループ防止）。

## GitHub Pages向けの実装

- Astro の設定ファイル `astro.config.mjs` で `site: "https://sd-hakonekoman.github.io"` を設定しています。
- 同じく `astro.config.mjs` で `base: "/portfolio/"` を設定し、repository GitHub Pages 配下でも CSS / JavaScript / 画像などのアセットを正しいパスで参照できるようにしています。
- Astro のビルド成果物は `_astro` ディレクトリ配下に出力されるため、Jekyll に除外されないよう `src/public/.nojekyll` を配置しています。
- `npm run build` 実行時に `docs/.nojekyll` が生成され、GitHub Pages 公開時にも `_astro` 配下のアセットが配信されます。
- GitHub Pages の公開対象は `docs` ディレクトリです。

## GitHub Pages運用時の注意

- repository 名を変更した場合は、`astro.config.mjs` の `base` を公開URLに合わせて更新する必要があります。
- custom domain を使ってルート配下で公開する場合は、`site` と `base` の設定を見直してください。

## 詳細

`main` ブランチへの `push` をトリガーに GitHub Actions が自動実行されます。  
ただし、`github-actions[bot]` による `push` は各 job の条件で除外されるため、Actions が自動コミットした `docs` 更新をきっかけに再実行されることはありません。

- `npm ci` を実行します。
- `npm run build` を実行します。
- ビルド結果を artifact として引き渡します。
- 生成された `docs` ディレクトリに差分がある場合のみ、自動でコミットして `main` に反映します。

同じタイミングで `main` に連続して `push` が入った場合は、古い workflow run をキャンセルし、最新の run だけが `docs` を更新するようにしています。
