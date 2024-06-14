import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/slices/todoSlice"; // Todo ekleme ve güncelleme aksiyonları
import styled from "styled-components"; // Styled components için kütüphane

// Styled components tanımları
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
`;

const TodoForm = ({ editingTodo, setEditingTodo }) => {
  const [todoTitle, setTodoTitle] = useState(""); // Todo başlığı için state
  const dispatch = useDispatch(); // Dispatch fonksiyonu

  // Düzenlenen todo varsa, başlığı input'a yerleştirir
  useEffect(() => {
    if (editingTodo) {
      setTodoTitle(editingTodo.title);
    } else {
      setTodoTitle("");
    }
  }, [editingTodo]);

  // Todo ekleme veya güncelleme işlemi
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todoTitle.trim()) {
      alert("Boş Bırakılamaz"); // Boş başlık kontrolü
      return;
    } 
    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, title: todoTitle })); // Todo güncelleme
      setEditingTodo(null);
    } else {
      dispatch(addTodo({ id: self.crypto.randomUUID(), title: todoTitle })); // Yeni todo ekleme
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
