import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slice/homeSlice";

export const store = configureStore({
  reducer: { homeSlice },
});
