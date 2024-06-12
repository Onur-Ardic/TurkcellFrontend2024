import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/slices/todoSlice";
import { useEffect, useState } from "react";

const Form = () => {

  const dispatch = useDispatch();
  const Todo = useSelector(state => state.todo.inputValue);
  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };
  const [updateValue, setUpdateValue] = useState(Todo.title);
  useEffect(() => {setUpdateValue(Todo.title)}, [Todo]);

  console.log(updateValue);
  const handleUpdateValue = () => {
    dispatch(updateTodo({
        id: Todo.id,
        title: updateValue
    }))
  }

  console.log(Todo.id);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        Todo.title === "" ? 
        handleAddTodo({ id: self.crypto.randomUUID(), title: updateValue }) : handleUpdateValue()
      }}
    >
      <input type="text" name="todo" value={updateValue} onChange={(e) => setUpdateValue(e.target.value)}/>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default Form