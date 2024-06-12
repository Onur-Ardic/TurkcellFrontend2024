import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Slices/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const todo = e.target.elements.todo.value;
        handleAddTodo({
          id: self.crypto.randomUUID(),
          title: todo,
        });
      }}>
      <h3>To do List </h3>
      <input name="todo" type="text" />
      <button type="sumbit">Submit</button>
    </form>
  );
};

export default Form;
