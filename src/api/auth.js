import { post } from 'axios';
import { stringify } from 'qs';
import { API_URL } from './constants';

const wrapParams = params => {
  return stringify({ request: JSON.stringify(params) });
};

export function login(params) {
  return post(`${API_URL}/login`, wrapParams(params));
}
