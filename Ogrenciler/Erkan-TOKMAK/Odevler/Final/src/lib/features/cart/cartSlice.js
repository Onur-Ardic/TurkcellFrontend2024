import { getPromoCodes, updateUserToDB } from "@/api/server";
import { createSelector, createSlice } from "@reduxjs/toolkit";

const getUserIdFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const user = window.localStorage.getItem("user");
        if (user) {
            const userid = JSON.parse(user);
            return userid.uid
        } else {
            return null
        }
    }
    return null;
};

const getItemLocalStorage = () => {
    if (typeof window !== "undefined") {
        const item = window.localStorage.getItem("cartItem");
        return item ? JSON.parse(item) : [];
    }
    return false;
};

const saveToLocalStorage = (cartItems) => {
    if (typeof window !== "undefined") {
        window.localStorage.setItem("cartItem", JSON.stringify(cartItems));
    }
};

const updateCartInDB = async (userId, cartItems) => {
    if (userId) {
        await updateUserToDB(userId, cartItems);
    }
};


const initialState = {
    cartItem: getItemLocalStorage(),
    userId: getUserIdFromLocalStorage(),
    promoCodes: []
}

const cartSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const existingItem = state.cartItem.find(item =>
                item.pid === action.payload.pid &&
                item.color === action.payload.color &&
                item.size === action.payload.size
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.cartItem.push(action.payload);
            }

            saveToLocalStorage(state.cartItem);
            updateCartInDB(state.userId, state.cartItem);
        },
        updateQuantity: (state, action) => {
            const { pid, color, size, quantity } = action.payload;
            const existingItem = state.cartItem.find(item =>
                item.pid === pid &&
                item.color === color &&
                item.size === size
            );

            if (existingItem) {
                existingItem.quantity = quantity;
            }

            saveToLocalStorage(state.cartItem);
            updateCartInDB(state.userId, state.cartItem);
        },
        deleteItemFromCart: (state, action) => {
            console.log(action.payload)
            const { pid, color, size } = action.payload;
            state.cartItem = state.cartItem.filter((item) =>
                !(item.pid === pid && item.color === color && item.size === size)
            );
            saveToLocalStorage(state.cartItem);
            updateCartInDB(state.userId, state.cartItem);
        },
        clearCart: (state) => {
            state.cartItem = [];
            saveToLocalStorage(state.cartItem);
        },
        addCartFromDB: (state, action) => {
            state.cartItem = action.payload;
            saveToLocalStorage(state.cartItem);
        },
        setPromoCodes: (state, action) => {
            state.promoCodes = action.payload;
        }
    }
});

export const { addItemToCart, updateQuantity, deleteItemFromCart, clearCart, addCartFromDB, setPromoCodes } = cartSlice.actions;
export default cartSlice.reducer;