import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [editingTodo, setEditingTodo] = useState(null);

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <>
      <h1>Redux Todo</h1>
      <TodoForm editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
      <TodoList handleEdit={handleEdit} />
    </>
  );
};

export default App;
