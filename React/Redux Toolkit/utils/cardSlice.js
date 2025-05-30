import { createSlice } from "@reduxjs/toolkit";
//It imports createSlice, a helper from Redux Toolkit that makes it easier to create Redux state, actions, and reducers in one place.

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    k: 0, //k hamara initial state hai.
  },
  reducers: {
    addToCart: (state) => {
      state.k = state.k + 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
//addToCart is an action so imported it using .actions

export default cartSlice.reducer;


//Explanation: 
// we will use this cardSlice in our store.
//createSlice({...}): Creates a slice of your Redux state called cart.
//name: "cart": It is the name of the slice.
//initialState: { k: 0 }: This is our default state. Here, k starts from 0 (could represent cart count).
//reducers: Contains functions that can update the state. addToCart: A reducer (function) that increases the value of k by 1 whenever it is dispatched.
// export const { addToCart } = cartSlice.actions: We can use it in our components to dispatch (trigger) this action.
//export default cartSlice.reducer:  This exports the reducer function from the slice so it can be added to your Redux store.
