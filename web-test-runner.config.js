import { playwrightLauncher } from "@web/test-runner-playwright";

export default {
  files: "src/**/*.web.test.ts",
  nodeResolve: true,
  browsers: [playwrightLauncher({ product: "chromium" })],
  testFramework: {
    config: {
      timeout: 10000,
      ui: "bdd",
    },
  },
};
