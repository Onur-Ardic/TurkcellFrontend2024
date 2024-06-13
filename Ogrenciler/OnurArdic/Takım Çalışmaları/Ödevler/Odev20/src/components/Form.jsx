import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Slices/todoSlice";
import {Formstyle, Title, Buttons} from "./Styled.jsx"


const Form = () => {
  const dispatch = useDispatch();
  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <Formstyle 
      onSubmit={(e) => {
        e.preventDefault();
        const todo = e.target.elements.todo.value;
        handleAddTodo({
          id: self.crypto.randomUUID(),
          title: todo,
        });
      }}>
      <Title >To do List </Title>
      <input name="todo" type="text" />
      <Buttons type="submit">Submit</Buttons>
    </Formstyle>
  );
};

export default Form;
