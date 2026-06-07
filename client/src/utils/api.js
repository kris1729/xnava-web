const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Generic fetch wrapper with error handling.
 * All API calls in the app go through this function.
 */
const request = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || 'Something went wrong');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
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