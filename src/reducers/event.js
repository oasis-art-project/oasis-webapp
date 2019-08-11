import * as types from '../actions/types';

const initialState = {
  all: null
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        all: [...action.payload]
      };
    default:
      return state;
  }
}

export default eventReducer;
