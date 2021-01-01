import {combineReducers} from "redux";
import {notificationReducer} from "./notificationReducer";
import {loadingReducer} from "./loadingReducer";

const reducers = combineReducers({
  notification: notificationReducer,
  loading: loadingReducer
});

export default reducers;