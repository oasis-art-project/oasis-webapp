import * as types from './types';
import api from '../api';

// fake logic of separate current and upcomind events
const selectSomeFirst = arr => [...arr.slice(0, 10)];
const selectSomeLast = arr => [...arr.slice(10, 22)];

// Api to get multiple events
export const fetchEvents = dispatch => {
  dispatch({ type: types.FETCH_EVENTS });
  api.event
    .fetchAll()
    .then(res => {
      const allEvents = res.data.events;
      const current = selectSomeFirst(allEvents);
      const upcoming = selectSomeLast(allEvents);
      dispatch({
        type: types.FETCH_EVENTS_SUCCESS,
        all: allEvents,
        current,
        upcoming,
      });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_EVENTS_ERROR });
    });
};

// Api to get one event - require :id
export const fetchEvent = (dispatch, id) => {
  dispatch({ type: types.FETCH_EVENT });
  api.event
    .fetchEvent(id)
    .then(res => {
      dispatch({ type: types.FETCH_EVENT_SUCCESS, event: res.data.event });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_EVENT_ERROR });
    });
};
