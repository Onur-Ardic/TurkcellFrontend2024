import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import "./App.css";

const App = () => {
  const { tema } = useSelector((temas) => temas.theme);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <>
              <h1>Redux Todo</h1>
		      <Theme />
              <TodoForm editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
              <TodoList handleEdit={handleEdit} />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
