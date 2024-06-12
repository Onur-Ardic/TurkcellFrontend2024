import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, title } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.title = title;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
