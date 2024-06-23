import React from "react";

function TodoForm({ onAddTodo }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const todo = e.target.elements.todo.value;
        onAddTodo({ id: self.crypto.randomUUID(), title: todo });
        e.target.reset();
      }}
    >
      <input type="text" name="todo" required />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
