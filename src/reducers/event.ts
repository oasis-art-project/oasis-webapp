import * as types from "../actions/types";

const initialState = {
  all: null,
  current: null,
  upcoming: null,
};

function eventReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        all: action.all,
        current: action.current,
        upcoming: action.upcoming,
      };
    case types.FETCH_EVENT_SUCCESS:
      return {
        ...state,
        all: [action.event],
      };
    default:
      return state;
  }
}

export default eventReducer;
