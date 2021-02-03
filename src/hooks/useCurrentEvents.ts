import axios from 'axios';
import days from 'dayjs';
import { useQuery } from 'react-query';
import { API_URL } from './cosntants';

const { get } = axios;

function fetchCurrentEvents() {
  const today = days().format('YYYY-MM-DD')
  return get(`${API_URL}/event/${today}`);
}

function useCurrentEvents() {
  return useQuery(
    'events',
    async () => {
      const { data } = await fetchCurrentEvents();
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default useCurrentEvents;
