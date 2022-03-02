/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import axios from 'axios';
import days from 'dayjs';
import { useQuery } from 'react-query';
import { API_URL } from './constants';

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
