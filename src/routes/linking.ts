import type { LinkingOptions } from '@react-navigation/native';

const linking = {
  prefixes: [],
  config: {
    screens: {
      Auth: {
        screens: {
          Login: 'login',
          Register: 'register',
          ForgotPassword: 'forgot-password',
        },
      },
      Main: {
        screens: {
          Home: 'home',
          Explore: 'explore',
          Hosts: 'hosts',
          Wallet: 'wallet',
          Profile: 'profile',
        },
      },
    },
  },
} as LinkingOptions<Record<string, object | undefined>>;

export default linking;
