import { z } from 'zod';

export const newsletterValidator = z.object({
  email: z.string().email('Invalid email address'),
});