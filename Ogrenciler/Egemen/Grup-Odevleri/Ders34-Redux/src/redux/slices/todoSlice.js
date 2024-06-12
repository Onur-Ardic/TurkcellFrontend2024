import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    // { id: 1, title: "Title 1" },
    // { id: 2, title: "Title 2" },
  ],
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
      console.log(action.payload);

      const tempTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );

      state.todos = [
        ...tempTodos,
        { id: crypto.randomUUID(), title: action.payload.title },
      ];
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todoSlice.actions;

export default todoSlice.reducer;
