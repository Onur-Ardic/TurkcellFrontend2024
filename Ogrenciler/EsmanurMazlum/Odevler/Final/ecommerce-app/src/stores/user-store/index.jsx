import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const {reducer, actions} = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
