import * as types from './types';
import api from '../api';

export const login = ({ dispatch, data }) => {
  dispatch({ type: types.AUTH_LOGIN });
  api.auth
    .login(data)
    .then(result => {
      console.log(result);
      dispatch({ type: types.AUTH_LOGIN_SUCCESS });
    })
    .catch(error => {
      dispatch({
        type: types.AUTH_LOGIN_FAIL,
        error: error.response.data.message,
      });
    });
};
