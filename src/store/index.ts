import { configureStore } from "@reduxjs/toolkit";
import { personalApi } from "./api/personal";
import authReducer from "./reducers/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [personalApi.reducerPath]: personalApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(personalApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
