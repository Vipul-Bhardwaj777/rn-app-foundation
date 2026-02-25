import { useState } from 'react';

export const usePayments = <T = unknown>() => {
  const [methods] = useState<T[]>([]);

  return {
    methods,
  };
};
