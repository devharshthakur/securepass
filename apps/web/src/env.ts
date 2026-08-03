import { building } from '$app/env';
import { defineEnvVars } from '@sveltejs/kit/env';
import { z } from 'zod';

export const variables = defineEnvVars({
	DATABASE_URL: {
		description: 'PostgreSQL connection string for Prisma',
		schema: building
			? z.string().url().startsWith('postgresql://').optional()
			: z.string().url().startsWith('postgresql://')
	},
	PUBLIC_API_URL: {
		public: true,
		description: 'Base URL of the API server',
		schema: z.string().url().default('http://localhost:8000')
	}
});
