import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, updateTodo } from "./redux/slices/todoSlice"; // updateToDo yerine updateTodo

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editingTodo, setEditingTodo] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleUpdateTodo = (todo) => {
    dispatch(updateTodo(todo)); // updateToDo yerine updateTodo
    setEditingTodo(null);
    setNewTitle("");
  };

  return (
    <>
      <h1>Redux Todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const todo = e.target.todo.value;
          handleAddTodo({ id: self.crypto.randomUUID(), title: todo });
        }}
      >
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodo === todo.id ? (
              <>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <button
                  onClick={() =>
                    handleUpdateTodo({ id: todo.id, title: newTitle })
                  }
                >
                  Save
                </button>
                <button onClick={() => setEditingTodo(null)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.title}
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                <button
                  onClick={() => {
                    setEditingTodo(todo.id);
                    setNewTitle(todo.title);
                  }}
                >
                  Update
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
