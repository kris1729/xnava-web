import { Contact } from '../models/Contact.model.js';
import { Newsletter } from '../models/Newsletter.model.js';
import { sendContactEmail, sendNewsletterWelcome } from './email.service.js';

export const createContact = async (contactData) => {
  const contact = await Contact.create(contactData);

  try {
    await sendContactEmail(contactData);
  } catch (emailError) {
    console.error(`Failed to send contact email: ${emailError.message}`);
  }

  return contact;
};

export const subscribeToNewsletter = async (email) => {
  const existing = await Newsletter.findOne({ email });

  if (existing) {
    if (!existing.isActive) {
      existing.isActive = true;
      await existing.save();
    }
    return { alreadySubscribed: true };
  }

  await Newsletter.create({ email });

  try {
    await sendNewsletterWelcome(email);
  } catch (emailError) {
    console.error(`Failed to send welcome email: ${emailError.message}`);
  }

  return { alreadySubscribed: false };
};