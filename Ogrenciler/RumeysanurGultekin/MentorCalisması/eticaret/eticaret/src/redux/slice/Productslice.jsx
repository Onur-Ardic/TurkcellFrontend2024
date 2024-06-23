// reducers/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const readProducts = createAsyncThunk(
  'product/readProducts',
  async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching product data:', error);
    }
  }
);

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(readProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(readProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(readProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;

    