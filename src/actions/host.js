import * as types from './types';
import api from '../api';

// Api to get all users who are hosts
export const fetchHosts = dispatch => {
  dispatch({ type: types.FETCH_HOSTS });
  api.user
    .fetchAllHosts()
    .then(res => {
      console.log("FETCH HOSTS", res.data.users)      
      dispatch({
        type: types.FETCH_HOSTS_SUCCESS,
        users: res.data.users,
      });
    })
    .catch(err => {
      dispatch({ type: types.FETCH_HOSTS_ERROR });
    });
};

// Api to get a specific user and set as current

export const fetchHost = (dispatch, id) => {
  dispatch({ type: types.FETCH_HOST });
  api.user
    .getUser(id)
    .then(result => {
      dispatch({ type: types.FETCH_HOST_SUCCESS, host: result.data.user });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_HOST_ERROR });
    });
};

export const fetchPlacesFromHost = (dispatch, id) => {
  dispatch({ type: types.FETCH_HOST_PLACES });
  api.event
    .fetchPlacesFromHost(id)
    .then(result => {
      dispatch({ type: types.FETCH_HOST_PLACES_SUCCESS, places: result.data.places });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_HOST_PLACES_ERROR });
    });
};

export const setCurrentHost = (dispatch, host) => {
  dispatch({ type: types.SET_CURRENT_HOST, host });
};