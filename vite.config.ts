import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
      types: [
        {
          from: "vue-router",
          names: ["RouterLink", "RouterView"],
        },
      ],
      include: [/\.vue$/, /\.vue\?vue/],
      deep: true,
      allowOverrides: false,
      dirs: ["src/components"],
    }),
  ],
});
