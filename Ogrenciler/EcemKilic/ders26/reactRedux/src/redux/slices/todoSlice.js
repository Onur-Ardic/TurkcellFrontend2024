import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: {},
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.todos = [...action.payload];
      } else {
        state.todos = [...state.todos, action.payload];
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    },
    updateFormTodo: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateFormTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
