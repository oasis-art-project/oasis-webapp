import * as types from '../actions/types';

const initialState = {
  all: null,
  current: null,
  loading: false,
  events: false,
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
        current: action.artwork,
      };

    case types.FETCH_ARTWORK_EVENTS_SUCCESS:
      console.log("COPYING TO EVENTS", action.events);
      return {
        ...state,
        events: action.events,
      };

    default:
      return state;
  }
}

export default artworkReducer;
