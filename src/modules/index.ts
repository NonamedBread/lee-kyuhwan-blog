import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import darkModeReducer from "./darkMode";

const rootReducer = combineReducers({
  darkMode: darkModeReducer.reducer,
});

// https://velog.io/@carrot/Next.js-Redux
// https://github.com/velopert/velog-client/blob/master/src/index.tsx

export default rootReducer;
