import { isProd } from '../helpers/index';

const devAPI = '/api';
const prodAPI = 'https://staging-server-oasis.herokuapp.com/api';

export const API_URL = isProd ? prodAPI : devAPI;