import * as types from '../actions/types';

const initialState = {
  all: null,
};

function placeReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PLACES_SUCCESS:
      return {
        ...state,
        all: action.places,
      };
    default:
      return state;
  }
}

export default placeReducer;
