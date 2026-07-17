import baseConfig from '@packages/prettier-config';

/** @type {import('prettier').Config} */
export default {
	...baseConfig,
	arrowParens: 'always',
	endOfLine: 'lf'
};
