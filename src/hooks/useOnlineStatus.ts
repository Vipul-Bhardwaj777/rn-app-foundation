import { useEffect, useState } from 'react';

export const useOnlineStatus = (): boolean => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Replace with real connectivity listener
    setIsOnline(true);
  }, []);

  return isOnline;
};
