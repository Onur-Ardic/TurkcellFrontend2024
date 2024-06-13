import React from "react";
import { Todo } from "./Todo";

export const todoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
};
