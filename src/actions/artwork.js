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
        console.log(res.data.artworks);
        dispatch({ 
            type: types.FETCH_ARTWORKS_SUCCESS, 
            artworks: res.data.artworks
        });
      })
      .catch(err => {
        dispatch({ type: types.FETCH_ARTWORKS_ERROR });
      });
  };
