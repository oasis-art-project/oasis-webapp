import { post } from 'axios';
import { API_URL } from './constants';
import { wrapParams } from './helpers';

export function login(params) {
  return post(`${API_URL}/login`, wrapParams(params));
}
