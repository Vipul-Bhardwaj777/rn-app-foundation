import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import type { UserData } from '../../features/auth/types/authTypes';
import { loginSuccess } from '../../features/auth/store/authSlice';
import { getUserData } from '../../services/storage/secureStorage';
import { colors } from '../../theme/colors';

export interface AppBootstrapProps {
  children: React.ReactNode;
}

/**
 * Rehydrates auth from secure storage before rendering children.
 * Prevents flash of auth screen when user is already logged in.
 */
export const AppBootstrap: React.FC<AppBootstrapProps> = ({ children }) => {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const rehydrate = async () => {
      try {
        const userData = (await getUserData()) as UserData | null;
        if (userData?.access_token) {
          dispatch(loginSuccess(userData));
        }
      } catch (e) {
        if (__DEV__) {
          console.warn('AppBootstrap: rehydrate failed', e);
        }
      } finally {
        setIsReady(true);
      }
    };

    rehydrate();
  }, [dispatch]);

  if (!isReady) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
});
