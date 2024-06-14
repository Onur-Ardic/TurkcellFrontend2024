import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

//slicedan gelen reducerları buraya tanıtmalısın..
const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export default store 