// redux/slices/productsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  products: [],
  currentProduct: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setCurrentProduct, setLoading, setError } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get('/products');
    dispatch(setProducts(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getProductBySlug = (slug) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get(`/products?slug=${slug}`);
    if (response.data.length > 0) {
      dispatch(setCurrentProduct(response.data[0]));
    } else {
      dispatch(setError('Product not found'));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default productsSlice.reducer;
