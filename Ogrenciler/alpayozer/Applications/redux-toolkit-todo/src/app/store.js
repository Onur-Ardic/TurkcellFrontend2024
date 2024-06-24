import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
  },
});

export default store;
