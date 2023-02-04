import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./api/personal";
import authReducer from "./reducers/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
