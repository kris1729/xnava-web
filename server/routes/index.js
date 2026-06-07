import { Router } from 'express';
import contactRoutes from './contact.routes.js';
import newsletterRoutes from './newsletter.routes.js';

const router = Router();

router.use('/contact', contactRoutes);
router.use('/newsletter', newsletterRoutes);

router.get('/health', (_req, res) => {
  res.json({ success: true, message: 'Xnava API is running' });
});

export default router;