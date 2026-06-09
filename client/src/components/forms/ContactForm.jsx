import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { submitContactForm } from '@/utils/api';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const INPUT_CLASSES =
  'w-full rounded-xl border border-gray-700 bg-gray-800/50 px-4 py-3.5 text-white placeholder-gray-500 focus:border-xnava-500 focus:ring-2 focus:ring-xnava-500/20 focus:outline-none transition-all duration-200';

const LABEL_CLASSES = 'block text-sm font-medium text-gray-300 mb-1.5';

export const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { submit, isLoading, error, isSuccess, reset } = useFormSubmit(submitContactForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit(formData);
  };

  // Success state
  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-heading font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400 mb-8">We'll get back to you within 24 hours.</p>
        <Button
          variant="ghostDark"
          onClick={() => {
            reset();
            setFormData(INITIAL_STATE);
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className={LABEL_CLASSES}>Full Name *</label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className={INPUT_CLASSES}
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-email" className={LABEL_CLASSES}>Email *</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className={INPUT_CLASSES}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={LABEL_CLASSES}>Phone</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={INPUT_CLASSES}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className={LABEL_CLASSES}>Subject *</label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="What's this about?"
          className={INPUT_CLASSES}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={LABEL_CLASSES}>Message *</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us how we can help..."
          className={`${INPUT_CLASSES} resize-none`}
        />
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Submit */}
      <Button type="submit" variant="primary" size="lg" fullWidth disabled={isLoading}>
        {isLoading ? (
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span>Sending...</span>
            </div>
            <span className="text-xs text-gray-400 font-normal">
              First request may take 30-60s — waking server
            </span>
          </div>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
};

import { motion } from 'framer-motion';