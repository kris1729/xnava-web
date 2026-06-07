import { subscribeToNewsletter } from '../services/lead.service.js';

export const subscribe = async (req, res, next) => {
  try {
    const { email } = req.validatedBody;
    const result = await subscribeToNewsletter(email);

    res.status(201).json({
      success: true,
      message: result.alreadySubscribed
        ? 'You are already subscribed!'
        : 'Successfully subscribed to the newsletter!',
    });
  } catch (error) {
    next(error);
  }
};