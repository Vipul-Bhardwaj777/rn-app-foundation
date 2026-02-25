import type { Middleware } from '@reduxjs/toolkit';
import { loginSuccess, logout } from '../features/auth/store/authSlice';
import { removeUserData, saveUserData } from '../services/storage/secureStorage';

import type { AppDispatch, RootState } from './index';

/**
 * Persists auth to secure storage on loginSuccess and clears on logout.
 */
export const authPersistenceMiddleware: Middleware<
  object,
  RootState,
  AppDispatch
> = (store) => (next) => async (action) => {
  const result = next(action);

  if (action.type === loginSuccess.type) {
    try {
      await saveUserData(action.payload);
    } catch (e) {
      if (__DEV__) {
        console.warn('authPersistence: saveUserData failed', e);
      }
    }
  } else if (action.type === logout.type) {
    try {
      await removeUserData();
    } catch (e) {
      if (__DEV__) {
        console.warn('authPersistence: removeUserData failed', e);
      }
    }
  }

  return result;
};
