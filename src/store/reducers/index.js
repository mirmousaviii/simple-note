import {combineReducers} from "redux";
import {coreReducer} from "./coreReducer";
import {noteReducer} from "./noteReducer";

const reducers = combineReducers({
  core: coreReducer,
  loading: coreReducer,
  note: noteReducer,
});

export default reducers;