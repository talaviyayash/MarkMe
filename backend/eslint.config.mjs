import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    // Specify the environment settings and globals
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
];
