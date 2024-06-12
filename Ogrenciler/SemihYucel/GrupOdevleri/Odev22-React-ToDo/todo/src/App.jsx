import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./redux/slices/todoSlice";
import { useState } from "react";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editingTodo, setEditingTodo] = useState(null);
  const [todoTitle, setTodoTitle] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, title: todoTitle }));
      setEditingTodo(null);
    } else {
      dispatch(addTodo({ id: self.crypto.randomUUID(), title: todoTitle }));
    }
    setTodoTitle("");
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setTodoTitle(todo.title);
  };

  return (
    <>
      <h1>Redux Todo</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          name="todo"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">{editingTodo ? "Update" : "Add"}</button>
      </form>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.id}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              <button onClick={() => handleEdit(todo)}>Edit</button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
