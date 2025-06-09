import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import Skip from "./reducers/Skip";

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
    snapSaveState: any;
  }
}

const rootReducer = combineReducers({
  skip: Skip,
});

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
  preloadedState,
});

window.snapSaveState = () => ({
  __PRELOADED_STATE__: store.getState(),
});

sagaMiddleware.run(rootSaga);

export type TRootState = ReturnType<typeof store.getState>;
