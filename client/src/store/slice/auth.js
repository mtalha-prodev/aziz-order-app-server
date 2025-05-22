import { createSlice } from "@reduxjs/toolkit";
import { loginPost, registerPost } from "../action/auth";

const initialState = {
  loading: false,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  role: localStorage.getItem("role") ? localStorage.getItem("role") : "admin",
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  message: null,
  error: null,
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
     
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("role", content?.role);
      localStorage.setItem("user", JSON.stringify(res.content));
    },
    customError: (state, {payload}) => {
      state.loading = false;
      state.error = payload? payload: "your request fail";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginPost.rejected, (state) => {
      state.loading = false;
      state.error = "your request fail";
    });
    builder.addCase(loginPost.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.message = payload.message;
      
    });
    builder.addCase(registerPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerPost.rejected, (state, action) => {
      state.loading = false;
      state.error = "your request fail";
    });
    builder.addCase(registerPost.fulfilled, (state, { payload }) => {
      const { accessToken, content, message } = actions.payload;
      state.token = accessToken;
      state.role = content?.role;
      state.user = content;
      state.message = message;
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("role", content?.role);
      localStorage.setItem("user", JSON.stringify(res.content));
    });
  },
});

export const { login,customError } = authSlice.actions;

export default authSlice.reducer;
