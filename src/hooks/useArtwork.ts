import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './cosntants';

const { get } = axios;

function fetchArtwork(id: string) {
  return get(`${API_URL}/artwork/${id}`);
}

function useArtwork(id: string) {
  return useQuery(
    `artwork-${id}`,
    async () => {
      const { data } = await fetchArtwork(id);
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default useArtwork;
