import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './constants';

const { get } = axios;

function fetchAllArtworks() {
  return get(`${API_URL}/artwork`);
}

function useArtworks() {
  return useQuery(
      'artworks',
      async () => {
        const { data } = await fetchAllArtworks();
        return data;
      },
      { refetchOnWindowFocus: false }
    );
}

export default useArtworks;
