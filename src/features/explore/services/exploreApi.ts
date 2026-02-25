export interface SearchParams {
  query?: string;
  [key: string]: unknown;
}

export const searchListings = async <T = unknown>(
  params?: SearchParams
): Promise<T[]> => {
  return [];
};
