import { combineReducers } from 'redux';
import sample from './sample';
import event from './event';
import auth from './auth';
import user from './user';
import place from './place';
import artist from './artist';
import host from './host';
import artwork from './artwork';

const reducers = combineReducers({ artist, host, sample, event, auth, user, place, artwork });

export default reducers;
