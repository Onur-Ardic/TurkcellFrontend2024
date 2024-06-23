import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, updateTodo } from "./redux/slices/todoSlice";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const openModal = (todo) => {
    setCurrentTodo(todo);
    setNewTitle(todo.title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentTodo(null);
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleUpdateTodo = () => {
    if (currentTodo) {
      dispatch(
        updateTodo({
          id: currentTodo.id,
          title: newTitle,
        })
      );
      closeModal();
    }
  };

  return (
    <>
      <h1>Redux Todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const todo = e.target.elements.todo.value;
          handleAddTodo({ id: self.crypto.randomUUID(), title: todo });
          e.target.reset(); // Clear the input field
        }}
      >
        <input type="text" name="todo" required />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.id}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => openModal(todo)}>Edit</button>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <input type="text" value={newTitle} onChange={handleTitleChange} />
            <button onClick={handleUpdateTodo}>Update</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
