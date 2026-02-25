import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import { loginSuccess } from '../store/authSlice';

export type AuthFormMode = 'login' | 'register';

export interface AuthFormProps {
  mode: AuthFormMode;
}

export const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const dispatch = useDispatch();
  const isLogin = mode === 'login';

  const handleSubmit = (): void => {
    dispatch(
      loginSuccess({
        id: '1',
        email: 'user@example.com',
        access_token: 'mock-token',
      })
    );
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input placeholder="Password" secureTextEntry />
      {!isLogin && (
        <Input placeholder="Confirm Password" secureTextEntry />
      )}
      <Button label={isLogin ? 'Login' : 'Register'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
