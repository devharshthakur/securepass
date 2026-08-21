import { PRIVATE_API_URL } from '$app/env/private';
import type { RequestEvent } from '@sveltejs/kit';

const apiUrl = PRIVATE_API_URL.replace(/\/+$/, '');

export async function getSession(event: RequestEvent) {
	const response = await event.fetch(`${apiUrl}/api/auth/get-session`, {
		headers: {
			cookie: event.request.headers.get('cookie') ?? ''
		}
	});

	if (!response.ok) return null;

	return response.json();
}
