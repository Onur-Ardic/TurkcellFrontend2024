import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./redux/slices/todoSlice";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoModal from "./components/TodoModal";
import { CardContainer, Container } from "./style";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const openModal = (todo) => {
    setCurrentTodo(todo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentTodo(null);
  };

  const handleUpdateTodo = (id, title) => {
    dispatch(
      updateTodo({
        id,
        title,
      })
    );
    closeModal();
  };

  return (
    <Container>
      <CardContainer>
        <h1>Redux Todo</h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList todos={todos} onDelete={handleDelete} onEdit={openModal} />
        {showModal && (
          <TodoModal
            todo={currentTodo}
            onClose={closeModal}
            onUpdateTodo={handleUpdateTodo}
          />
        )}
      </CardContainer>
    </Container>
  );
}

export default App;
