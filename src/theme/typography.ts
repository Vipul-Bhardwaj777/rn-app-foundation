import type { TextStyle } from 'react-native';

import { fontFamily } from './fontFamily';
import { textScale } from './responsiveSize';
import { colors } from './colors';

type FontWeight = keyof typeof fontFamily;

const weightToFont: Record<FontWeight, string> = {
  regular: fontFamily.regular,
  medium: fontFamily.medium,
  semiBold: fontFamily.semiBold,
  bold: fontFamily.bold,
};

const makeTextStyle = (
  size: number,
  weight: FontWeight = 'regular'
): TextStyle => ({
  fontFamily: weightToFont[weight] ?? fontFamily.regular,
  fontSize: textScale(size),
  color: colors.black,
});

export const typography = {
  h32Bold: makeTextStyle(32, 'bold'),
  h32SemiBold: makeTextStyle(32, 'semiBold'),
  h32Medium: makeTextStyle(32, 'medium'),
  h32Regular: makeTextStyle(32, 'regular'),

  h30Bold: makeTextStyle(30, 'bold'),
  h30SemiBold: makeTextStyle(30, 'semiBold'),
  h30Medium: makeTextStyle(30, 'medium'),
  h30Regular: makeTextStyle(30, 'regular'),

  h24Bold: makeTextStyle(24, 'bold'),
  h24SemiBold: makeTextStyle(24, 'semiBold'),
  h24Medium: makeTextStyle(24, 'medium'),
  h24Regular: makeTextStyle(24, 'regular'),

  h20Bold: makeTextStyle(20, 'bold'),
  h20SemiBold: makeTextStyle(20, 'semiBold'),
  h20Medium: makeTextStyle(20, 'medium'),
  h20Regular: makeTextStyle(20, 'regular'),

  body18Bold: makeTextStyle(18, 'bold'),
  body18SemiBold: makeTextStyle(18, 'semiBold'),
  body18Medium: makeTextStyle(18, 'medium'),
  body18Regular: makeTextStyle(18, 'regular'),

  body16Bold: makeTextStyle(16, 'bold'),
  body16SemiBold: makeTextStyle(16, 'semiBold'),
  body16Medium: makeTextStyle(16, 'medium'),
  body16Regular: makeTextStyle(16, 'regular'),

  body14Bold: makeTextStyle(14, 'bold'),
  body14SemiBold: makeTextStyle(14, 'semiBold'),
  body14Medium: makeTextStyle(14, 'medium'),
  body14Regular: makeTextStyle(14, 'regular'),

  body12Bold: makeTextStyle(12, 'bold'),
  body12SemiBold: makeTextStyle(12, 'semiBold'),
  body12Medium: makeTextStyle(12, 'medium'),
  body12Regular: makeTextStyle(12, 'regular'),
};
