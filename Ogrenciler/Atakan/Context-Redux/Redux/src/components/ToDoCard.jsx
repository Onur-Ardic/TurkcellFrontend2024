import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";
import Button from "./Button";

const ToDoCard = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id: id, title: updatedTitle }));
    setEditingTodoId(null);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                />
                <Button onClick={() => handleUpdate(todo.id)} text="Save" />
              </>
            ) : (
              <>
                {todo.title} - {todo.id}
                <Button onClick={() => handleDelete(todo.id)} text="Delete" />
                <Button onClick={() => setEditingTodoId(todo.id)} text="Edit" />
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoCard;
