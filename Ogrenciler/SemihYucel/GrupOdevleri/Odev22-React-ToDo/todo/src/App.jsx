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
import styled from "styled-components";

const AppContainer = styled.div`
padding: 30px 0;
`

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
        <Route path="/" element={<Register />} />
        <Route
          path="/todos"
          element={
            <AppContainer className={`app ${tema} `}>
            <Theme />
              <h1>Redux Todo</h1>
              <TodoForm editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
              <TodoList handleEdit={handleEdit} />
            </AppContainer>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
