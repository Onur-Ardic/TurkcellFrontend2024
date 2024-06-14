import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoList = ({ handleEdit }) => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <List>
      {todos && todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleEdit={handleEdit} />
      ))}
    </List>
  );
};

export default TodoList;
