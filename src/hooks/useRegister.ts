import axios from 'axios';
import { wrapParams } from '../helpers';

import { API_URL } from './constants';

const { post } = axios;

export const registerInfoQuery = async (data: any) => {
  const { data: response } = await post(
    `${API_URL}/register`,
    wrapParams(data)
  );
  return response.data;
};
