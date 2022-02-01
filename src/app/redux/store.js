import compoundReducer from "./reducers";
import { persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: compoundReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: !(process.env.NODE_ENV === "production"),
  // enhancers: composeWithDevTools(applyMiddleware(thunk)),
});

export const persistor = persistStore(store);
