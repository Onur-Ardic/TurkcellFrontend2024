import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="container">
      <h1 className="header">My ToDo App With React</h1>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
