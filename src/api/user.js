import { get } from 'axios';
import { API_URL } from './constants';

// USER CONSTANT
export const USER_BASE_URL = `${API_URL}/user`;

export function fetchAllUsers() {
  return get(USER_BASE_URL);
}

export function fetchAllArtists() {
  return get(`${USER_BASE_URL}/role/3`);
}

export function getUser(id) {
  return get(`${USER_BASE_URL}/${id}`);
}
