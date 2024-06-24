import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todo/todoSlice";
import Button from "./Button";

const TodoCard = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.title);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        title: value,
      })
    );
    setIsEditing(!isEditing);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <li key={todo.id}>
        {isEditing ? (
          <>
            <input type="text" value={value} onChange={handleChange} />
            <Button
              icon={<i className="fa-solid fa-xmark"></i>}
              onClick={() => setIsEditing(!isEditing)}
            />
            <Button
              icon={<i className="fa-solid fa-floppy-disk"></i>}
              onClick={handleSave}
            />
          </>
        ) : (
          <>
            <span>{todo.title}</span>
            <Button
              icon={<i className="fa-solid fa-trash"></i>}
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
            <Button
              icon={<i className="fa-solid fa-pen-to-square"></i>}
              onClick={() => setIsEditing(!isEditing)}
            />
          </>
        )}
      </li>
    </>
  );
};

export default TodoCard;

{
  /* <i class="fa-solid fa-trash"></i> */
}
{
  /* <i class="fa-solid fa-pen-to-square"></i> */
}
{
  /* <i class="fa-solid fa-xmark"></i> */
}
{
  /* <i class="fa-solid fa-floppy-disk"></i> */
}
