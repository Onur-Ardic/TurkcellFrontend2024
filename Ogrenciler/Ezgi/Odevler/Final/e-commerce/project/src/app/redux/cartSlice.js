import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
          localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem('cartItems');
        }
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
