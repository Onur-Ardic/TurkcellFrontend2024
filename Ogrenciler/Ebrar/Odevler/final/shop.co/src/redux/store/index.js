import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { initializeCartFromStorage } from "../slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(initializeCartFromStorage());

export default store;
