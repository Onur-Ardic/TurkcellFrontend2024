import React, { useState } from "react";
import { Icon, Input, ModalContent, UpdateButton, UpdateInput } from "../style";

function TodoModal({ todo, onClose, onUpdateTodo }) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleUpdateTodo = () => {
    onUpdateTodo(todo.id, newTitle);
  };

  return (
    <div>
      <ModalContent>
        <UpdateInput type="text" value={newTitle} onChange={handleTitleChange} />
        <UpdateButton onClick={handleUpdateTodo}><Icon className="fi fi-rr-edit"></Icon></UpdateButton>
        <UpdateButton onClick={onClose}><Icon className="fi fi-rr-cross-circle"></Icon></UpdateButton>
      </ModalContent>
    </div>
  );
}

export default TodoModal;
