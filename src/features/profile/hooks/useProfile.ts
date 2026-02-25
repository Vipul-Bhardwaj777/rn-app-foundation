import { useState } from 'react';

export const useProfile = <T = unknown>() => {
  const [profile] = useState<T | null>(null);

  return {
    profile,
  };
};
