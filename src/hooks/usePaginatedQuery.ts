import { useState } from 'react';

export const usePaginatedQuery = <T>(
  fetchPage: (page: number) => Promise<T[]>
) => {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);

  const loadNext = async (): Promise<void> => {
    const nextPage = page + 1;
    const newItems = await fetchPage(nextPage);
    setItems((prev) => [...prev, ...newItems]);
    setPage(nextPage);
  };

  return {
    items,
    page,
    loadNext,
  };
};
