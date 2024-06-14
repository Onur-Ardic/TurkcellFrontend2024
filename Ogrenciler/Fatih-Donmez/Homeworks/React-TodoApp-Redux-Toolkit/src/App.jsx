import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo as reduxAddTodo,
  deleteTodo as reduxDeleteTodo,
  updateTodo as reduxUpdateTodo,
} from "./redux/slices/todoSlice";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Redux Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
