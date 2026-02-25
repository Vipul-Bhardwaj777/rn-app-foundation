import { Platform, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';

import { getColorCodeWithOpactiyNumber } from '../utils/helperFunctions';
import { colors } from './colors';
import { fontFamily } from './fontFamily';
import { moderateScaleVertical, textScale } from './responsiveSize';

export const ACTIVE_OPACITY = 0.7;

export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};

export const shadowStyles: ViewStyle = {
  elevation: 3,
  shadowColor:
    Platform.OS === 'ios' ? 'rgba(0,0,0,0.20)' : 'rgba(0,0,0,0.80)',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.54,
  shadowRadius: 4.65,
};

export const shadowStyles2: ViewStyle = {
  ...Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0,0.15)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    android: {
      elevation: 4,
      shadowColor: 'rgba(0,0,0,0.3)',
    },
  }),
};

export const colorsArray = [
  'rgba(240, 240, 240, 1)',
  'rgba(250, 250, 250, 0.8)',
  'rgba(255, 255, 255, 1)',
] as const;

export interface CommonStylesParams {
  buttonTextColor?: string;
}

export const createCommonStyles = (
  _params?: CommonStylesParams
): ReturnType<typeof StyleSheet.create> => {
  return StyleSheet.create({
    flexRowAlignCenter: { flexDirection: 'row', alignItems: 'center' },
    flexRowCenterSb: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    flexRowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loader: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mediumFont12: {
      fontSize: textScale(12),
      color: colors.textGrey,
      fontFamily: fontFamily.medium,
      opacity: 0.7,
    },
    mediumFont14: {
      fontSize: textScale(14),
      color: colors.textGrey,
      fontFamily: fontFamily.medium,
      opacity: 0.7,
    },
    mediumFont14Normal: {
      fontSize: textScale(14),
      color: colors.textGrey,
      fontFamily: fontFamily.medium,
      opacity: 1,
    },
    mediumFont16: {
      fontSize: textScale(14),
      color: colors.textGrey,
      fontFamily: fontFamily.medium,
    },
    futuraBtHeavyFont16: {
      fontSize: textScale(16),
      color: colors.black,
      fontFamily: fontFamily.bold,
    },
    futuraBtHeavyFont14: {
      fontSize: textScale(14),
      color: colors.black,
      fontFamily: fontFamily.bold,
    },
    futuraHeavyBt: {
      fontSize: textScale(16),
      color: colors.black,
      fontFamily: fontFamily.bold,
    },
    buttonRect: {
      height: moderateScaleVertical(50),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 13,
    },
    buttonRectTransparent: {
      height: moderateScaleVertical(46),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.themeColor,
      borderWidth: 1,
      borderColor: getColorCodeWithOpactiyNumber('1E2428', 20),
      borderRadius: 13,
    },
    buttonRectCommonButton: {
      height: moderateScaleVertical(46),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(67,162,231,0.3)',
      borderWidth: 0,
      borderColor: getColorCodeWithOpactiyNumber('1E2428', 20),
      borderRadius: 13,
    },
    shadowStyle: {
      backgroundColor: colors.white,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    buttonTextWhite: {
      fontFamily: fontFamily.semiBold,
      color: colors.white,
      textAlign: 'center',
      fontSize: textScale(15),
    },
    buttonTextBlue: {
      fontFamily: fontFamily.bold,
      textTransform: 'uppercase',
      color: colors.textBlue,
      textAlign: 'center',
    },
    buttonTextBlack: {
      fontFamily: fontFamily.medium,
      textTransform: 'uppercase',
      color: colors.textGrey,
      textAlign: 'center',
    },
    imgOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    headerTopLine: {
      height: 1,
      backgroundColor: colors.lightGreyBgColor,
      opacity: 0.26,
    },
    shadowStyle2: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.54,
      shadowRadius: 4.65,
      elevation: 10,
    },
    shadowStyle3Origional: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.54,
      shadowRadius: 4.65,
      elevation: 7,
    },
    shadowStyle3: {
      elevation: 3,
      shadowColor:
        Platform.OS === 'ios' ? 'rgba(0,0,0,0.20)' : 'rgba(0,0,0,0.80)',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.54,
      shadowRadius: 4.65,
    },
  });
};

