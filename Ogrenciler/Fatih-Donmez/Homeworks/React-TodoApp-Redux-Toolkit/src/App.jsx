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
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleDelete = (id) => {
    dispatch(reduxDeleteTodo(id));
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const id = new Date().getTime();
      dispatch(
        reduxAddTodo({
          id,
          title: newTodo,
        })
      );
      setNewTodo("");
    }
  };

  const handleEdit = (todo) => {
    setEditMode(todo.id);
    setEditTitle(todo.title);
  };

  const handleUpdateTodo = (id) => {
    if (editTitle.trim()) {
      dispatch(
        reduxUpdateTodo({
          id,
          title: editTitle,
        })
      );
      setEditMode(null);
      setEditTitle("");
    }
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Redux Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
