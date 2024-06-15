import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/slices/todoSlice";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 7px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 7px;
  background-color: green;
  color: #fff;
  cursor: pointer;
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
    if (!todoTitle.trim()) {
      alert("Boş Bırakılamaz");
      return;
    }
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
      <Button type="submit">{editingTodo ? "Güncelle" : "Ekle"}</Button>
    </Form>
  );
};

export default TodoForm;
