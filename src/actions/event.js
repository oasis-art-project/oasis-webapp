import * as types from './types';
import api from '../api';

function yyyymmdd() {
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  return '' + y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
}

// Api to get multiple events
export const fetchEvents = dispatch => {
  dispatch({ type: types.FETCH_EVENTS });
  api.event
    .fetchCurrent(yyyymmdd())
    .then(res => {
      const current = res.data.current_events;
      const upcoming = res.data.upcoming_events;
      const allEvents = current + upcoming;
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

// Api to get all events at a specific place - require :pid
export const fetchPlaceEvents = (dispatch, pid) => {
  dispatch({ type: types.FETCH_EVENTS });
  api.event
    .fetchPlaceEvents(pid)
    .then(res => {
      dispatch({
        type: types.FETCH_EVENTS_SUCCESS,
        all: res.data.events,
        current: null,
        upcoming: null,
      });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_EVENTS_ERROR });
    });  
}

// Api to get one event - require :id
export const fetchEvent = (dispatch, id) => {
  dispatch({ type: types.FETCH_EVENT });
  api.event
    .fetchEvent(id)
    .then(res => {
      dispatch({ 
        type: types.FETCH_EVENT_SUCCESS, 
        event: res.data.event 
      });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_EVENT_ERROR });
    });
};
