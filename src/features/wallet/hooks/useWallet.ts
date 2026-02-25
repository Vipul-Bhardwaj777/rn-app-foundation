import { useState } from 'react';

export const useWallet = <T = unknown>() => {
  const [balance] = useState(0);
  const [transactions] = useState<T[]>([]);

  return {
    balance,
    transactions,
  };
};
