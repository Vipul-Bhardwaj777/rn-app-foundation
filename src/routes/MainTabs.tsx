import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../features/home/screens/HomeScreen';
import { ExploreScreen } from '../features/explore/screens/ExploreScreen';
import { HostsScreen } from '../features/hosts/screens/HostsScreen';
import { WalletScreen } from '../features/wallet/screens/WalletScreen';
import { ProfileScreen } from '../features/profile/screens/ProfileScreen';
import { ROUTES } from '../constants/routes';

const Tab = createBottomTabNavigator();

export const MainTabs: React.FC = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name={ROUTES.TAB_HOME} component={HomeScreen} />
    <Tab.Screen name={ROUTES.TAB_EXPLORE} component={ExploreScreen} />
    <Tab.Screen name={ROUTES.TAB_HOSTS} component={HostsScreen} />
    <Tab.Screen name={ROUTES.TAB_WALLET} component={WalletScreen} />
    <Tab.Screen name={ROUTES.TAB_PROFILE} component={ProfileScreen} />
  </Tab.Navigator>
);
