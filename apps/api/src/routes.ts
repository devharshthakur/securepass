import { errorHandler } from '$middlewares/errorHandler.js';
import { Router } from 'express';
import { router as healthRouter } from '$routes/health.js';
import { router as usersRouter } from '$routes/users.js';

export const router = Router();

router.use(healthRouter);
router.use(usersRouter);
router.use(errorHandler);
