export const fontFamily = {
  regular: 'SFPRODISPLAY_REGULAR',
  bold: 'SFPRODISPLAY_BOLD',
  medium: 'SFPRODISPLAY_MEDIUM',
  semiBold: 'SFPRODISPLAY_SEMIBOLD_ITALIC',
} as const;

export type FontFamily = typeof fontFamily;
