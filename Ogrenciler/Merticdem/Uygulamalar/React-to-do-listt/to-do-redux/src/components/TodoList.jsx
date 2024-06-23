import React from "react";

function TodoList({ todos, onDelete, onEdit }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} - {todo.id}
          <button onClick={() => onDelete(todo.id)}>Delete</button>
          <button onClick={() => onEdit(todo)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
