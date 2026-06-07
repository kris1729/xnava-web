import { useState, useCallback } from 'react';

/**
 * Generic form submission hook.
 * Manages loading, success, and error states for any async submit function.
 */
export const useFormSubmit = (submitFn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const submit = useCallback(
    async (formData) => {
      setIsLoading(true);
      setError(null);
      setIsSuccess(false);

      try {
        await submitFn(formData);
        setIsSuccess(true);
      } catch (err) {
        setError(err.message || 'Submission failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    [submitFn],
  );

  const reset = useCallback(() => {
    setIsLoading(false);
    setError(null);
    setIsSuccess(false);
  }, []);

  return { submit, isLoading, error, isSuccess, reset };
};