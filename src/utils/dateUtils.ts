export const formatDate = (date: Date | string | number | null | undefined): string => {
  if (date == null) {
    return '';
  }
  return new Date(date).toLocaleDateString();
};
