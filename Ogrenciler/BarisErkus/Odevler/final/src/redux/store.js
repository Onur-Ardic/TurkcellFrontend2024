import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slices/globalSlice";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    global: globalSlice,
    user: userSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
