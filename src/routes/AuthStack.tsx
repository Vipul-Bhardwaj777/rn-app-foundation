import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../features/auth/screens/LoginScreen';
import { RegisterScreen } from '../features/auth/screens/RegisterScreen';
import { ForgotPasswordScreen } from '../features/auth/screens/ForgotPasswordScreen';
import { ROUTES } from '../constants/routes';

const Stack = createNativeStackNavigator();

export const AuthStack: React.FC = () => (
  <Stack.Navigator
    initialRouteName={ROUTES.AUTH_LOGIN}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={ROUTES.AUTH_LOGIN} component={LoginScreen} />
    <Stack.Screen name={ROUTES.AUTH_REGISTER} component={RegisterScreen} />
    <Stack.Screen
      name={ROUTES.AUTH_FORGOT_PASSWORD}
      component={ForgotPasswordScreen}
    />
  </Stack.Navigator>
);
