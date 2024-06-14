import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import Theme from "./components/Theme";
import { useSelector } from "react-redux";

const App = () => {
  const { tema } = useSelector((temas) => temas.theme);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <div className={`app ${tema}`}>
      <h1>Redux Todo</h1>
      <Theme />
      <TodoForm editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
      <TodoList handleEdit={handleEdit} />
    </div>
  );
};

export default App;
