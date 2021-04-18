import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './constants';

const { get } = axios;

function fetchHost(id: string) {
  return get(`${API_URL}/host/${id}`);
}

function useHost(id: string) {
  return useQuery(
    `user-${id}`,
    async () => {
      const { data } = await fetchHost(id);
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default useHost;
