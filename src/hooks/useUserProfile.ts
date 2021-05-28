import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './constants';
import { wrapParams, _wrapParams, wrapAuth } from '../helpers';

const { get, put } = axios;

function fetchUser(id: string) {
  return get(`${API_URL}/user/${id}`);
}

function useUserProfile(id: string) {
  return useQuery(
    `user-${id}`,
    async () => {
      const { data } = await fetchUser(id);
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export const updateProfile = async (data: any) => {
  const { token, update } = data;
  const { data: response } = await put(`${API_URL}/user/`, _wrapParams(update), wrapAuth(token));
  return response.data;
};

export default useUserProfile;
