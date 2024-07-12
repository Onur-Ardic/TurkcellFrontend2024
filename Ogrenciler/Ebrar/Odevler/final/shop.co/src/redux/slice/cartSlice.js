import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.color === item.color &&
          cartItem.size === item.size
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }

    
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
        const { id, color, size } = action.payload;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== id || item.color !== color || item.size !== size
        );

    
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    initializeCartFromStorage: (state) => {
      
      const storedCartItems = sessionStorage.getItem("cartItems");
      if (storedCartItems) {
        state.cartItems = JSON.parse(storedCartItems);
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, initializeCartFromStorage } =
  cartSlice.actions;
export default cartSlice.reducer;
