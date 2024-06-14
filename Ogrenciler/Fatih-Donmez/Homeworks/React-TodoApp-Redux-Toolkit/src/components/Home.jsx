import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Home = () => {
  return (
    <>
      <h1 className="text-center mb-4">Redux Todo App</h1>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Home;
