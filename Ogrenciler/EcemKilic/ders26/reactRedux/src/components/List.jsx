import { useDispatch } from "react-redux";
import { deleteTodo, updateFormTodo } from "../redux/slices/todoSlice";

const List = ({todo}) => {

    const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (todo) => {
    dispatch(updateFormTodo(todo))
  };

  return (
    <li key={todo.id}>
      {todo.title} - {todo.id}
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
      <button onClick={() => handleUpdate(todo)}>Update</button>
    </li>
  )
}

export default List