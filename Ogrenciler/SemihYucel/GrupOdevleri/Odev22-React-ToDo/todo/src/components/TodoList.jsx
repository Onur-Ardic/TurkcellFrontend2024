import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"; // Todo item bileşeni
import styled from "styled-components"; // Styled components için kütüphane

// Styled components tanımları
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoList = ({ handleEdit }) => {
  const todos = useSelector((state) => state.todo.todos); // Todo listesi Redux store'dan alınır

  return (
    <List>
      {todos && todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleEdit={handleEdit} />
      ))}
    </List>
  );
};

export default TodoList;
