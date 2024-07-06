import { configureStore } from '@reduxjs/toolkit';
import yourSliceReducer from './slices/yourSlice';

export const store = configureStore({
  reducer: {
    yourSlice: yourSliceReducer,
  },
});
