import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    product: {},
    products: []
}

export const fetchProduct = createAsyncThunk("product/fetchProducts", async (id) => {
    const response = await fetch(`http://localhost:4000/products/${id}`);
    const data = await response.json();
    return data;
})

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    return data;
})

export const {reducer, actions} = createSlice({
    name:"products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload;
        })
    }
})