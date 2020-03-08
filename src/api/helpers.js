import { stringify } from 'qs';

export const wrapParams = params => {
  return stringify({ request: JSON.stringify(params) });
};