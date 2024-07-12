import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "@/redux/slices/darkSlice";
import cartReducer from "@/redux/slices/cartSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      theme: darkModeReducer,
      cart: cartReducer,
    },
  });
}

export const store = makeStore();
