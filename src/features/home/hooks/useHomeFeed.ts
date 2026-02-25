import { useEffect, useState } from 'react';

import type { HomeFeedItem } from '../types/homeTypes';

export const useHomeFeed = () => {
  const [items, setItems] = useState<HomeFeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const load = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const mockItems: HomeFeedItem[] = [
          { id: '1', title: 'Welcome to FeatureWise' },
        ];
        if (isMounted) {
          setItems(mockItems);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    items,
    isLoading,
  };
};
