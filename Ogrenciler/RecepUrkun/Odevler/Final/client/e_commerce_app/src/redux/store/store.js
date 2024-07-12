import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import cartReducer from "../slice/cartSlice";

const store = configureStore({
    reducer: {
        user: authReducer,
        cart: cartReducer,
    },
});

export default store;
