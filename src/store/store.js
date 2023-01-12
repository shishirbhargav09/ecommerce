import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./productsSlice";

import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";

import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
    cart: cartReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});
export const persistor = persistStore(store);
export default store;
