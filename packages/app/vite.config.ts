import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import * as path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.join(__dirname, "../../", "docs"),
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vueJsx(),

    quasar({
      sassVariables: "src/styles/quasar.variables.scss",
    }),
  ],

  define: {
    "process.env": {},
  },

  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
