import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/slices/todoSlice";

const TodoItem = ({ todo, handleEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li>
      {todo.title} - {todo.id}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => handleEdit(todo)}>Edit</button>
    </li>
  );
};

export default TodoItem;
