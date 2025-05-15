import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  role: localStorage.getItem("role") ? localStorage.getItem("role") : "admin",
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.loading = true;
      const { accessToken, content, message } = actions.payload;
      state.token = accessToken;
      state.role = content?.role;
      state.user = content;
      state.message = message;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
