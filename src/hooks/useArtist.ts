import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './cosntants';

const { get } = axios;

function fetchArtist(id: string) {
  return get(`${API_URL}/artist/${id}`);
}

function useArtist(id: string) {
  return useQuery(
    `user-${id}`,
    async () => {
      const { data } = await fetchArtist(id);
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default useArtist;
