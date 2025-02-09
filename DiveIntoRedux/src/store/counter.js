import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// Create a "slice" of our global state
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // CAN directly mutate the state now thanks to toolkit
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Methods on the actions object will create action objects for us
// "action creators" = already have a type property with a unique identifier
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;