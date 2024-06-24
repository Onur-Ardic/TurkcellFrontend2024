import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlicer"
import themeReducer from "../slices/themeSlice";
import userReducer from "../slices/userSlice";

const store = configureStore({
    reducer: {
        todo: todoReducer,
        theme: themeReducer,
        user: userReducer
    }
})

export default store;