import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            // function
        },
        removeOrder: (state, action) => {
            // function
        },
        updateOrder: (state, action) => {
            // function
        }
    }
})
export const { addOrder, removeOrder, updateOrder } = orderSlice.actions
export default orderSlice.reducer