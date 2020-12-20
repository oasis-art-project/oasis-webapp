import * as types from '../actions/types';

const initialState = {
  current: null,
  loading: false,
  events: null,
};

function artistReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.SET_CURRENT_ARTIST:
      return {
        ...state,
        current: action.artist,
      };
    case types.FETCH_ARTIST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        current: action.artist,
      };

      case types.FETCH_ARTIST_EVENTS_SUCCESS:
        return {
          ...state,
          events: action.events,
        };
    default:
      return state;
  }
}

export default artistReducer;
