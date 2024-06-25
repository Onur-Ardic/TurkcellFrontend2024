import { useSelector, useDispatch } from 'react-redux';
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { addTodo, deleteTodo, setTodo, updateTodo } from "../redux/slices/todoSlice";
import { useState, useEffect } from "react";
import styled from "styled-components";

const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const TodoUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 3px 5px;
  cursor: pointer;
  
`;

const UpdateAddButton = styled.button`
  background-color: #4169e1;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 3px 5px;
  cursor: pointer;
  margin-left: 10px;
`;
const UpdateButton = styled.button`
  background-color: #4169e1;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 3px 5px;
  cursor: pointer;
  margin-left: 5px;
`;
const LogOutButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const InputForm = styled.form`
  margin-bottom: 10px;
`;
const ButtonsDiv = styled.form`
  display: flex;
  margin-left: 10px;
`;
const UserPage = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const [inputValue, setInputValue] = useState("");

  const handleLogout = () => {
    signOut(auth);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (todo) => {
    dispatch(updateTodo(todo));
  };

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleUpdateTodo = (id) => {
    dispatch(updateTodo({id, title: inputValue}));
  };

  useEffect(() => {
    if (todo && todo.title) {
      setInputValue(todo.title);
    }
  }, [todo]);

  return (
    <UserPageContainer>
     
      <h1>Redux Todo</h1>
      <InputForm
        onSubmit={(e) => {
          e.preventDefault();
          todo && todo.title ? handleUpdateTodo(todo.id) : handleAddTodo({ id: self.crypto.randomUUID(), title: inputValue });
          dispatch(setTodo({}));
          setInputValue("");
        }}
      >
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" name="todo" />
        <UpdateAddButton type="submit">{todo && todo.title ? 'Update' : 'Add Todo'}</UpdateAddButton>
      </InputForm>
      <TodoUl>
        {todos.map((todo) => (
          <TodoLi key={todo.id}>
            {todo.title}
            <ButtonsDiv>
              <DeleteButton onClick={() => handleDelete(todo.id)}>Delete</DeleteButton>
            <UpdateButton onClick={() => handleUpdateTodo(todo)}>Update</UpdateButton>
            </ButtonsDiv>
          </TodoLi>
        ))}
      </TodoUl>
      <LogOutButton onClick={handleLogout}>Logout</LogOutButton>
    </UserPageContainer>
  );
};

export default UserPage;
