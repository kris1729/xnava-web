import { createContact } from '../services/lead.service.js';

export const submitContact = async (req, res, next) => {
  try {
    const contact = await createContact(req.validatedBody);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
      data: { id: contact._id },
    });
  } catch (error) {
    next(error);
  }
};