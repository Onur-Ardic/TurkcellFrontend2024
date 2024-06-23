import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateFormTodo } from "../redux/slices/todoSlice";
import { StyledLi, TodoButton, ButtonDiv } from "../../styled";
import { deleteTodoFirebase } from "../service/firebase";
const List = ({ todo }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleDelete = async (todo) => {
    dispatch(deleteTodo(todo.id));
    await deleteTodoFirebase(user, todo);
  };

  const handleUpdate = async (todo) => {
    dispatch(updateFormTodo(todo));
  };

  return (
    <StyledLi key={todo.id}>
      <p>{todo.title}</p>
      <ButtonDiv>
        <TodoButton onClick={() => handleDelete(todo)}>Delete</TodoButton>
        <TodoButton onClick={() => handleUpdate(todo)}>Update</TodoButton>
      </ButtonDiv>
    </StyledLi>
  );
};

export default List;
