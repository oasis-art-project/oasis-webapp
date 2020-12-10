import * as types from '../actions/types';

const initialState = {
  current: null,
  loading: false,
  places: null,
};

function hostReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_HOST:
      return {
        ...state,
        current: action.host,
      };
    case types.FETCH_HOST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_HOST_SUCCESS:
      return {
        ...state,
        loading: false,
        current: action.host,
      };

      case types.FETCH_HOST_PLACES_SUCCESS:
        return {
          ...state,
          places: action.places,
        };
    default:
      return state;
  }
}

export default hostReducer;
