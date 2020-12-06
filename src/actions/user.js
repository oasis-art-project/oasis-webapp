import * as types from './types';
import api from '../api';
import history from '../helpers/history';

export const setUserGeoLocation = (dispatch, location) => {
  dispatch({ type: types.SET_USER_GEOLOCATION, payload: location });
};

export const removeActiveUser = ({ dispatch }) => {
  dispatch({ type: types.REMOVE_ACTIVE_USER });
};

// Api to get all users
export const fetchUsers = dispatch => {
  dispatch({ type: types.FETCH_USERS });
  api.user
    .fetchAllUsers()
    .then(res => {
      dispatch({
        type: types.FETCH_USERS_SUCCESS,
        users: res.data.users,
      });
    })
    .catch(err => {
      dispatch({ type: types.FETCH_USERS_ERROR });
    });
};

// Api to get one user - require :id
export const fetchUser = (dispatch, id) => {
  dispatch({ type: types.FETCH_USER });
  api.user
    .getUser(id)
    .then(result => {
      console.log(result.data.user);
      dispatch({ type: types.FETCH_USER_SUCCESS, user: result.data.user });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_USER_ERROR });
    });
};

// Api to set one user active - require :id
export const setActiveUser = (dispatch, id) => {
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
