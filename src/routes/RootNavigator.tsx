import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import type { RootState } from '../store';
import { AuthStack } from './AuthStack';
import { MainTabs } from './MainTabs';
import linking from './linking';

const RootNavigatorContent: React.FC = () => {
  const userData = useSelector((state: RootState) => state?.auth?.userData);
  const isAuthenticated = !!userData?.access_token;

  return isAuthenticated ? <MainTabs /> : <AuthStack />;
};

export const RootNavigator: React.FC = () => (
  <NavigationContainer linking={linking}>
    <RootNavigatorContent />
  </NavigationContainer>
);
