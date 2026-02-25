import EncryptedStorage from 'react-native-encrypted-storage';

import { STORAGE_KEYS } from '../../constants/storageKeys';
import type { UserData } from '../../features/auth/types/authTypes';

export const setSecureItem = async (
  key: string,
  value: unknown
): Promise<void> => {
  const stringValue =
    typeof value === 'string' ? value : JSON.stringify(value);
  await EncryptedStorage.setItem(key, stringValue);
};

export const getSecureItem = async <T = unknown>(key: string): Promise<T | null> => {
  const value = await EncryptedStorage.getItem(key);
  if (value == null) {
    return null;
  }
  try {
    return JSON.parse(value) as T;
  } catch {
    return value as T;
  }
};

export const removeSecureItem = async (key: string): Promise<void> => {
  await EncryptedStorage.removeItem(key);
};

export const saveUserData = async (userData: UserData): Promise<void> => {
  await setSecureItem(STORAGE_KEYS.USER_DATA, userData);
};

export const getUserData = async (): Promise<UserData | null> => {
  return getSecureItem<UserData>(STORAGE_KEYS.USER_DATA);
};

export const removeUserData = async (): Promise<void> => {
  await removeSecureItem(STORAGE_KEYS.USER_DATA);
};
