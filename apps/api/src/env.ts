import 'dotenv/config';
import { z } from 'zod';

const DEFAULT_CORS_ORIGINS = ['http://localhost:5173', 'http://localhost:4173'].join(',');

const envSchema = z.object({
	PORT: z.coerce.number().int().min(1).max(65535),
	CORS_ORIGIN: z.string().default(DEFAULT_CORS_ORIGINS),
	ENCRYPTION_KEY: z
		.string()
		.length(44, 'ENCRYPTION_KEY must be base64 of 32 bytes (openssl rand -base64 32)')
		.refine((s) => {
			const decoded = Buffer.from(s, 'base64');
			return decoded.length === 32 && decoded.toString('base64') === s;
		}, 'ENCRYPTION_KEY must be base64 of 32 bytes (openssl rand -base64 32)')
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
