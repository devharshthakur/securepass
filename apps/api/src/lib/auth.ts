import { prisma } from '@packages/db';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { env } from '../env.js';

export const auth = betterAuth({
	advanced: {
		database: {
			joins: true
		}
	},
	database: prismaAdapter(prisma, { provider: 'postgresql' }),
	secret: env.BETTER_AUTH_SECRET,
	baseURL: env.BETTER_AUTH_URL,
	trustedOrigins: [env.BETTER_AUTH_URL],
	emailAndPassword: {
		enabled: true
	}
});
