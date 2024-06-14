import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: {},
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
      const tempTodo = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      state.todos[tempTodo] = { ...action.payload };
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todoSlice.actions;

export default todoSlice.reducer;
