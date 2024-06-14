import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, setTodo, updateTodo } from "./redux/slices/todoSlice";
import { useEffect, useState } from "react";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const [inputValue, setInputValue] = useState("");


  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (todo) => {
    dispatch(setTodo(todo));
  };

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleUpdateTodo = (id) => {
    dispatch(updateTodo({id, title : inputValue}));
  }

  useEffect(() => {
    if (todo && todo.title) {
      setInputValue(todo.title);
    }
  }, [todo])

  return (
    <>
      <h1>Redux Todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          todo && todo.title ? handleUpdateTodo(todo.id) : handleAddTodo({ id: self.crypto.randomUUID(), title: inputValue });
          dispatch(setTodo({}));
          setInputValue("");
        }}
      >
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" name="todo" />
        <button type="submit" > {todo && todo.title ? 'Update':'Add Todo'}  </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.id}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleUpdate(todo)}>Update</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
