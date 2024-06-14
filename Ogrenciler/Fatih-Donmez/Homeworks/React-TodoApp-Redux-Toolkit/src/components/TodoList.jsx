import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem.jsx";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const status = useSelector((state) => state.todo.status);
  return (
    <ul className="list-group">
      {status === "loading" ? <p>Loading...</p> : null}
      {status === "failed" ? <p>Error</p> : null}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
