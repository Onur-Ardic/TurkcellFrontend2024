import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'Book One', category: 'Fiction', date: '2022-01-01' },
    { id: 2, title: 'Book Two', category: 'Non-Fiction', date: '2021-06-15' },
  ],
  searchQuery: '',
  filterCategory: '',
  sortOption: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
});

export const { setSearchQuery, setFilterCategory, setSortOption } = booksSlice.actions;
export default booksSlice.reducer;
