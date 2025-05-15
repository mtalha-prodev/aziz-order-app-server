import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});
