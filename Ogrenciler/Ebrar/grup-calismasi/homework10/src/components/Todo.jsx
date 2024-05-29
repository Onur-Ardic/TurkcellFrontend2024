import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaCheck, FaEdit } from "react-icons/fa";
import "./css/todo.modules.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.content);

  const updateTodo = () => {
    const request = {
      id: todo.id,
      content: newTodo,
      createdAt: todo.createdAt,
      updatedAt: new Date(),
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  const deleteTodo = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <div className="todo">
      <div className="todo-section">
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"
          />
        ) : (
          <div className="todo-content">{todo.content}</div>
        )}
        <small>Created At: {new Date(todo.createdAt).toLocaleString()}</small>
        <small>Updated At: {new Date(todo.updatedAt).toLocaleString()}</small>
      </div>
      <div className="todo-actions">
        <IoIosRemoveCircle
          className="io-ios-remove-circle"
          onClick={deleteTodo}
        />
        {editable ? (
          <FaCheck className="fa-check" onClick={updateTodo} />
        ) : (
          <FaEdit className="fa-edit" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
