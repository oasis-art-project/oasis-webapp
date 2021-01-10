import { isProd } from '../helpers/index';

const devAPI = '/api';
const prodAPI = 'https://http://staging-server-oasis.herokuapp.com/api';

export const API_URL = isProd ? prodAPI : devAPI;
// export const API_URL = prodAPI;
