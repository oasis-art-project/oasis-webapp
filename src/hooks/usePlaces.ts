import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './cosntants';

const { get } = axios;

function fetchAllPlaces() {
  return get(`${API_URL}/place`);
}

function usePlaces() {
  return useQuery(
    'places',
    async () => {
      const { data } = await fetchAllPlaces();
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default usePlaces;
