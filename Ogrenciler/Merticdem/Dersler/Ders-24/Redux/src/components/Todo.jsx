import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/slices/todoSlice";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };
  const handleUpdateTodo = (todo) => {
    dispatch(updateTodo(todo));
  };
  return (
    <div>
      <li key={todo.id}>
        {todo.title} - {todo.id}
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
        <button
          onClick={() =>
            handleUpdateTodo({
              id: todo.id,
              title: prompt("Enter new title", todo.title),
            })
          }
        >
          Update
        </button>
      </li>
    </div>
  );
};
