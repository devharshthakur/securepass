import { redirect } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$app/env/private';

const apiUrl = PUBLIC_API_URL.replace(/\/+$/, '');

export async function load({ fetch, request }) {
	const response = await fetch(`${apiUrl}/api/auth/get-session`, {
		headers: {
			cookie: request.headers.get('cookie') ?? ''
		}
	});

	if (!response.ok || !(await response.json())) {
		redirect(303, '/');
	}

	return {};
}
