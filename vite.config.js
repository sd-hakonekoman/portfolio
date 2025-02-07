import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  envDir: "../",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true, // ビルド前に出力先ディレクトリをクリーンアップ
    cssMinify: false, // CSSの圧縮を無効化
  },
  server: {
    host: true,
  },
});
