import { get } from 'axios';
import { API_URL } from './constants';

export function fetchAll() {
  return get(`${API_URL}/artwork`);
}

export function fetchArtistArtworks(aid) {
  return get(`${API_URL}/artwork/artist/${aid}`);
}

export function fetchArtwork(id) {
  return get(`${API_URL}/artwork/${id}`);
}
