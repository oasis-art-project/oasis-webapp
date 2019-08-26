import { combineReducers } from 'redux';
import sample from './sample';
import event from './event';
import auth from './auth';

const reducers = combineReducers({ sample, event, auth });

export default reducers;
