import { prisma } from '@packages/db';
import { Router } from 'express';

export const router: Router = Router();

router.get('/users', async (_req, res) => {
	const users = await prisma.user.findMany();
	res.json(users);
});
