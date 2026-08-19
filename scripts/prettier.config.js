import baseConfig from '@packages/prettier-config';

/** @type {import('prettier').Config} */
export default {
	...baseConfig,
	plugins: ['prettier-plugin-sh']
};
