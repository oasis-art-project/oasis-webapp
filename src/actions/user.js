import * as types from './types';
import api from '../api';
import history from '../helpers/history';

export const setUserGeoLocation = (dispatch, location) => {
  dispatch({ type: types.SET_USER_GEOLOCATION, payload: location });
};

export const removeActiveUser = ({ dispatch }) => {
  dispatch({ type: types.REMOVE_ACTIVE_USER });
};

export const fetchUsers = ({ dispatch }) => {
  dispatch({ type: types.FETCH_USERS });
  api.user
    .fetchAll()
    .then(res => {
      dispatch({ type: types.FETCH_USERS_SUCCESS, payload: res.data.users });
    })
    .catch(err => {
      dispatch({ type: types.FETCH_USERS_ERROR });
    });
};

export const setActiveUser = ({ dispatch, id }) => {
  dispatch({ type: types.FETCH_USER });
  api.user
    .getUser(id)
    .then(result => {
      dispatch({ type: types.FETCH_USER_SUCCESS });
      dispatch({ type: types.SET_ACTIVE_USER, payload: result.data.user });
      history.push('/');
    })
    .catch(error => {
      dispatch({ type: types.AUTH_LOGIN_FAIL });
    });
};
