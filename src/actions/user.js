import * as types from './types';
import api from '../api';
import history from '../helpers/history';

export const createUser = ({ dispatch, data }) => {
  dispatch({ type: types.CREATE_USER });
  api.user
    .createUser(data)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      dispatch({ type: types.CREATE_USER_ERROR });
    });
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
      dispatch({ type: types.CREATE_USER_ERROR });
    });
};
