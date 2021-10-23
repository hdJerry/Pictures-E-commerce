

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import rootReducer from "./RootReducer";
const initialState = {};
const middlewares = [thunk];
// let devtools = x => x;
// if (
//   process.env.NODE_ENV !== "production" &&
//   process.browser &&
//   window.__REDUX_DEVTOOLS_EXTENSION__
// ) {
//   devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
// }
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cartDropDown']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);