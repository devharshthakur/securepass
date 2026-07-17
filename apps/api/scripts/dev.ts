import { resolve } from 'node:path';
import concurrently from 'concurrently';

const { result } = concurrently(
	[
		{ command: 'tsc --watch --noEmit', name: 'typecheck', prefixColor: 'blue' },
		{
			command: 'nodemon',
			name: 'server',
			prefixColor: 'green',
			cwd: resolve(import.meta.dirname, '..')
		}
	],
	{
		prefix: 'name',
		killOthersOn: ['failure'],
		restartTries: 0
	}
);

result.then(
	() => {
		console.log('Dev server stopped');
		process.exit(0);
	},
	(failure) => {
		console.error('Dev server failed:', failure);
		process.exit(1);
	}
);
