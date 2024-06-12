import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";
import Button from "./Button";

const ToDoCard = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo(id));
    setIsEditing(false);
  };
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.id}
            <Button onClick={() => handleDelete(todo.id)} text="Delete" />
            <Button
              onClick={() => {
                handleUpdate(todo.id);
                setIsEditing(true);
              }}
              text="Update"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoCard;
