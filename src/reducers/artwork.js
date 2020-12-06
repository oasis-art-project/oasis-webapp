import * as types from '../actions/types';

const initialState = {
  all: null,
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

    default:
      return state;
  }
}

export default artworkReducer;
