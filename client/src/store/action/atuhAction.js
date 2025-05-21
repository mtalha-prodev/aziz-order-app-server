import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginPost = createAsyncThunk(
  "login/loginPost",
  async (data, { dispatch }) => {
    try {
      const response = await axios.post("http://localhost:3001/login", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
