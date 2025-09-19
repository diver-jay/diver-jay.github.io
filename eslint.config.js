import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(
  {
    ignores: ["dist", "node_modules", "build"],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      perfectionist: perfectionistPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_"
        }
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          "type": "natural",
          "order": "asc",
          "newlinesBetween": "always",
          "groups": [
            "type",
            ["builtin", "external"],
            "internal",
            ["parent", "sibling", "index"],
            "side-effect"
          ]
        }
      ],
    },
    settings: {
      "react": {
        "version": "detect"
      }
    }
  },
  ...tseslint.configs.recommended,
);