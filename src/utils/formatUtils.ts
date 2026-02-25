export const formatCurrency = (value: unknown): string => {
  if (typeof value !== 'number') {
    return '';
  }
  return value.toFixed(2);
};
