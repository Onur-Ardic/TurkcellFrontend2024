import "./app.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import { readData, createData, updateData, deleteData } from "./request";

export function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await readData();
        setTodos(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const createTodo = async (newTodo) => {
    try {
      const todoTime = {
        ...newTodo,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const createdTodo = await createData(todoTime);
      setTodos([...todos, createdTodo]);
    } catch (error) {
      console.error("Error creating todo: ", error);
    }
  };

  const updateTodo = async (updatedTodo) => {
    try {
      const todoWithTime = {
        ...updatedTodo,
        updatedAt: new Date(),
      };
      const result = await updateData(updatedTodo.id, todoWithTime);
      const updatedTodos = todos.map((todo) =>
        todo.id !== updatedTodo.id ? todo : result
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo: ", error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      await deleteData(todoId);
      setTodos(todos.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.error("Error deleting todo: ", error);
    }
  };

  return (
    <div className="App">
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList
        todos={todos}
        onRemoveTodo={deleteTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}
