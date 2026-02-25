/**
 * Design system color palette – whiteui.store
 * 15% variants use 8-digit hex (alpha channel).
 */

const ALPHA_15 = '26'; // 15% opacity in hex

export const colors = {
  primary: '#F3BA2F',
  primary15: `#4D7CFE${ALPHA_15}`,

  grayMuted: '#98A9BC',
  grayText: '#778CA2',
  border: '#E8ECEF',
  grayLight: '#F2F4F6',
  grayLightest: '#F8FAFB',

  text: '#252631',
  textPrimary: '#252631',
  textPrimary15: `#252631${ALPHA_15}`,

  error: '#FE4D97',
  error15: `#FE4D97${ALPHA_15}`,
  success: '#6DD230',
  success15: `#6DD230${ALPHA_15}`,
  info: '#2CE5F6',
  info15: `#2CE5F6${ALPHA_15}`,
  warning: '#FFAB2B',
  warning15: `#FFAB2B${ALPHA_15}`,

  shadowGray: '#5B5B5B',

  white: '#FFFFFF',
  black: '#000000',
  background: '#FFFFFF',

  // Aliases for commonStyles / legacy usage
  textGrey: '#778CA2',
  themeColor: '#F3BA2F',
  textBlue: '#4D7CFE',
  lightGreyBgColor: '#F2F4F6',
} as const;

export type Colors = typeof colors;
