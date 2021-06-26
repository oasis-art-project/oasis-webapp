import days from 'dayjs';
import { stringify } from 'qs';

export const isProd = process.env.NODE_ENV !== 'development';
export const IMGS_URL = isProd ? 'https://oasis-storage.s3.amazonaws.com' : '/dev-images';

// Dates helpers
export const datesParser = (start: string, end: string): string => {
  const startDate = days(start).format('MMMM D');
  const endDate = days(end).format('MMMM D YYYY');
  return `${startDate} - ${endDate}`;
};

export const timeComparison = (time1: string, time2: string): Boolean => {
  const t1 = days(time1);
  const t2 = days(time2);
  return t1.isBefore(t2);  
}

export const eventStarted = (start: string): Boolean => {
  const startDate = days(start);
  var now = days()
  return startDate.isBefore(now);
};


export const wrapParams = (params: any) => {
  return stringify({ request: JSON.stringify(params) });
};