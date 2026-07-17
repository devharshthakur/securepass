import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: ['src/**/*.ts', '!**/*.test.ts'],
	outDir: 'build',
	format: ['esm'],
	platform: 'node',
	target: 'esnext',
	unbundle: true,
	clean: true,
	outExtensions: () => ({ js: '.js' }),
	shims: true,
	dts: false,
	inputOptions: {
		resolve: {
			alias: {
				$lib: './src/lib',
				$middlewares: './src/middlewares',
				$services: './src/services',
				$routes: './src/routes'
			}
		},
		tsconfig: './tsconfig.json'
	}
});
