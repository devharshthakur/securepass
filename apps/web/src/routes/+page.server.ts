import { prisma } from '@packages/db';

export async function load() {
	const user = await prisma.user.findFirst();
	return { greeting: user?.name ?? 'No user added yet' };
}
