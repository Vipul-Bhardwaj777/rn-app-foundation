import { Dimensions, Platform, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const sliderWidth = width - 20;
export const itemWidth = width - 20;

const isIPhoneX = (): boolean =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 44,
  android: 44,
  default: 0,
});

export const StatusBarHeightSecond = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight ?? 0,
  default: 0,
});

export const scale = (size: number): number =>
  (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;
export const moderateScaleVertical = (size: number, factor = 0.5): number =>
  size + (verticalScale(size) - size) * factor;
export const textScale = (percent: number): number => RFValue(percent, height);

export const useBottomInset = (minPadding = 16): number => {
  const insets = useSafeAreaInsets();
  const screenH = Dimensions.get('screen').height;
  const windowH = Dimensions.get('window').height;
  const navBarFallback =
    Platform.OS === 'android' ? Math.max(0, screenH - windowH) : 0;
  return Math.max(insets.bottom, navBarFallback, minPadding);
};

export { width, height };
