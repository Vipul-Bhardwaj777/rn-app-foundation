export const ROUTES = {
  AUTH_LOGIN: 'Auth/Login',
  AUTH_REGISTER: 'Auth/Register',
  AUTH_FORGOT_PASSWORD: 'Auth/ForgotPassword',

  TAB_HOME: 'Main/Home',
  TAB_EXPLORE: 'Main/Explore',
  TAB_HOSTS: 'Main/Hosts',
  TAB_WALLET: 'Main/Wallet',
  TAB_PROFILE: 'Main/Profile',
} as const;

export type RouteNames = keyof typeof ROUTES;
