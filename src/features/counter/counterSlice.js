import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  count: 0,
};

const handleIncrement = (state, action) => {
  state.count++;
};

const handleDecrement = (state, action) => {
  if(state.count > 0){
    state.count--;
  }
};

const handleIncrementByAmount = (state, action) => {
  state.count += action.payload;
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: handleIncrement,
    decrement: handleDecrement,
    incrementByAmount: handleIncrementByAmount,
  },  
});


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;