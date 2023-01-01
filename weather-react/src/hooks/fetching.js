import { useState } from 'react';

export const useFetching = (callback) => {
  const [error, setError] = useState('');

  const fetching = async (...args) => {
    try {
      await callback(...args);
    } catch (error) {
      setError(error.message);
    }
  };

  return [fetching, error];
};
