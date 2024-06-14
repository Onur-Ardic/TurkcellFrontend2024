import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const todosCollection = collection(db, "todos");
  const querySnapshot = await getDocs(todosCollection);
  const todos = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();

    todos.push({
      id: doc.id,
      ...data,
      createdAt: data.createdAt.toMillis(),
    });
  });
  return todos;
});

export const addTodo = createAsyncThunk("todos/addTodo", async ({ todo }) => {
  const todosCollection = collection(db, "todos");
  const docRef = await addDoc(todosCollection, todo);
  return { id: docRef.id, ...todo, createdAt: Date.now() };
});

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId) => {
    const todoDocRef = doc(db, "todos", todoId);
    await deleteDoc(todoDocRef);
    return todoId;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ todoId, todo }) => {
    const todoDocRef = doc(db, "todos", todoId);
    await updateDoc(todoDocRef, todo);
    return { id: todoId, ...todo };
  }
);

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        state.status = "succeeded";
      })
      .addCase(deleteTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
        state.status = "succeeded";
      })
      .addCase(updateTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addTodoLocal, deleteTodoLocal, updateTodoLocal } =
  todoSlice.actions;

export default todoSlice.reducer;
