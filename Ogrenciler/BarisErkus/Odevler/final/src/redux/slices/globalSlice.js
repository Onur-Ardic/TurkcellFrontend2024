import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHeaderVisible:
    typeof window !== "undefined" && !localStorage.getItem("user")
      ? true
      : false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    hideHeader: (state) => {
      state.isHeaderVisible = false;
    },
    openHeader: (state) => {
      state.isHeaderVisible = true;
    },
  },
});

export const { hideHeader, openHeader } = globalSlice.actions;

export default globalSlice.reducer;
