import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useTranslation } from "react-i18next";

const Home = () => {
  const {t} = useTranslation('todo')
  return (
    <>
      <h1 className="text-center mb-4">{t('title')}</h1>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Home;
