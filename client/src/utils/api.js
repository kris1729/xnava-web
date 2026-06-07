const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Generic fetch wrapper with 90-second timeout for Render cold starts.
 * All API calls in the app go through this function.
 */
const request = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 90000); // 90s for cold start

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    signal: controller.signal,
    ...options,
  };

  try {
    const response = await fetch(url, config);
    clearTimeout(timeoutId);
    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.message || 'Something went wrong');
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      throw new Error(
        'Server is taking too long to respond. Please try again in a few seconds.',
      );
    }
    throw err;
  }
};

/**
 * Submit contact form
 */
export const submitContactForm = async (formData) => {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

/**
 * Subscribe to newsletter
 */
export const subscribeToNewsletter = async (email) => {
  return request('/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};