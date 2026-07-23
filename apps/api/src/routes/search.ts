import { decrypt } from '$services/credential.js';
import { prisma } from '@packages/db';
import { Router } from 'express';
import z from 'zod';

export const searchRouter: Router = Router();

const searchSchema = z.object({
	label: z.string().min(1).max(255)
});

searchRouter.post('/search', async (req, res) => {
	const body = searchSchema.safeParse(req.body);
	if (!body.success) {
		return res.json({
			error: body.error.flatten()
		});
	}

	const searchResult = await prisma.credential.findMany({
		where: {
			label: {
				contains: body.data.label
			}
		}
	});

	const username = decrypt(searchResult[0].encryptedUsername);
	const password = decrypt(searchResult[0].encryptedPassword);

	return res.json({
		label: body.data.label,
		username: username,
		password: password
	});
});
