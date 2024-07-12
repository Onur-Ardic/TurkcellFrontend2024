// redux/slices/themeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light', // varsayılan olarak light theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
