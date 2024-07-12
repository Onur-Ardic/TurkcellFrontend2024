import { updateDbCart } from "@/server/cart";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart:
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToLocalCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (index === -1) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart[index].count += action.payload.count;
      }

      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state.cart));

      const user =
        typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("user"));
      updateDbCart(user.uid, state.cart);
    },
    deleteProductToLocalCart: (state, action) => {
      const count = state.cart.find((item) => item.id === action.payload).count;
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state.cart));

      const user =
        typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("user"));
      updateDbCart(user.uid, state.cart);
    },
    increaseProductCount: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      state.cart[index].count -= 1;
      if (state.cart[index].count === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }

      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state.cart));

      const user =
        typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("user"));
      updateDbCart(user.uid);
    },
    decreaseProductCount: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      state.cart[index].count += 1;

      if (state.cart[index].count === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }

      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state.cart));

      const user =
        typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("user"));
      updateDbCart(user.uid);
    },
    clearCart: (state) => {
      state.cart = [];
      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state.cart));

      const user =
        typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("user"));
      updateDbCart(user.uid);
    },
  },
});

export const {
  addProductToLocalCart,
  deleteProductToLocalCart,
  increaseProductCount,
  decreaseProductCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
