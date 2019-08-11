import * as types from "./types";
import api from "../api";

export const fetchEvents = dispatch => {
  dispatch({ type: types.FETCH_EVENTS });
  api.event
    .fetchAll()
    .then(res => {
      dispatch({ type: types.FETCH_EVENTS_SUCCESS, payload: res.data.events });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_EVENTS_ERROR });
    });
};
