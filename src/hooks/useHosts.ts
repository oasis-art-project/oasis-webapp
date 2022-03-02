/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './constants';

const { get } = axios;

function fetchHosts() {
  return get(`${API_URL}/host`);
}

function useHosts() {
  return useQuery(
    'hosts',
    async () => {
      const { data } = await fetchHosts();
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default useHosts;
