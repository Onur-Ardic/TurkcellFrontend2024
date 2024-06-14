import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/slices/todoSlice";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 10px;
  background-color: #f4f4f4;
  color: black;
`;

const Button = styled.button`
  margin-left: 5px;
`;

const TodoItem = ({ todo, handleEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <ListItem>
      {todo.title} - {todo.id}
      <div>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={() => handleEdit(todo)}>Edit</Button>
      </div>
    </ListItem>
  );
};

export default TodoItem;
