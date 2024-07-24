import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 51232,
  },
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
});
