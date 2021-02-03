import days from 'dayjs';

export const isProd = process.env.NODE_ENV !== 'development';
export const IMGS_URL = isProd ? 'https://oasis-storage.s3.amazonaws.com' : '/dev-images';

// Dates helpers
export const datesParser = (start: string, end: string): string => {
  const startDate = days(start).format('MMMM D');
  const endDate = days(end).format('MMMM D YYYY');
  return `${startDate} - ${endDate}`;
};