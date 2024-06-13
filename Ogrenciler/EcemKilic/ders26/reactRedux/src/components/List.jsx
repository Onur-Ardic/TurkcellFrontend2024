import { useDispatch } from "react-redux";
import { deleteTodo, updateFormTodo } from "../redux/slices/todoSlice";
import { StyledLi, TodoButton, ButtonDiv } from "../../styled";
const List = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (todo) => {
    dispatch(updateFormTodo(todo));
  };

  return (
    <StyledLi key={todo.id}>
      <p>{todo.title}</p>
      <ButtonDiv>
        <TodoButton onClick={() => handleDelete(todo.id)}>Delete</TodoButton>
        <TodoButton onClick={() => handleUpdate(todo)}>Update</TodoButton>
      </ButtonDiv>
    </StyledLi>
  );
};

export default List;
