import React, { useState } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim() !== "") {
      dispatch(
        addTodo({
          id: Math.random().toString(36).substr(2, 5),
          title: todoInput.trim(),
        })
      );
      setTodoInput("");
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} placeholder="Enter todo" />
      <Button type="submit" text="Add" />
    </form>
  );
};

export default Form;
