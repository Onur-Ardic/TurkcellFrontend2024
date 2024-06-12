import React from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const Form = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const todo = e.target.elements.todo.value;
          handleAddTodo({ id: self.crypto.randomUUID(), title: todo });
        }}
      >
        <input type="text" name="todo" />
        <Button type="Submit" text="Add" />
      </form>
    </>
  );
};

export default Form;
