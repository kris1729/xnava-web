import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: process.env.PORT || '5000',
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT || '465',
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  FROM_EMAIL_XNAVA: process.env.FROM_EMAIL_XNAVA,
  FROM_EMAIL_TECHTRAINX: process.env.FROM_EMAIL_TECHTRAINX,
  FROM_EMAIL_CHETNA: process.env.FROM_EMAIL_CHETNA,
  TO_EMAIL: process.env.TO_EMAIL,
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
};