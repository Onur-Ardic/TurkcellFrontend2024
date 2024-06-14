import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
import themeReducer from "../slices/themeSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
});

export default store;
