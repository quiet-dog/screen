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
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        "vue",
        "vue-router",
        {
          axios: [["default", "axios"]],
        },
      ],
      dts: "./auto-imports.d.ts",
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
  server: {
    port: 9200,
    host: "0.0.0.0",
    hmr: true,
    proxy: {
      "/api": {
        target: "http://localhost:9020",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
