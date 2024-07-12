import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import filterReducer from "./filterSlice";
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});

export default store;
