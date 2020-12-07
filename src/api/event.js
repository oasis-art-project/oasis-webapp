import { get } from 'axios';
import { API_URL } from './constants';

export function fetchAll() {
  return get(`${API_URL}/event`);
}

export function fetchCurrent(date) {
  return get(`${API_URL}/event/${date}`);
}

export function fetchPlaceEvents(pid) {
  return get(`${API_URL}/event/place/${pid}`);
}

export function fetchEvent(id) {
  return get(`${API_URL}/event/${id}`);
}
