import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import darkModeReducer from './darkMode';
import postsReducer from './posts';
import layoutReducer from './layout';

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        ui: combineReducers({
          darkMode: darkModeReducer.reducer,
          layout: layoutReducer.reducer,
        }),
        data: postsReducer.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
