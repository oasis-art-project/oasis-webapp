import { post, get } from 'axios';
import { API_URL } from './constants';
import { wrapParams } from './helpers';

const USER_BASE_URL = `${API_URL}/user`;

export function createUser(params) {
  return post(USER_BASE_URL, wrapParams(params));
}

export function fetchAll() {
  return get(USER_BASE_URL);
}

export function getUser(id) {
  return get(`${USER_BASE_URL}/${id}`);
}
