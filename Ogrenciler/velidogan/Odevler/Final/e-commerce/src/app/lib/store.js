import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import cartReducer from "./cart/cartSlice";
import productsReducer from "./products/productsSlice";
import authReducer from "./auth/authSlice"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
    products: productsReducer,
    auth:authReducer
  },
});

export default store;
