import { baseConfig, ts } from '@packages/eslint-config';

export default ts.config(
	{
		ignores: ['build/**', 'node_modules/**', 'dist/**', '**/*.d.ts']
	},
	...baseConfig,
	...ts.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			}
		},
		rules: {
			// Common TS rules now inherited from baseConfig (no-unused-vars,
			// consistent-type-imports, no-explicit-any). These two remain here
			// because they require type information:
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error'
		}
	},
	{
		files: ['**/*.js', '**/*.mjs'],
		...ts.configs.disableTypeChecked
	}
);
