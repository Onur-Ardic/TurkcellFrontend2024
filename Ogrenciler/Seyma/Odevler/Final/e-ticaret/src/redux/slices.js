import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Your initial state here
};

const yourSlice = createSlice({
  name: 'yourSlice',
  initialState,
  reducers: {
    // Your reducers here
  },
});

export const { yourActions } = yourSlice.actions;
export default yourSlice.reducer;
