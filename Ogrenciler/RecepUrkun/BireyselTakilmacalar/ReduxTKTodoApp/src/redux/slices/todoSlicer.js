import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todolar: [
        { id: 1, title: "Todo 1" },
        { id: 2, title: "Todo 2" }
    ]
}

export const todoSlicer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todolar.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todolar = state.todolar.filter((t) => t.id != action.payload)
        },
        updateTodo: (state, action) => {
            state.todolar = state.todolar.map((t) => t.id == action.payload.id ? action.payload : t);
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlicer.actions
export default todoSlicer.reducer