import { createAsyncThunk } from "@reduxjs/toolkit";
import { postWithoutToken } from "../../api/fetch";
import { endPoint } from "../../utils/url";
import { customError, login } from "../slice/auth";

export const loginPost = createAsyncThunk(
  "login/loginPost",
  async (data, { dispatch }) => {
    try {
      const res = await postWithoutToken(endPoint.login, data);

      if (!res.status) {
        dispatch(customError());
      }else{
        dispatch(login(res))
      }

      return res;
    } catch (error) {
      console.log(error);
        dispatch(customError(error));
    }
  }
);
export const registerPost = createAsyncThunk(
  "login/loginPost",
  async (data, { dispatch }) => {
    try {
      const res = await postWithoutToken(endPoint.login, data);

      if (!res.status) {
        dispatch(customError());
      }

      return res;
    } catch (error) {
      console.log(error);
        dispatch(customError(error));
    }
  }
);
