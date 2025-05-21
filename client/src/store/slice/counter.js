import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  product:[]
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
        state.value -= 1;
    },
    addProduct:(state,actions)=>{
        state.product.push(actions.payload)
    }
  },
});

export const { increment, decrement,addProduct } = counterSlice.actions;

export default counterSlice.reducer;
