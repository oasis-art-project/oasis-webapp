import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './cosntants';

const { get } = axios;

function fetchAllArtists() {
  return get(`${API_URL}/user/role/3`);
}

function useArtists() {
  return useQuery(
    'artists',
    async () => {
      const { data } = await fetchAllArtists();
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default useArtists;
