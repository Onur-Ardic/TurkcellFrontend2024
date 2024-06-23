import React from "react";
import { Button, Icon, List, RelativeButton, UL } from "../style";

function TodoList({ todos, onDelete, onEdit }) {
  return (
    <UL>
      {todos.map((todo) => (
        <List key={todo.id}>
          {todo.title}
          <RelativeButton>
            <Button onClick={() => onDelete(todo.id)}><Icon className="fi fi-rr-trash"></Icon></Button>
          </RelativeButton>
          <RelativeButton>
            <Button onClick={() => onEdit(todo)}><Icon className="fi fi-rr-edit"></Icon></Button>
          </RelativeButton>
        </List>
      ))}
    </UL>
  );
}

export default TodoList;
