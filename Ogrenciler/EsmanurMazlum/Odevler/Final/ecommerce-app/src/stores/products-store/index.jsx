import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  products: [],
  filters: {
    category: null,
    priceRange: [50, 200],
    colors: [],
    sizes: [],
    sort: "Most Popular",
  },
  minPrice: 0,
  maxPrice: 500,
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const response = await fetch(`http://localhost:4000/products/${id}`);
    const data = await response.json();
    return data;
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.filters.priceRange = action.payload;
    },
    setColors: (state, action) => {
      state.filters.colors = action.payload;
    },
    setSizes: (state, action) => {
      state.filters.sizes = action.payload;
    },
    setSort: (state, action) => {
      state.filters.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const { setCategory, setPriceRange, setColors, setSizes, setSort } = productsSlice.actions;

export default productsSlice.reducer;
