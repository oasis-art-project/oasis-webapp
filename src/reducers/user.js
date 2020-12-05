import * as types from '../actions/types';

const initialState = {
  all: null,
  artists: null,
  active: null,
  location: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTISTS_SUCCESS:
      console.log("FETCH_ARTISTS_SUCCESS")
      console.log(action.users)
      return {
        ...state,
        artists: action.users,
      };
    case types.FETCH_USERS_SUCCESS:
      console.log("FETCH_USERS_SUCCESS")
      console.log(action.users)
      return {
        ...state,
        all: action.users,
      };  
    case types.FETCH_USER_SUCCESS:
       console.log("FETCH_USER_SUCCESS")
       console.log(action.user)
       return {
        ...state,
        all: [action.user],
      };
    case types.SET_ACTIVE_USER:
      return {
        ...state,
        active: action.payload,
      };
    case types.REMOVE_ACTIVE_USER:
      return {
        ...state,
        active: null,
      };
    case types.SET_USER_GEOLOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
