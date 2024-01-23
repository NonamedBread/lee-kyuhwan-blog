import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import rootReducer from "./index";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
  });

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
