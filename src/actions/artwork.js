import * as types from './types';
import api from '../api';

// Api to get all artworks
export const fetchAll = dispatch => {
    dispatch({ type: types.FETCH_ARTWORKS });
    api.artwork
      .fetchAll()
      .then(res => {
        dispatch({
          type: types.FETCH_ARTWORKS_SUCCESS,
          all: res.data.artworks,
        });
      })
      .catch(err => {
        dispatch({ type: types.FETCH_ARTWORKS_ERROR });
      });
  };
  
  // Api to get all artworks for a given artist
  
  export const fetchArtistArtworks = (dispatch, aid) => {
    dispatch({ type: types.FETCH_ARTWORKS });
    api.artwork
      .fetchArtistArtworks(aid)
      .then(res => {
        dispatch({ 
            type: types.FETCH_ARTWORKS_SUCCESS, 
            artworks: res.data.artworks
        });
      })
      .catch(err => {
        dispatch({ type: types.FETCH_ARTWORKS_ERROR });
      });
  };

  // Api to get one artwork based on its id
export const fetchArtwork = (dispatch, id) => {
  dispatch({ type: types.FETCH_ARTWORK });
  api.artwork
    .fetchArtwork(id)
    .then(res => {
      dispatch({
        type: types.FETCH_ARTWORK_SUCCESS,
        artwork: res.data.artwork,
      });
    })
    .catch(err => {
      dispatch({ type: types.FETCH_ARTWORK_ERROR });
    });
};

export const fetchEventsWithArtwork = (dispatch, id) => {
  dispatch({ type: types.FETCH_ARTWORK_EVENTS });
  api.event
    .fetchEventswithArtwork(id)
    .then(result => {
      dispatch({ type: types.FETCH_ARTWORK_EVENTS_SUCCESS, events: result.data.events });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_ARTWORK_EVENTS_ERROR });
    });
};
