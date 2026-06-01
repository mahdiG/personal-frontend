import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import lit from "eslint-plugin-lit";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  lit.configs["flat/all"],

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // --- Overrides for strictness and clarity ---
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: false },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowAny: false, allowBoolean: true, allowNumber: true },
      ],
      // '@typescript-eslint/no-unnecessary-condition': 'off', // aggressive on DOM
      "@typescript-eslint/no-deprecated": "warn",

      // AGENTS.md mandates `type` over `interface`
      "@typescript-eslint/consistent-type-definitions": "off",

      // 'lit/no-nullable-attribute-expression': 'off', // valid for optional attrs

      // Consistency
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-var": "error",
      "prefer-const": "error",
    },
  },

  {
    ignores: [
      "dist/",
      "build/",
      "node_modules/",
      "*.config.*",
      "**/__tests__/**",
      "**/__test__/**",
    ],
  },
);
