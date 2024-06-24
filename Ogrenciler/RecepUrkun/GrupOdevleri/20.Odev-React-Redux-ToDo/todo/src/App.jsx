import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import "./App.css";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ThemeContainer = styled.div`
  padding: 30px 0;
`;

const App = () => {
  const { tema } = useSelector((temas) => temas.theme);
  const [editingTodo, setEditingTodo] = useState(null);
  const { t } = useTranslation();

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <Router>
      <div className={`app ${tema}`}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route
            path="/todos"
            element={
              <ThemeContainer>
                <h1>{t("todos")}</h1>
                <TodoForm
                  editingTodo={editingTodo}
                  setEditingTodo={setEditingTodo}
                />
                <TodoList handleEdit={handleEdit} />
              </ThemeContainer>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
