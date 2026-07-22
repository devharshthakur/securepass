import 'dotenv/config';
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

// Default singleton for Node.js consumers (e.g. API app) using process.env
const defaultAdapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: defaultAdapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/**
 * Create a PrismaClient instance with an explicit PostgreSQL connection string.
 *
 * The caller is responsible for providing a valid connection string and
 * managing the singleton (e.g. via globalThis) to avoid creating multiple
 * connection pools in dev/HMR environments.
 *
 * @example
 *   import { createPrismaClient } from '@packages/db'
 *   const db = createPrismaClient('postgresql://user:pass@host:5432/db')
 */
export function createPrismaClient(connectionString: string): PrismaClient {
  return new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
  });
}
