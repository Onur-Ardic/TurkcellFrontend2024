import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/slices/todoSlice";

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
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="todo"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button type="submit">{editingTodo ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
