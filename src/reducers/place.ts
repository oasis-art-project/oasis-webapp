import * as types from '../actions/types';

const initialState = {
  all: null,  
  current: null,
  loading: false,
};

function placeReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_PLACES_SUCCESS:
      return {
        ...state,
        all: action.places,
      };
      case types.SET_CURRENT_PLACE:
        return {
          ...state,
          current: action.place,
        };
      case types.FETCH_PLACE:
        return {
          ...state,
          loading: true,
        };
      case types.FETCH_PLACE_SUCCESS:
        return {
          ...state,
          loading: false,
          current: action.place,
      };
    default:
      return state;
  }
}

export default placeReducer;
