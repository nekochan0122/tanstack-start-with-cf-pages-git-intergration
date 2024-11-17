import { defineConfig } from "@tanstack/start/config";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    rollupConfig: {
      external: ["node:async_hooks"],
    },
  },
});
