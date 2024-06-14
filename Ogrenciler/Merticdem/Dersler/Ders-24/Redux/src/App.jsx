import "./App.css";
import { todoList } from "./components/TodoList";

function App() {
  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };
  return (
    <>
      <h1>Redux Todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const todo = e.target.elements.todo.value;
          handleAddTodo({ id: self.crypto.randomUUID(), title: todo });
        }}
      >
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <todoList />
    </>
  );
}

export default App;
