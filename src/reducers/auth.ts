import * as types from '../actions/types';

const initialState = {};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.AUTH_LOGIN_FAIL:
      return {
        ...state,
        loginError: action.error,
      };
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        expires: action.expires,
      };
    case types.AUTH_CLEAR_ERROR:
      return {
        ...state,
        loginError: null,
      };
    case types.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        expires: null,
      };
    default:
      return state;
  }
}

export default authReducer;
