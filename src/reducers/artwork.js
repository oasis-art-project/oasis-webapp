import * as types from '../actions/types';

const initialState = {
  all: null,
  artwork: null,
  loading: false,
};

function artworkReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTWORKS:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_ARTWORKS_SUCCESS:
      return {
        ...state,
        loading: false,
        all: action.artworks,
      };

    case types.FETCH_ARTWORK:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_ARTWORK_SUCCESS:
      return {
        ...state,
        loading: false,
        artwork: action.artwork,
      };

    default:
      return state;
  }
}

export default artworkReducer;
