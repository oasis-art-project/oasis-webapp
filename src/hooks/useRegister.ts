import axios from 'axios';
import { API_URL } from './constants';

const { post } = axios;

const registerInfo = async (data: any) => {
  const { data: response } = await post(`${API_URL}/register`, data);
  return response.data;
};

export default registerInfo;