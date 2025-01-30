import tailwindcss from "@tailwindcss/vite";

export default {
  build: {
    cssMinify: false, // CSSの圧縮を無効化
  },
  plugins: [tailwindcss()],
};
