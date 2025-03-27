import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count1: 10,
    count2: -10,
  },
  reducers: {
    increment1: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count1 += 1;
    },
    decrement1: (state) => {
      state.count1 -= 1;
    },
    incrementByAmount1: (state, action) => {
      state.count1 += action.payload;
    },
    resetCount1: (state) => {
      state.count1 = 0;
    },
    increment2: (state) => {
      state.count2 += 1;
    },
    decrement2: (state) => {
      state.count2 -= 1;
    },
    incrementByAmount2: (state, action) => {
      state.count2 += action.payload;
    },
    resetCount2: (state) => {
      state.count2 = 0;
    },
  },
});

export const {
  increment1,
  decrement1,
  incrementByAmount1,
  resetCount1,
  increment2,
  decrement2,
  incrementByAmount2,
  resetCount2,
} = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync1 = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount1(amount));
  }, 1000);
};
export const incrementAsync2 = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount2(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount1 = (state) => state.counter.count1;
export const selectCount2 = (state) => state.counter.count2;

export default counterSlice.reducer;
