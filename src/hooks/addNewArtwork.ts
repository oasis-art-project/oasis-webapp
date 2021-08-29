import axios from 'axios';
import { API_URL } from './constants';
import { wrapParamsProfilePic, _wrapParams, wrapAuth, _wrapAuth } from '../helpers';

const { post } = axios;

export const createArtwork = async (data: any) => {
  const { token, update } = data;
  // const { data: response }
  const response = await post(`${API_URL}/artwork/`, _wrapParams(update), wrapAuth(token));
  console.log("-->", response)
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