import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './cosntants';

const { get } = axios;

function fetchAllEvents() {
  return get(`${API_URL}/event`);
}

function useEvents() {
  return useQuery(
    'events',
    async () => {
      const { data } = await fetchAllEvents();
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default useEvents;
