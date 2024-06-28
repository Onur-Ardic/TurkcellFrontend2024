import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fillPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});
export const { fillPosts } = postSlice.actions;

export default postSlice.reducer;
