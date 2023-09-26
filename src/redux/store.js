import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slice/homeSlice";
import { ecApi } from "../services/ecApi";

export const store = configureStore({
  reducer: {
    homeSlice,
    [ecApi.reducerPath]: ecApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecApi.middleware),
});
