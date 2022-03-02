/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import days from 'dayjs';
import { stringify } from 'qs';

export const isProd = process.env.NODE_ENV !== 'development';
export const IMGS_URL = isProd ? 'https://oasis-storage.s3.amazonaws.com' : '/dev-images';

// Dates helpers
export const datesParser = (start: string, end: string): string => {
  const t1 = days(start);
  const t2 = days(end);  
  const startDate = t1.format('MMMM D');
  const endDate = t2.format('MMMM D YYYY');
  var diff = t2.diff(t1, 'day')
  if (diff === 0) {
    return `${endDate}`;
  } else {
    return `${startDate} - ${endDate}`;
  }
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