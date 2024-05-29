import React, { useState } from "react";
import "./css/todocreate.modules.css";
import { FcBusinesswoman } from "react-icons/fc";

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
      <h1>
        Hello User! <FcBusinesswoman className="woman-icon" />
      </h1>

      <input
        type="text"
        placeholder="Bir sonraki görevin.."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={createTodo}>Görev Oluştur</button>
    </div>
  );
}

export default TodoCreate;
