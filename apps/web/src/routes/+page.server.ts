import { db } from '$lib/server/db';

export async function load() {
	const user = await db.user.findFirst();
	return { greeting: user?.name ?? 'No user added yet' };
}
