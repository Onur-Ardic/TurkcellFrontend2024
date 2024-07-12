import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  sortBy: "default",
  filterByCategory: "",
  searchQuery: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setFilterByCategory(state, action) {
      state.filterByCategory = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    filterProducts(state) {
      let filtered = state.products;

      if (state.filterByCategory) {
        filtered = filtered.filter(
          (product) => product.category === state.filterByCategory
        );
      }

      if (state.searchQuery) {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }

      if (state.sortBy === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (state.sortBy === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
      }

      state.filteredProducts = filtered;
    },
  },
});

export const {
  setProducts,
  setSortBy,
  setFilterByCategory,
  setSearchQuery,
  filterProducts,
} = productSlice.actions;
export default productSlice.reducer;
