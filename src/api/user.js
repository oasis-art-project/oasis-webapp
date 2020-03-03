import { post, get } from 'axios';
import { stringify } from 'qs';
import { API_URL } from './constants';

const USER_BASE_URL = `${API_URL}/user`;

const wrapParams = params => {
  return stringify({ request: JSON.stringify(params) });
};

export function createUser(params) {
  return post(USER_BASE_URL, wrapParams(params));
}

export function fetchAll() {
  return get(USER_BASE_URL);
}

export function getUser(id) {
  return get(`${USER_BASE_URL}/${id}`);
}
