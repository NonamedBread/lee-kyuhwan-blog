import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import darkModeReducer from "./darkMode";

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        darkMode: darkModeReducer.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
