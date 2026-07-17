import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

export { globals, ts };

export const baseConfig = defineConfig(
	prettier,
	js.configs.recommended,
	...ts.configs.recommended,
	{
		ignores: ["node_modules/**", "dist/**", "build/**"],
	},
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			"no-undef": "off",

			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{ prefer: "type-imports", fixStyle: "separate-type-imports" },
			],
			"@typescript-eslint/no-explicit-any": "warn",
			// prefer-nullish-coalescing and prefer-optional-chain intentionally
			// NOT here — they require type information, which not all consumers
			// of baseConfig configure (e.g., the web app's non-svelte files).
			// Each app should add them in its own type-aware config.
		},
	},
);
