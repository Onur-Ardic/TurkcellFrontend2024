import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.product.push(action.payload)
        }
    }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;