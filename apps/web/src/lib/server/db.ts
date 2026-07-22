import { DATABASE_URL } from '$app/env/private';
import { createPrismaClient } from '@packages/db';

/**
 * Singleton PrismaClient for the web app.
 *
 * The globalThis guard prevents connection-pool exhaustion during SvelteKit
 * HMR in dev mode (each hot reload would otherwise create a new `pg.Pool`).
 */
const globalForDb = globalThis as unknown as {
	db: ReturnType<typeof createPrismaClient>;
};

export const db = globalForDb.db ?? createPrismaClient(DATABASE_URL);

if (process.env.NODE_ENV !== 'production') globalForDb.db = db;
