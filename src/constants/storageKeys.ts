export const STORAGE_KEYS = {
  USER_DATA: 'USER_DATA',
} as const;

export type StorageKey = keyof typeof STORAGE_KEYS;
