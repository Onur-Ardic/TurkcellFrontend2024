import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: '',
  sortBy: '',
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    filterProducts(state, action) {
      const products = action.payload;
      let filtered = [...products];

      if (state.selectedCategory !== '') {
        filtered = filtered.filter(product => product.category === state.selectedCategory);
      }

      if (state.sortBy === 'ascending') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (state.sortBy === 'descending') {
        filtered.sort((a, b) => b.price - a.price);
      }

      state.filteredProducts = filtered;
    },
  },
});

export const { setCategory, setSortBy, filterProducts } = filterSlice.actions;
export default filterSlice.reducer;
