/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { isProd } from '../helpers/index';

const devServer = 'http://127.0.0.1:5000';
const prodServer = 'https://server-oasis.herokuapp.com';

const devAPI = '/api';
const prodAPI = prodServer + '/api';

export const SERVER_URL = isProd ? prodServer : devServer;
export const API_URL = isProd ? prodAPI : devAPI;