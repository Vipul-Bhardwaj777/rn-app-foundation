import { useMemo } from 'react';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

export const useAppTheme = () =>
  useMemo(
    () => ({
      colors,
      spacing,
      typography,
    }),
    []
  );
