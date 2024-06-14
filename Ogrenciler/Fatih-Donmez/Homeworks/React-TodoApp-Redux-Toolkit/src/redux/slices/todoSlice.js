import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    const itemsFromLocalStorage = localStorage.getItem("todos");
    if (itemsFromLocalStorage === null) {
      return [];
    }
    return JSON.parse(itemsFromLocalStorage);
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return [];
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const itemsFromLocalStorage = JSON.stringify(state);
    localStorage.setItem("todos", itemsFromLocalStorage);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};

const initialState = {
  todos: loadStateFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      saveStateToLocalStorage(state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveStateToLocalStorage(state.todos);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
      saveStateToLocalStorage(state.todos);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
