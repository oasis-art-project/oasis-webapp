/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './constants';

const { get } = axios;

function fetchArtist(id: string) {
  return get(`${API_URL}/artist/${id}`);
}

function fetchArtistByName(name: string) {
  return get(`${API_URL}/artist/${name}`);
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

export function useGetArtistByName(name: string) {
  return useQuery(
    `artist-name-${name}`,
    async () => {
      const { data } = await fetchArtistByName(name);
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export default useArtist;
