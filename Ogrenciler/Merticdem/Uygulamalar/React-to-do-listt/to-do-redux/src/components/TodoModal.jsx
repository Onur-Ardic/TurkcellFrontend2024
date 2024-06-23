import React, { useState } from "react";

function TodoModal({ todo, onClose, onUpdateTodo }) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleUpdateTodo = () => {
    onUpdateTodo(todo.id, newTitle);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <input type="text" value={newTitle} onChange={handleTitleChange} />
        <button onClick={handleUpdateTodo}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default TodoModal;
