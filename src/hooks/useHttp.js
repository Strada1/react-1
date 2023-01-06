import { useState } from 'react';

export const useHttp = () => {
  const [error, setError] = useState(false);

  const request = async (url, method = 'GET', body = null) => {
    try {
      const response = await fetch(url, { method, body });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    } catch (e) {
      setError(true);
      console.log(e.message);
    }
  };

  const clearError = () => setError(false);

  return { request, error, clearError, setError };
};
