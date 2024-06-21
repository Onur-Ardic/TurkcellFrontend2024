import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem.jsx";
import { useTranslation } from "react-i18next";

const TodoList = () => {
  const {t} = useTranslation('todo');
  const todos = useSelector((state) => state.todo.todos);
  const status = useSelector((state) => state.todo.status);
  return (
    <ul className="list-group">
      {status === "loading" ? <p>{t('laoding')}</p> : null}
      {status === "failed" ? <p>{t('error')}</p> : null}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
