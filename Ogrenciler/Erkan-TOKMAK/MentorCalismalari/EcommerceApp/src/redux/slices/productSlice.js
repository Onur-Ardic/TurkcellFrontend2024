import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice(
    {
        name: 'product',
        initialState,
        reducers: {
            addProduct: (state, action) => {
                // function
            },
            removeProduct: (state, action) => {
                // function
            },
            updateProduct: (state, action) => {
                // function
            }
        }
    }
)
export const { addProduct, removeProduct, updateProduct } = productSlice.actions
export default productSlice.reducer
