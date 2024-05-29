import "./app.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const createToDo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  console.log(todos);
  return (
    <>
      <div className="todo-app">
        <TodoForm onCreateTodo={createToDo} />
        <TodoList />
      </div>
    </>
  );
}

export default App;
