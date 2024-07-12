import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "@/firebaseconfig";
import products from "@/db/product.json";

export const saveCartItems = createAsyncThunk(
  "cart/saveCartItems",
  async (items, { getState }) => {
    const user = auth.currentUser;
    if (user) {
      const userCartIndex = products.boxes.findIndex(
        (cart) => cart.user_id === user.uid
      );
      const itemsToSave = items.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      }));

      if (userCartIndex > -1) {
        products.boxes[userCartIndex].items = itemsToSave;
      } else {
        products.boxes.push({ user_id: user.uid, items: itemsToSave });
      }
      return products;
    }
  }
);

const initialState = {
  items: [],
  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(saveCartItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  addItemToCart,
  setCartItems,
  removeItemFromCart,
  updateItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
