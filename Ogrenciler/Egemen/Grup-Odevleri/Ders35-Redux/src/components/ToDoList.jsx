import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
