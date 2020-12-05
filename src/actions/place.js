import * as types from './types';
import api from '../api';
// import history from '../helpers/history';

// Api to get all places
export const fetchPlaces = dispatch => {
    dispatch({ type: types.FETCH_PLACES });
    api.place
      .fetchAllPlaces()
      .then(res => {
        dispatch({ 
          type: types.FETCH_PLACES_SUCCESS, 
          places: res.data.places
        });
      })
      .catch(err => {
        dispatch({ type: types.FETCH_PLACES_ERROR });
      });
  };