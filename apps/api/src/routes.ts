import { errorHandler } from '$middlewares/errorHandler.js';
import { Router } from 'express';
import { router as healthRouter } from '$routes/health.js';

export const router = Router();

router.use(healthRouter);
router.use(errorHandler);
