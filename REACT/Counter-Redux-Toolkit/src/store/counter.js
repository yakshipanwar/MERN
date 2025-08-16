import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterVal: 0},
  reducers:{
    increment: (state) =>{
      state.counterVal++;
    },
    decrement: (state) =>{
      state.counterVal--;
    },
    addition: (state, action) =>{
      state.counterVal += Number(action.payload);
    },
    subraction: (state, action) =>{
      state.counterVal -= Number(action.payload);
    },
  }
})

export const counterAction = counterSlice.actions;

export default counterSlice;