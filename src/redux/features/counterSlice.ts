import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
}

const initialState = {
  value: 0,
} as CounterState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

export const { reset, increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;