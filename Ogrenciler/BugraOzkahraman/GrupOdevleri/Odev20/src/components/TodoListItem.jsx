import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/Slices/todoSlice";

const TodoListItem = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleUpdate = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.id}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleUpdate(todo.id)}>Update</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoListItem;
