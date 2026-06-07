import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { subscribeToNewsletter } from '@/utils/api';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const { submit, isLoading, error, isSuccess, reset } = useFormSubmit(subscribeToNewsletter);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    await submit(email.trim());
  };

  if (isSuccess) {
    return (
      <div className="text-center py-4">
        <p className="text-green-400 font-medium">Subscribed! Check your inbox.</p>
        <button
          onClick={() => {
            reset();
            setEmail('');
          }}
          className="text-sm text-gray-400 underline mt-2 hover:text-gray-300"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="newsletter-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="your@email.com"
        className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-xnava-400 focus:ring-2 focus:ring-xnava-400 focus:outline-none transition-colors"
      />
      <Button type="submit" variant="primary" disabled={isLoading}>
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </form>
  );
};