import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, setTodo } from "../redux/slices/todoSlice";
import { useState, useEffect } from "react";

const Form = () => {
  let todo = useSelector((state) => state.todo.todo);
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo && todo.title) {
      setTodoTitle(todo.title);
    }
  }, [todo]);

  const handleAdd = (newTodo) => {
    if (todo.id === undefined) dispatch(addTodo(newTodo));
    else {
      dispatch(updateTodo(newTodo));
      dispatch(setTodo({}));
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd({
          id: todo.id !== undefined ? todo.id : crypto.randomUUID(),
          title: todoTitle,
        });
        setTodoTitle("");
      }}
    >
      <input
        type="text"
        name="todo"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      {todo.id ? (
        <button type="submit">Edit</button>
      ) : (
        <button type="submit">Add</button>
      )}
    </form>
  );
};

export default Form;
