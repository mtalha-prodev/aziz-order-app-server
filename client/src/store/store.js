import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter";
import authSlice from "./slice/auth";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});
