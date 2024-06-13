import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo as reduxAddTodo,
  deleteTodo as reduxDeleteTodo,
  updateTodo as reduxUpdateTodo,
} from "./redux/slices/todoSlice";
import { useState } from "react";

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
        className="mb-4"
      >
        <div className="input-group">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="form-control"
            placeholder="Add a new todo"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Add Todo
            </button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {editMode === todo.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="form-control mr-2"
                />
                <div>
                  <button
                    onClick={() => handleUpdateTodo(todo.id)}
                    className="btn btn-success mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(null)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <span>{todo.title}</span>
                <div>
                  <button
                    onClick={() => handleEdit(todo)}
                    className="btn btn-warning mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
