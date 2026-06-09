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
      <div className="text-center py-3">
        <p className="text-green-400 font-medium text-sm">Subscribed! Welcome aboard.</p>
        <button
          onClick={() => {
            reset();
            setEmail('');
          }}
          className="text-xs text-gray-500 underline mt-2 hover:text-gray-300 transition-colors"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          type="email"
          id="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
          className="flex-1 rounded-xl border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 focus:border-xnava-500 focus:ring-2 focus:ring-xnava-500/20 focus:outline-none transition-all duration-200 text-sm"
        />
        <Button type="submit" variant="primary" size="sm" disabled={isLoading}>
          {isLoading ? (
            <span className="text-xs">Subscribing...</span>
          ) : (
            'Subscribe'
          )}
        </Button>
      </div>
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </form>
  );
};