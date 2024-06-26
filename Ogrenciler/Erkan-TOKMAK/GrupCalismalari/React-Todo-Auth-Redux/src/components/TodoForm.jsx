import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import { useTranslation } from "react-i18next";


const TodoForm = () => {
  const {t} = useTranslation('todo');
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        title: newTodo,
        completed: false,
        createdAt: new Date(),
      };

      dispatch(addTodo({ todo }));

      setNewTodo("");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo();
      }}
      className="mb-4"
    >
      <div className="input-group">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="form-control"
          placeholder={t('add')}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            {t('add')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
