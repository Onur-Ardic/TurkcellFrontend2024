import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "@/firebaseconfig";
import products from "@/db/product.json";

export const saveComment = createAsyncThunk(
  "comments/saveComment",
  async (items, { getState }) => {
    const user = auth.currentUser;
    if (user) {
      const userIndex = products.comments.findIndex(
        (comment) => comment.user_id === user.uid
      );

      const itemsToSave = items.map((item) => ({
        product_id: item.product_id,
        comment: item.comment,
        rating: item.rating,
      }));

      if (userIndex > -1) {
        products.comments[userIndex].items = itemsToSave;
      } else {
        products.comments.push({ user_id: user.uid, items: itemsToSave });
      }

      return products.comments;
    }
  }
);

const initialState = {
  comments: [],
  status: "idle",
  error: null,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const existingComment = state.comments.find(
        (comment) => comment.id === action.payload.id
      );
      if (existingComment) {
        existingComment.quantity += action.payload.quantity;
      } else {
        state.comments.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(saveComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
