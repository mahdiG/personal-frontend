import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    include: ["src/**/*.test.ts"],
    exclude: ["src/**/*.web.test.ts", "node_modules"],
    globals: true,
  },
});
