import { configureStore } from "@reduxjs/toolkit";
import todo from '../slices/todoSlice';

const store = configureStore({
    reducer: {
        todo,
    },
});

export default store;