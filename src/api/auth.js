import { post } from 'axios';
import { API_URL } from './constants';
import { wrapParams } from './helpers';
import { USER_BASE_URL } from './user';

export function login(params) {
  return post(`${API_URL}/login`, wrapParams(params));
}

export function signUp(params) {
  return post(USER_BASE_URL, wrapParams(params));
}
