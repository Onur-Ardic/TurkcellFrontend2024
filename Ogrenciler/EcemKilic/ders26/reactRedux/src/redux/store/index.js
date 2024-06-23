import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
import authReducer from "../slices/authSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer,
  },
});

export default store;
