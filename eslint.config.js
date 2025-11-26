// eslint.config.ts
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", ".next", "next-env.d.ts",]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
    ],
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      // Keep the rule, but allow Next app-router exports:
      "react-refresh/only-export-components": [
        "warn",
        {
          allowExportNames: [
            "metadata",
            "viewport",
            "generateMetadata",
            "generateViewport",
          ],
        },
      ],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: { version: "detect" },
    },
  },
]);
