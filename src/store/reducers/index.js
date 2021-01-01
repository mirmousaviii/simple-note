import {combineReducers} from "redux";
import {notificationReducer} from "./notificationReducer";
import {loadingReducer} from "./loadingReducer";
import {noteReducer} from "./noteReducer";

const reducers = combineReducers({
  notification: notificationReducer,
  loading: loadingReducer,
  note: noteReducer,
});

export default reducers;