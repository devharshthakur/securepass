import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getSession } from '$lib/server/session';

const protectedPaths = new Set(['/home', '/add', '/search']);

export const handle: Handle = async ({ event, resolve }) => {
	if (protectedPaths.has(event.url.pathname)) {
		const session = await getSession(event);

		if (!session?.user?.id) {
			const redirectTo = event.url.pathname + event.url.search;
			redirect(303, `/auth/login?redirectTo=${encodeURIComponent(redirectTo)}`);
		}

		event.locals.userId = session.user.id;
	}

	return resolve(event, {
		preload: ({ type }) => type === 'font'
	});
};
