import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/slices/todoSlice";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
`;

const TodoForm = ({ editingTodo, setEditingTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingTodo) {
      setTodoTitle(editingTodo.title);
    } else {
      setTodoTitle("");
    }
  }, [editingTodo]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, title: todoTitle }));
      setEditingTodo(null);
    } else {
      dispatch(addTodo({ id: self.crypto.randomUUID(), title: todoTitle }));
    }
    setTodoTitle("");
  };

  return (
    <Form onSubmit={handleAddTodo}>
      <Input
        type="text"
        name="todo"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <Button type="submit">{editingTodo ? "Update" : "Add"}</Button>
    </Form>
  );
};

export default TodoForm;
