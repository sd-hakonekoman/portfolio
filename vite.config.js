import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  // 共通の設定
  const commonSettings = {
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
  };

  // 追加の設定
  let addSettings = {};

  if (command === "build") {
    // build 固有の設定
    addSettings = {
      esbuild: {
        drop: ["console", "debugger"],
      },
    };
  }

  return { ...commonSettings, ...addSettings };
});
