import { combineReducers } from "redux";
import darkModeReducer from "./darkMode";

const rootReducer = combineReducers({
  darkMode: darkModeReducer.reducer,
});

export default rootReducer;
