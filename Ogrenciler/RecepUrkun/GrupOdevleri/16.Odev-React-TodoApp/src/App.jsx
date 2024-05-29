import React, { useState, useEffect } from "react";
import {
  getTodosFromDb,
  addTodoToDb,
  deleteTodoFromDb,
  updateTodoFromDb,
} from "./components/Api";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import styles from "./css/App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todos = await getTodosFromDb();
    setTodos(todos);
  };

  const addTodo = async () => {
    if (newTodo === "") {
      alert("Todo içeriği boş olamaz!");
      return;
    }

    const todo = {
      id: crypto.randomUUID(),
      title: newTodo,
      completed: false,
      created_at: new Date().toLocaleString(),
      updated_at: "",
    };

    await addTodoToDb(todo);
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const deleteTodo = async (id) => {
    await deleteTodoFromDb(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = async (id, updatedFields) => {
    const todo = todos.find((todo) => todo.id === id);
    const updatedTodo = {
      ...todo,
      ...updatedFields,
      updated_at: new Date().toLocaleString(),
    };
    await updateTodoFromDb(id, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div className={styles.allCenter}>
      <h1 className={styles.textHeader}>Todo App</h1>
      <TodoForm addTodo={addTodo} setNewTodo={setNewTodo} newTodo={newTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
