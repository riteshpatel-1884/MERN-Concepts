import { configureStore } from "@reduxjs/toolkit"; // to create a Redux store
import CartSlice from "./CartSlice"; //This imports the CartSlice reducer which we had  created using createSlice

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;

//This store can be used at top component ie in App.jsx or in index.jsx or in main.jsx component.
//reducer: { ... }: Inside this, we define all the slices of our state.
