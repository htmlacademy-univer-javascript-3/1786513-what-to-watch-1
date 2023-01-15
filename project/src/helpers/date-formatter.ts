export const toSimpleISOString = (date: string): string =>
  new Date(date).toISOString().split('T')[0];

export const toAmericanLocaleString = (date: string): string => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;
  return new Date(date).toLocaleDateString('en-US', options);
};
