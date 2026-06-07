import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT),
  secure: true,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error('❌ SMTP connection failed:', error.message);
  } else {
    console.log('✅ SMTP server ready to send emails');
    console.log(`   Aliases: ${env.FROM_EMAIL_XNAVA} | ${env.FROM_EMAIL_TECHTRAINX} | ${env.FROM_EMAIL_CHETNA}`);
  }
});

/**
 * Contact form → comes from info@xnava.in
 */
export const sendContactEmail = async ({ name, email, phone, subject, message }) => {
  const html = buildContactHtml({ name, email, phone, subject, message });

  await transporter.sendMail({
    from: `"Xnava Enterprises" <${env.FROM_EMAIL_XNAVA}>`,
    to: env.TO_EMAIL,
    replyTo: email,
    subject: `[xnava.in] ${subject}`,
    html,
  });
};

/**
 * TechTrainx inquiry → comes from techtrainx@xnava.in
 */
export const sendTechTrainxEmail = async ({ name, email, phone, interest }) => {
  const html = buildUnitEmailHtml({
    unitName: 'TechTrainx Labs',
    unitColor: '#16a34a',
    unitEmail: env.FROM_EMAIL_TECHTRAINX,
    name,
    email,
    phone,
    interest,
  });

  await transporter.sendMail({
    from: `"TechTrainx Labs" <${env.FROM_EMAIL_TECHTRAINX}>`,
    to: env.TO_EMAIL,
    replyTo: email,
    subject: `[TechTrainx] New Inquiry from ${name}`,
    html,
  });
};

/**
 * Chetna inquiry → comes from chetna@xnava.in
 */
export const sendChetnaEmail = async ({ name, email, phone, interest }) => {
  const html = buildUnitEmailHtml({
    unitName: 'Chetna Academy',
    unitColor: '#dc2626',
    unitEmail: env.FROM_EMAIL_CHETNA,
    name,
    email,
    phone,
    interest,
  });

  await transporter.sendMail({
    from: `"Chetna Academy" <${env.FROM_EMAIL_CHETNA}>`,
    to: env.TO_EMAIL,
    replyTo: email,
    subject: `[Chetna Academy] New Inquiry from ${name}`,
    html,
  });
};

/**
 * Newsletter welcome → comes from info@xnava.in
 */
export const sendNewsletterWelcome = async (email) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1d4ed8; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Xnava Enterprises</h1>
      </div>
      <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <h2 style="color: #1d4ed8;">Welcome to the Xnava Newsletter!</h2>
        <p>Thank you for subscribing. Here's what you'll receive:</p>
        <ul>
          <li style="margin-bottom: 8px;"><strong>TechTrainx Labs</strong> — New bootcamp batches, placement stats</li>
          <li style="margin-bottom: 8px;"><strong>Chetna Academy</strong> — Admission updates, exam tips</li>
          <li style="margin-bottom: 8px;"><strong>Events</strong> — Workshops, demo weeks, webinars</li>
        </ul>
        <p style="color: #6b7280; font-size: 12px; margin-top: 24px; border-top: 1px solid #e5e7eb; padding-top: 16px;">
          You received this because you subscribed at xnava.in<br/>
          Xnava Enterprises, Near Amity University, Lucknow, UP - 226010
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Xnava Newsletter" <${env.FROM_EMAIL_XNAVA}>`,
    to: email,
    subject: 'Welcome to Xnava Newsletter! 🚀',
    html,
  });
};

// ─── Private helpers ───

const buildContactHtml = ({ name, email, phone, subject, message }) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: #1d4ed8; padding: 20px 24px; border-radius: 12px 12px 0 0;">
      <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
    </div>
    <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Name</td><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6;">${name}</td></tr>
        <tr><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Email</td><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></td></tr>
        <tr><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Phone</td><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6;">${phone || 'Not provided'}</td></tr>
        <tr><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Subject</td><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6;">${subject}</td></tr>
      </table>
      <h3 style="margin-top: 20px; color: #374151;">Message:</h3>
      <div style="background: #f9fafb; padding: 16px; border-radius: 8px; line-height: 1.7; color: #1f2937;">${message}</div>
      <p style="color: #9ca3af; font-size: 11px; margin-top: 24px; text-align: center;">Sent via xnava.in contact form</p>
    </div>
  </div>
`;

const buildUnitEmailHtml = ({ unitName, unitColor, unitEmail, name, email, phone, interest }) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: ${unitColor}; padding: 20px 24px; border-radius: 12px 12px 0 0;">
      <h2 style="color: white; margin: 0;">${unitName} — New Inquiry</h2>
    </div>
    <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Name</td><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6;">${name}</td></tr>
        <tr><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Email</td><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: ${unitColor};">${email}</a></td></tr>
        <tr><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Phone</td><td style="padding: 10px 8px; border-bottom: 1px solid #f3f4f6;">${phone || 'Not provided'}</td></tr>
      </table>
      <h3 style="margin-top: 20px; color: #374151;">Interest:</h3>
      <div style="background: #f9fafb; padding: 16px; border-radius: 8px; line-height: 1.7; color: #1f2937;">${interest}</div>
      <p style="color: #9ca3af; font-size: 11px; margin-top: 24px; text-align: center;">Sent from ${unitEmail}</p>
    </div>
  </div>
`;