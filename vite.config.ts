import { defineConfig } from "vite";

export default defineConfig({
  // Static hosting at the site root behind nginx.
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 8000,
    host: "0.0.0.0",
  },
});
