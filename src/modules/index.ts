import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import darkModeReducer from "./darkMode";

const rootReducer = combineReducers({
  darkMode: darkModeReducer.reducer,
});

// https://velog.io/@carrot/Next.js-Redux

export default rootReducer;
