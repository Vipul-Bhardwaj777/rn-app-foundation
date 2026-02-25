/**
 * Returns a color string with the given opacity.
 */
export const getColorCodeWithOpactiyNumber = (
  hex: string,
  opacity: number
): string => {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  const alpha = Math.min(100, Math.max(0, opacity)) / 100;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
