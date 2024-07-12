// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import categoriesReducer from './slices/categoriesSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    theme: themeReducer,
    // diğer reducer'ları buraya ekleyin
  },
});
