import React, { useState } from "react";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      content: newTodo,
      id: Math.random() * 1000,
    };
    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="todo-create">
      <input
        type="text"
        placeholder="Todo giriniz"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={createTodo}>Todo Olustur</button>
    </div>
  );
}

export default TodoCreate;
