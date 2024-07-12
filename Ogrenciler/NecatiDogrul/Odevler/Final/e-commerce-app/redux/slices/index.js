import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
});

export default rootReducer;
