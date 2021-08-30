import axios from 'axios';
import { API_URL } from './constants';
import { _wrapParams, wrapAuth } from '../helpers';

const { put } = axios;

export const updateEvent = async (data: any) => {
    const { token, update } = data;
    const { data: response } = await put(`${API_URL}/event/`, _wrapParams(update), wrapAuth(token));
    return response.data;
  };

export default updateEvent;