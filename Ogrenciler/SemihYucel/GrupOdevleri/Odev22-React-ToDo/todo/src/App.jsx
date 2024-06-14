import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // React Router bileşenleri
import { useSelector } from "react-redux"; // Redux hook'u
import TodoForm from "./components/TodoForm"; // Todo form bileşeni
import TodoList from "./components/TodoList"; // Todo list bileşeni
import Login from "./components/Login"; // Login bileşeni
import Register from "./components/Register"; // Register bileşeni
import Navbar from "./components/Navbar"; // Navbar bileşeni
import Theme from "./components/Theme"; // Theme bileşeni
import "./App.css"; // Uygulama stilleri
import styled from "styled-components"; // Styled components için kütüphane

// Styled components tanımları
const ThemeContainer = styled.div`
  padding: 30px 0;
`;

const App = () => {
  const { tema } = useSelector((temas) => temas.theme); // Tema Redux store'dan alınır
  const [editingTodo, setEditingTodo] = useState(null); // Düzenlenen todo için state

  // Todo düzenleme işlemi
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
                <h1>Yapılacaklar Listesi</h1>
                <TodoForm editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
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
