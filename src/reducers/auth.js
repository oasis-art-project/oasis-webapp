import * as types from '../actions/types';

const initialState = {};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_LOGIN_FAIL:
      return {
        ...state,
        loginError: action.error
      };
    default:
      return state;
  }
}

export default authReducer;
