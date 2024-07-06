import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
           const order = action.payload
              state.orders.push(order)
        },
        removeOrder: (state, action) => {
           const orderId = action.payload
              state.orders = state.orders.filter(order => order.id !== orderId)
        },
        updateOrder: (state, action) => {
           const updatedOrder = action.payload
              state.orders = state.orders.map(order => order.id === updatedOrder.id ? updatedOrder : order)
        }
    }
})
export const { addOrder, removeOrder, updateOrder } = orderSlice.actions
export default orderSlice.reducer