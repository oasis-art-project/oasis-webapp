import { combineReducers } from 'redux';
import sample from './sample';
import event from './event';
import auth from './auth';
import user from './user';

const reducers = combineReducers({ sample, event, auth, user });

export default reducers;
