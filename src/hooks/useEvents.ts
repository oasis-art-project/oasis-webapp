import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './cosntants';

// export function fetchCurrent(date) {
//   return get(`${API_URL}/event/${date}`);
// }

// export function fetchPlaceEvents(pid) {
//   return get(`${API_URL}/event/place/${pid}`);
// }

// export function fetchEvent(id) {
//   return get(`${API_URL}/event/${id}`);
// }

// export function fetchEventsByArtist(id) {
//   return get(`${API_URL}/event/artist/${id}`);
// }

// export function fetchEventswithArtwork(aid) {
//   return get(`${API_URL}/event/artwork/${aid}`);
// }

function fetchAllEvents() {
  return axios.get(`${API_URL}/event`);
}

function useEvents() {
  return useQuery(
    'events',
    async () => {
      const { data } = await fetchAllEvents();
      return data;
    },
    { refetchOnWindowFocus: true,}
  );
}

export default useEvents;
