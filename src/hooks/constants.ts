import { isProd } from '../helpers/index';

const devServer = 'http://127.0.0.1:5000';
const prodServer = 'https://seoul-server-oasis.herokuapp.com';

const devAPI = '/api';
const prodAPI = prodServer + '/api';

export const SERVER_URL = isProd ? prodServer : devServer;
export const API_URL = isProd ? prodAPI : devAPI;