import * as types from './types';
import api from '../api';

// Api to get all users who are artists
export const fetchArtists = dispatch => {
  dispatch({ type: types.FETCH_ARTISTS });
  api.user
    .fetchAllArtists()
    .then(res => {
      dispatch({
        type: types.FETCH_ARTISTS_SUCCESS,
        users: res.data.users,
      });
    })
    .catch(err => {
      dispatch({ type: types.FETCH_ARTISTS_ERROR });
    });
};

// Api to get all users who are artists

export const fetchArtist = (dispatch, id) => {
  dispatch({ type: types.FETCH_ARTIST });
  api.user
    .getUser(id)
    .then(result => {
      dispatch({ type: types.FETCH_ARTIST_SUCCESS, artist: result.data.user });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_ARTIST_ERROR });
    });
};

export const setCurrentArtist = (dispatch, artist) => {
  dispatch({ type: types.SET_CURRENT_ARTIST, artist });
};
