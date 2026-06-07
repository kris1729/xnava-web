import { env } from './env.js';

export const corsOptions = {
  origin: env.NODE_ENV === 'production' ? env.CLIENT_URL : 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};