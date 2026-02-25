import { useEffect, useState } from 'react';

export const useHosts = <T = unknown>() => {
  const [hosts, setHosts] = useState<T[]>([]);

  useEffect(() => {
    setHosts([]);
  }, []);

  return {
    hosts,
  };
};
