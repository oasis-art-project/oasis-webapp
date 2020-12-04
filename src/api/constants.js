import { isProd } from '../helpers/index';

const connectTo = process.argv.connectTo || 'local';

const devAPI = '/api';
const prodAPI = 'https://server-oasis.herokuapp.com/api';

const devSetUp = connectTo === 'prod' ? prodAPI : devAPI;

export const API_URL = isProd ? prodAPI : devSetUp;
// export const API_URL = prodAPI;
