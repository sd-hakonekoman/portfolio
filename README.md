# 概要

ポートフォリオサイトです。

# 使用技術

- Vite
- HTML
- CSS
- TypeScript

## CSS
[CSS設計](./documents/css-architecture.md)

## TypeScript

### src/vite-env.d.ts

Vite が提供する型定義を TypeScript に読み込ませるためのファイルです。

- import.meta.env の型定義を有効にします。
- CSS や画像などのアセット import に関する型定義を有効にします。
- Vite + TypeScript の構成では通常必要です。

このプロジェクトでは TypeScript から CSS を import しているため、不要と判断できるまでは削除しない前提とします。

# ディレクトリ構成

いずれ書く。

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

5. ビルド確認を行います。

   ```bash
   npm run build
   ```

# GitHub Actions

GitHub Actions により、`main` ブランチへの `push` をトリガーに自動的に Github Pages サイト に対応内容が反映されるようになっています。

## 詳細

`main` ブランチへの `push` をトリガーに GitHub Actions が自動実行されます。

- `npm ci` を実行します。
- `npm run build` を実行します。
- ビルド結果を artifact として引き渡します。
- 生成された `docs` ディレクトリに差分がある場合のみ、自動でコミットして `main` に反映します。

同じタイミングで `main` に連続して `push` が入った場合は、古い workflow run をキャンセルし、最新の run だけが `docs` を更新するようにしています。
