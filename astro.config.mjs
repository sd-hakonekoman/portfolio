import { defineConfig } from "astro/config";

export default defineConfig({
  srcDir: "./src",
  publicDir: "./src/public",
  outDir: "./docs",
  vite: {
    build: {
      cssMinify: false,
    },
    server: {
      host: true,
      open: true,
    },
  },
});
