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
               const product = action.payload
                state.products.push(product)
            },
            removeProduct: (state, action) => {
              const productId = action.payload
                state.products = state.products.filter(product => product.id !== productId)
            },
            updateProduct: (state, action) => {
                const updatedProduct = action.payload
                state.products = state.products.map(product => product.id === updatedProduct.id ? updatedProduct : product)
            }
        }
    }
)
export const { addProduct, removeProduct, updateProduct } = productSlice.actions
export default productSlice.reducer
