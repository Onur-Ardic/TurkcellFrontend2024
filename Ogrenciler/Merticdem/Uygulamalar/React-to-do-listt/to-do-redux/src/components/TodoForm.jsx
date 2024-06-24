import React from "react";
import { Button, Icon, Input, RelativeButton } from "../style";

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
      <RelativeButton>
        <Input type="text" name="todo" required />
        <Button type="submit"><Icon className="fi fi-rr-add"></Icon></Button>
      </RelativeButton>
    </form>
  );
}

export default TodoForm;
