import { useState } from 'react';

export const useSettings = () => {
  const [settings] = useState<Record<string, unknown>>({});

  return {
    settings,
  };
};
