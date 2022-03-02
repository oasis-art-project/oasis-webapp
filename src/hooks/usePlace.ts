/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './constants';

const { get } = axios;

function fetchPlace(id: string) {
  return get(`${API_URL}/place/${id}`);
}

function usePlace(id: string) {
  return useQuery(
    `place-${id}`,
    async () => {
      const { data } = await fetchPlace(id);
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default usePlace;
