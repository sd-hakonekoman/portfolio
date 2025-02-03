import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  envDir: "../",
  build: {
    outDir: "../dist",
    cssMinify: false, // CSSの圧縮を無効化
  },
});
