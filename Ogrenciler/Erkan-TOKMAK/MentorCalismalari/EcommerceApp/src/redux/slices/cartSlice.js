import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // function
        },
        removeFromCart: (state, action) => {
            // function
        },
        clearCart: (state) => {
            // function
        }
    }
})
export const { addToCart, removeFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer