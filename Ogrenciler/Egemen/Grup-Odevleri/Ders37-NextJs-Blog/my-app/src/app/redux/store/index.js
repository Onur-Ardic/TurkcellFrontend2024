import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slices/blogSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
