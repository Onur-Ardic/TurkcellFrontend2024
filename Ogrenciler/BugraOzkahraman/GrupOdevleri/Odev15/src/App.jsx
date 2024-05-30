import { useState } from "react";
import "./App.css";
import Form from "./components/Page/Form";
import TodoList from "./components/Page/TodoList";

function App() {
  const [selectedDataId, setSelectedDataId] = useState("");
  function setId(id) {
    setSelectedDataId(id);
  }
  return (
    <>
      <Form selectedDataId={selectedDataId} />
      <TodoList setId={setId} />
    </>
  );
}

export default App;
