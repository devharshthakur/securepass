import path from 'node:path';
import { baseConfig, globals, ts } from '@packages/eslint-config';
import svelte from 'eslint-plugin-svelte';
import { defineConfig, includeIgnoreFile } from 'eslint/config';

// Inline Svelte compiler options — svelte.config.js was removed in favor of
// passing config directly to sveltekit() in vite.config.ts (SvelteKit >= 2.62.0).
const svelteConfig = {
	compilerOptions: {
		runes: ({ filename }) =>
			filename.split(/[/\\]/).includes('node_modules') ? undefined : true
	}
};

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	...baseConfig,
	svelte.configs.recommended,
	svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser } }
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	},
	{
		// Override or add rule settings here, such as:
		// 'svelte/button-has-type': 'error'
		rules: {}
	}
);
