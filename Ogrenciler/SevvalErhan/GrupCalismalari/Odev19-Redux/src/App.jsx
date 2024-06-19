import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, updateTodo } from "./redux/slice/todoSlice";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  color: white;
  min-height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  flex-grow: 1;
  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1c7ed6;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 500px;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e1e;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TodoTitle = styled.span`
  flex-grow: 1;
  margin-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 600px) {
    white-space: normal;
    word-wrap: break-word;
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const TodoButtons = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
  .btn-update{
    background-color: green;
    color: white;
  }
  .btn-update:hover{
    background-color: darkgreen;
  }
  .btn-delete{
    background-color: red;
    color: white;
  }
  .btn-delete:hover{
    background-color: darkred;
  }
`;

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editingTodo, setEditingTodo] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
    setNewTitle("");
  };

  const handleUpdateTodo = (todo) => {
    dispatch(updateTodo(todo));
    setEditingTodo(null);
    setNewTitle("");
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };


  return (
    <Container>
      <Title>Redux Todo</Title>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const todo = e.target.todo.value.trim();
          if (!todo) {
            alert("Bu alan boş bırakılamaz!");
            return;
          }
          handleAddTodo({ id: crypto.randomUUID(), title: todo });
          e.target.todo.value = ""; 
        }}
      >
        <Input type="text" name="todo" placeholder="Enter new todo" />
        <Button type="submit">Add</Button>
      </Form>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            {editingTodo === todo.id ? (
              <>
                <Input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <Button onClick={() => handleUpdateTodo({ id: todo.id, title: newTitle })}>
                  Save
                </Button>
                <Button onClick={() => setEditingTodo(null)}>Cancel</Button>
              </>
            ) : (
              <>
                <TodoTitle>{todo.title}</TodoTitle>
                <TodoButtons>
                <Button className="btn-update"
                    onClick={() => {
                      setEditingTodo(todo.id);
                      setNewTitle(todo.title);
                    }}
                  >
                    Update
                  </Button>
                  <Button className="btn-delete" onClick={() => handleDelete(todo.id)}>Delete</Button>
                </TodoButtons>
              </>
            )}
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
}

export default App;
