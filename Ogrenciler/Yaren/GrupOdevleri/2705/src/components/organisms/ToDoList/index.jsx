import { useEffect, useState } from "react";
import List from "../../molecules/List";
import AddBar from "../../molecules/AddBar";
import Api from "../../../services/Api";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    await Api.get("http://localhost:3000/todos")
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  };

  const addTodo = async () => {
    if (todoTitle === "") return alert("Lütfen bir görev giriniz.");
    await Api.post("http://localhost:3000/todos", {
      id: crypto.randomUUID(),
      title: todoTitle,
      checked: false,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    })
      .then((data) => {
        setTodos([...todos, data]);
        setTodoTitle("");
      })
      .catch((error) => console.log(error));
  };

  const deleteTodo = async (id) => {
    await Api.delete(`http://localhost:3000/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.log(error));
  };

  const fillInput = (id) => {
    const tempTodo = todos.find((todo) => todo.id === id);
    setTodoTitle(tempTodo.title);
    setSelectedTodo(tempTodo);
  };

  const updateTodo = async () => {
    await Api.put(`http://localhost:3000/todos/${selectedTodo.id}`, {
      ...selectedTodo,
      title: todoTitle,
      checked: false,
      updatedAt: new Date().toISOString(),
    })
      .then((data) => {
        const newTodos = todos.map((todo) =>
          todo.id === data.id ? data : todo
        );
        setTodos(newTodos);
        setSelectedTodo(null);
        setTodoTitle("");
      })
      .catch((error) => console.log(error));
  };

  const checkTodo = async (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id);
    await Api.put(`http://localhost:3000/todos/${id}`, {
      ...selectedTodo,
      checked: !selectedTodo.checked,
      updatedAt: new Date().toISOString(),
    })
      .then((data) => {
        const newTodos = todos.map((todo) =>
          todo.id === data.id ? data : todo
        );
        setTodos(newTodos);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <AddBar
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        addTodo={addTodo}
        updateTodo={updateTodo}
        selectedTodo={selectedTodo}
      />
      <List
        dataList={todos}
        deleteTodo={deleteTodo}
        fillInput={fillInput}
        checkTodo={checkTodo}
      />
    </>
  );
};

export default ToDoList;
