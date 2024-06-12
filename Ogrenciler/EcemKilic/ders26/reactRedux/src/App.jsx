import "./App.css";
import { useSelector } from "react-redux";
import List from "./components/List";
import Form from "./components/Form";
function App() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <>
      <h1>Redux Todo</h1>
      <Form />
      <ul>
        {todos.map((todo) => (<List key={todo.id} todo={todo} />))}
      </ul>
    </>
  );
}

export default App;