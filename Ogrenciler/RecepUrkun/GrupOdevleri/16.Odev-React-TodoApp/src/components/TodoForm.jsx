import React from "react";
import styles from "../css/TodoForm.module.css";

function TodoForm({ addTodo, newTodo, setNewTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.addTodoInput}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" className={styles.addTodoButton}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
