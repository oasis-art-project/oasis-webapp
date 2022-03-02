/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './constants';

const { get } = axios;

function fetchEvent(id: string) {
  return get(`${API_URL}/event/${id}`);
}

function fetchEventByAlias(alias: string) {
  return get(`${API_URL}/event/alias/${alias}`);
}

function useEvent(id: string) {
  return useQuery(
    `event-${id}`,
    async () => {
      const { data } = await fetchEvent(id);
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export function useGetEventByAlias(alias: string) {
  return useQuery(
    `event-alias-${alias}`,
    async () => {
      const { data } = await fetchEventByAlias(alias);
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default useEvent;
