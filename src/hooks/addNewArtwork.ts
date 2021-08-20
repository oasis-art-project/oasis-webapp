import axios from 'axios';
import { API_URL } from './constants';
import { wrapParamsProfilePic, _wrapParams, wrapAuth, _wrapAuth } from '../helpers';

const { put, post } = axios;

export const updateArtwork = async (data: any) => {
  const { token, update } = data;
  const { data: response } = await put(`${API_URL}/artwork/`, _wrapParams(update), wrapAuth(token));
  return response.data;
};

export const updateArtworkPic = async (data: any) => {
  const { token, request, id } = data;
  const { data: response } = await post(
    `${API_URL}/media/${id}?resource-kind=artwork`,
    wrapParamsProfilePic(request),
    _wrapAuth(token)
  );
  return response;
};

// requests.post(server_url + '/api/media/'+ str(rid) + '?resource-kind=' + rkind, files=image_files, headers=host_header)
