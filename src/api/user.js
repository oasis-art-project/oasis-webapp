import { get } from 'axios';
import { API_URL } from './constants';

// USER CONSTANT
export const USER_BASE_URL = `${API_URL}/user`;

export function fetchAll() {
  return get(USER_BASE_URL);
}

export function getUser(id) {
  return get(`${USER_BASE_URL}/${id}`);
}
