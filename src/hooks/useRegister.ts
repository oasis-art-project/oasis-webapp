/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

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
