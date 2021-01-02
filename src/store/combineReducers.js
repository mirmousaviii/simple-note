import {combineReducers} from "redux";
import {coreReducer} from "./core/coreReducer";
import {noteReducer} from "./note/noteReducer";

const reducers = combineReducers({
  core: coreReducer,
  loading: coreReducer,
  note: noteReducer,
});

export default reducers;