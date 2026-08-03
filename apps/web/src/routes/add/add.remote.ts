import { addBodySchema } from '@packages/shared';
import { error } from '@sveltejs/kit';
import { form } from '$app/server';
import { PUBLIC_API_URL } from '$app/env/public';

const apiUrl = PUBLIC_API_URL.replace(/\/+$/, '');

export const addEntry = form(addBodySchema, async (data) => {
	let response: Response;

	try {
		response = await fetch(`${apiUrl}/add`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	} catch {
		error(502, 'Unable to connect to the API');
	}

	if (!response.ok) {
		const payload = (await response.json().catch(() => null)) as { error?: string } | null;
		const status = response.status >= 400 && response.status <= 599 ? response.status : 502;

		error(status, payload?.error ?? 'Unable to save password');
	}

	return { success: true };
});
