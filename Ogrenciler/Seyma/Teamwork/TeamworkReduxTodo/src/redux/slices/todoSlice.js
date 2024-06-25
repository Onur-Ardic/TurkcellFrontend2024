import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) {
      return [
        { id: 1, title: "Todo 1" },
        { id: 2, title: "Todo 2" },
        { id: 3, title: "Todo 3" },
      ];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [
      { id: 1, title: "Todo 1" },
      { id: 2, title: "Todo 2" },
      { id: 3, title: "Todo 3" },
    ];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todos", serializedState);
  } catch (err) {
  }
};

const initialState = {
  todos: loadState(),
  todo: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      saveState(state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveState(state.todos);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
      saveState(state.todos);
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } = todoSlice.actions;

export default todoSlice.reducer;
