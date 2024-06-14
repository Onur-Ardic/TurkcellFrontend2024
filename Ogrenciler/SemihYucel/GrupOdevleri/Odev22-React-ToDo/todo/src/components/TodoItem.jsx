import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/slices/todoSlice";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 20px 50px;
  background-color: #e9e6e6;
  color: black;
  width: 50%;
  border-radius: 10px;
`;

const Button = styled.button`
  margin-left: 5px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 7px;
  color: #fff;
  background-color: red;
  font-weight: bold;
  cursor: pointer;
  &:last-child {
    background-color: orange;
  }
`;

const TodoItem = ({ todo, handleEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <ListItem>
      <span>
        {todo.title} - <i>{todo.id.slice(0, 4)}</i>
      </span>
      <div>
        <Button onClick={handleDelete}>Sil</Button>
        <Button onClick={() => handleEdit(todo)}>Güncelle</Button>
      </div>
    </ListItem>
  );
};

export default TodoItem;
