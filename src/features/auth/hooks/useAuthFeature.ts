import { useState } from 'react';

export const useAuthFeature = () => {
  const [isLoading, setIsLoading] = useState(false);

  const withAuthLoading = async (action: () => Promise<void>): Promise<void> => {
    setIsLoading(true);
    try {
      await action();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    withAuthLoading,
  };
};
