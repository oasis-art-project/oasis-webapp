import * as types from './types';
import api from '../api';

// Api to get all places
export const fetchPlaces = dispatch => {
  dispatch({ type: types.FETCH_PLACES });
  api.place
    .fetchAllPlaces()
    .then(res => {
      dispatch({
        type: types.FETCH_PLACES_SUCCESS,
        places: res.data.places,
      });
    })
    .catch(err => {
      dispatch({ type: types.FETCH_PLACES_ERROR });
    });
};

// Api to get a specific place and set as current

export const fetchPlace = (dispatch, id) => {
  dispatch({ type: types.FETCH_PLACE });
  api.place
    .getPlace(id)
    .then(result => {
      dispatch({ type: types.FETCH_PLACE_SUCCESS, place: result.data.place });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_PLACE_ERROR });
    });
};

export const setCurrentPlace = (dispatch, place) => {
  dispatch({ type: types.SET_CURRENT_PLACE, place });
};
