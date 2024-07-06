import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload
            const productInCart = state.cart.find(item => item.id === product.id)
            if(productInCart) {
                productInCart.quantity++
            } else {
                state.cart.push({...product, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload
            const productInCart = state.cart.find(item => item.id === productId)
            if(productInCart.quantity > 1) {
                productInCart.quantity--
            } else {
                state.cart = state.cart.filter(item => item.id !== productId)
            }
        },
        clearCart: (state) => {
            state.cart = []
        }
    }
})
export const { addToCart, removeFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer