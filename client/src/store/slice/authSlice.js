
import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    value:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:()=>{},
        decrement:()=>{}
    }

})

export const  {increment,decrement} = counterSlice.actions

export default counterSlice.reducer