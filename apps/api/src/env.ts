import 'dotenv/config';
import { z } from 'zod';

const DEFAULT_CORS_ORIGINS = ['http://localhost:5173', 'http://localhost:4173'].join(',');

const envSchema = z.object({
	PORT: z.coerce.number().int().min(1).max(65535),
	CORS_ORIGIN: z.string().default(DEFAULT_CORS_ORIGINS)
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
	console.error('Invalid or missing environment variables:');
	for (const issue of result.error.issues) {
		console.error(`  - ${issue.path.join('.')}: ${issue.message}`);
	}
	throw new Error('Environment validation failed');
}

export const env = Object.freeze(result.data);
