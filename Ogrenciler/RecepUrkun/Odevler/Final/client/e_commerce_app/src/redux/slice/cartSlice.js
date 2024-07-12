import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            console.log("cartItems CartSlice: ", state.cartItems);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
