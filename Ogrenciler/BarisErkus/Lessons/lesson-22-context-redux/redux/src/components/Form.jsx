import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/slices/todoSlice";
import { useState, useEffect } from "react";

const Form = () => {
  const todo = useSelector((state) => state.todo.todo);
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo && todo.title) {
      setTodoTitle(todo.title);
    }
  }, [todo]);

  const handleAdd = (newTodo) => {
    if (todo.id === undefined) dispatch(addTodo(newTodo));
    else dispatch(updateTodo(newTodo));
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

      <button type="submit">
        {todo.id !== undefined ? "Edit Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default Form;
