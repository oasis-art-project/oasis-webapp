import * as types from "./types";
import api from "../api";

export const createUser = ({ dispatch, data }) => {
  dispatch({ type: types.CREATE_USER });
  api.user
    .createUser(data)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      dispatch({ type: types.CREATE_USER_ERROR });
    });
};

export const fetchUsers = ({ dispatch }) => {
  dispatch({ type: types.FETCH_USERS });
  api.user
    .fetchAll()
    .then(res => {
      dispatch({ type: types.FETCH_USERS_SUCCESS, payload: res.data.users });
    })
    .catch(err => {
      dispatch({ type: types.FETCH_USERS_ERROR });
    });
};
