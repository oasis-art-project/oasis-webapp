import * as types from '../actions/types';

const initialState = {
  active: null
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ACTIVE_USER:
      return {
        ...state,
        active: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;
