import { combineReducers } from "redux";
import sample from "./sample";
import event from "./event";

const reducers = combineReducers({ sample, event });

export default reducers;
