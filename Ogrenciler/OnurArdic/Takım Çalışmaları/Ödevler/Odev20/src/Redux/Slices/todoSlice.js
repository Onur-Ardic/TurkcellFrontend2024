import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id: 1,
      title: 'onur',
    },
  ],

  preview: false,
  loginPreview: false,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload]
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload,
          }
        }
        return todo
      })
    },

    showPage: (state, action) => {
      state.preview = action.payload
    },

    showLogin: (state, action) => {
      state.loginPreview = action.payload
    },
  },
})

export const { addTodo, deleteTodo, updateTodo, showPage, showLogin } = todoSlice.actions

export default todoSlice.reducer
