import { combineReducers } from 'redux';
import sample from './sample';
import event from './event';
import auth from './auth';
import user from './user';
import place from './place';

const reducers = combineReducers({ sample, event, auth, user, place });

export default reducers;
