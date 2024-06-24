
import { useSelector, useDispatch } from 'react-redux';
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { addTodo, deleteTodo, setTodo, updateTodo } from "../redux/slices/todoSlice";
import { useState, useEffect } from "react";
import { DeleteButton, UpdateButton, TodoLi, TodoUl } from '../styled';

const UserPage = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const [inputValue, setInputValue] = useState("");

  const handleLogout = () => {
    signOut(auth);
  };

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
    <div>
      <button onClick={handleLogout}>Logout</button>
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
      <TodoUl>
        {todos.map((todo) => (
          <TodoLi key={todo.id}>
            {todo.title}
            <DeleteButton onClick={() => handleDelete(todo.id)}>Delete</DeleteButton>
            <UpdateButton onClick={() => handleUpdate(todo)}>Update</UpdateButton>
          </TodoLi>
        ))}
      </TodoUl>
    </div>
  );
};

export default UserPage;
