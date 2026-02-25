import { useState } from 'react';

export const useExploreSearch = <T = unknown>() => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);

  const search = (text: string): void => {
    setQuery(text);
    setResults([]);
  };

  return {
    query,
    results,
    search,
  };
};
