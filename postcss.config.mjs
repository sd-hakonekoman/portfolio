import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";
import postcssCustomMedia from "postcss-custom-media";

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    sortMediaQueries(),
    postcssCustomMedia(),
  ],
};
