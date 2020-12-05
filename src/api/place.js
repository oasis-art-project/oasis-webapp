import { get } from 'axios';
import { API_URL } from './constants';

// PLACE CONSTANT
export const PLACE_BASE_URL = `${API_URL}/place`;

export function fetchAllPlaces() {
  return get(PLACE_BASE_URL);
}

export function getPlace(id) {
  return get(`${PLACE_BASE_URL}/${id}`);
}

export function getHostPlaces(hid) {
  return get(`${PLACE_BASE_URL}/host/${hid}`);
}