import { Router } from 'express';
import { subscribe } from '../controllers/newsletter.controller.js';
import { validate } from '../middleware/validate.js';
import { newsletterValidator } from '../validators/newsletter.validator.js';
import { rateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/', rateLimiter, validate(newsletterValidator), subscribe);

export default router;