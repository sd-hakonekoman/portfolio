import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sd-hakonekoman.github.io",
  base: "/portfolio/",
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
