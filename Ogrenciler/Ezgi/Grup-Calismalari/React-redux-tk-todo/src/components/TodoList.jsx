import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ handleEdit }) => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <ul>
      {todos && todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleEdit={handleEdit} />
      ))}
    </ul>
  );
};

export default TodoList;
