import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './cosntants';

const { get } = axios;

function fetchEvent(id: string) {
  return get(`${API_URL}/event/${id}`);
}

function useEvent(id: string) {
  return useQuery(
    `event-${id}`,
    async () => {
      const { data } = await fetchEvent(id);
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default useEvent;
