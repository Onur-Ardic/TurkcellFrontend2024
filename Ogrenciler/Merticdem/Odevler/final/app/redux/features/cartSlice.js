"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
    cart: [],
}

export const addToCart = createAsyncThunk("addToCart", async ({ product, quantity }) => {
    const results = []

    for (let i = 0; i < quantity; i++) {
        const response = await fetch("http://localhost:3001/cart", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            },
            cache: "no-store"
        })

        const data = await response.json()
        results.push(data)
    }
    toast.success(`Product is added!`)

    return results
})

export const deleteFromCart = createAsyncThunk("deleteFromCart", async (id) => {

    const response = await fetch(`http://localhost:3001/cart/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        cache: "no-store"
    })

    const data = await response.json()
    toast.success("Product is removed!")
    return data
})

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        builder.addCase(deleteFromCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
    }
})

export default cartSlice.reducer