import { env } from './env.js';

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://xnava-web.vercel.app',
  'https://xnava.in',
  'https://www.xnava.in',
];

export const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (Postman, curl, mobile apps)
    if (!origin) return callback(null, true);
    
    if (ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`❌ CORS blocked: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};