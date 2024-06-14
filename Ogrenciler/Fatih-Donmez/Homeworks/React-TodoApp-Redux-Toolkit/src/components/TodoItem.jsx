import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo as reduxDeleteTodo,
  updateTodo as reduxUpdateTodo,
} from "./redux/slices/todoSlice";

const TodoItem = ({ todo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(reduxDeleteTodo(id));
  };

  const handleUpdateTodo = (id) => {
    if (editTitle.trim()) {
      dispatch(
        reduxUpdateTodo({
          id,
          title: editTitle,
        })
      );
      setEditMode(false);
      setEditTitle("");
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {editMode ? (
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
              onClick={() => setEditMode(false)}
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
              onClick={() => setEditMode(true)}
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
  );
};

export default TodoItem;
