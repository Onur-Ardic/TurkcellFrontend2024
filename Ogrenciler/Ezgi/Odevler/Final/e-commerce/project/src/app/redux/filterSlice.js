import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedType: null,
  selectedColor: null,
  selectedSize: null,
  selectedCategory: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearFilters: (state) => {
      state.selectedType = null;
      state.selectedColor = null;
      state.selectedSize = null;
      state.selectedCategory = null;
    },
  },
});

export const {
  setSelectedType,
  setSelectedColor,
  setSelectedSize,
  setSelectedCategory,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
