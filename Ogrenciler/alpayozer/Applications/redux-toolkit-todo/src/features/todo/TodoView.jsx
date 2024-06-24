import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./todoSlice";
import TodoCard from "../../components/TodoCard";

const TodoView = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  return (
    <>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => dispatch(addTodo({ title: value }))}>Add</button>
      </div>
      <h5>Todos</h5>
      <ul>
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoView;
