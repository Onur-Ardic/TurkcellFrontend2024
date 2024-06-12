import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "../redux/slices/todoSlice";

const ToDoItem = ({ todo }) => {
  console.log(todo);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = () => {
    dispatch(setTodo(todo));
  };

  return (
    <li>
      {todo.title}
      <button onClick={handleUpdate}>Güncelle</button>
      <button onClick={() => handleDelete(todo.id)}>Sil</button>
    </li>
  );
};

export default ToDoItem;
