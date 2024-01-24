import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import rootReducer from "./index";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// createWrapper 함수를 사용하여 wrapper를 생성합니다.
const wrapper = createWrapper(makeStore, { debug: true });

export { wrapper };
