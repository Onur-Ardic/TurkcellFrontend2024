import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo as reduxAddTodo } from "./redux/slices/todoSlice";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const id = new Date().getTime();
      dispatch(
        reduxAddTodo({
          id,
          title: newTodo,
        })
      );
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
          placeholder="Add a new todo"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
