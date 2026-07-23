import { prisma } from '@packages/db';
import { Router } from 'express';

export const showRouter = Router();

showRouter.get('/show', async (_req, res) => {
	const data = await prisma.credential.findMany();
	return res.json(data);
});
