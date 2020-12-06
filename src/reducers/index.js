import { combineReducers } from 'redux';
import sample from './sample';
import event from './event';
import auth from './auth';
import user from './user';
import place from './place';
import artist from './artist';
import artwork from './artwork';

const reducers = combineReducers({ artist, sample, event, auth, user, place, artwork });

export default reducers;
