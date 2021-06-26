import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from './constants';
import { wrapParamsProfilePic, _wrapParams, wrapAuth, _wrapAuth } from '../helpers';

const { get, put, post } = axios;

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

export const updateProfilePic = async (data: any) => {
  const { token, request, id } = data;
  const { data: response } = await post(
    `${API_URL}/media/${id}?resource-kind=user`,
    wrapParamsProfilePic(request),
    _wrapAuth(token)
  );
  return response;
};

// requests.post(server_url + '/api/media/'+ str(rid) + '?resource-kind=' + rkind, files=image_files, headers=host_header)

export default useUserProfile;
