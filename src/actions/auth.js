import jwt_decode from 'jwt-decode';
import * as types from './types';
import api from '../api';
import { setActiveUser, removeActiveUser } from './user';

export const login = ({ dispatch, data }) => {
  dispatch({ type: types.AUTH_LOGIN });
  api.auth
    .login(data)
    .then(result => {
      // decoded token to read identity
      const decodedToken = jwt_decode(result.data.token);

      dispatch({
        type: types.AUTH_LOGIN_SUCCESS,
        token: result.data.token,
        expires: decodedToken.exp,
      });

      setActiveUser({ dispatch, id: decodedToken.identity });
    })
    .catch(error => {
      dispatch({
        type: types.AUTH_LOGIN_FAIL,
        error: error.response.data.message,
      });
    });
};

export const logOut = ({ dispatch }) => {
  dispatch({ type: types.AUTH_LOGOUT });
  removeActiveUser({ dispatch });
};

export const clearError = ({ dispatch }) => {
  dispatch({ type: types.AUTH_CLEAR_ERROR });
};
