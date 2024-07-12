import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "@/redux/slices/darkSlice";
import cartReducer from "@/redux/slices/cartSlice";
import commentSlice from "@/redux/slices/commentSlice";
export function makeStore() {
  return configureStore({
    reducer: {
      theme: darkModeReducer,
      cart: cartReducer,
      commentSlice: commentSlice,
    },
  });
}

export const store = makeStore();
