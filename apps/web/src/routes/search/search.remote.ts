import { searchBodySchema, searchResponseSchema } from '@packages/shared';
import { error } from '@sveltejs/kit';
import { query, getRequestEvent } from '$app/server';
import { PUBLIC_API_URL } from '$app/env/public';

const apiUrl = PUBLIC_API_URL.replace(/\/+$/, '');

export const searchEntries = query(searchBodySchema, async (data) => {
	let response: Response;

	try {
		// Read the incoming request BEFORE any await (required in some runtimes).
		// Forward the browser's cookie so the API sees the Better Auth session.
		const event = getRequestEvent();

		response = await fetch(`${apiUrl}/search`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				cookie: event.request.headers.get('cookie') ?? ''
			},
			body: JSON.stringify(data)
		});
	} catch {
		error(502, 'Unable to connect to the API');
	}

	if (!response.ok) {
		const payload = (await response.json().catch(() => null)) as { error?: string } | null;
		const status = response.status >= 400 && response.status <= 599 ? response.status : 502;

		error(status, payload?.error ?? 'Unable to search passwords');
	}

	const payload = searchResponseSchema.safeParse(await response.json().catch(() => null));
	if (!payload.success) {
		error(502, 'Invalid response from the API');
	}

	return payload.data;
});
