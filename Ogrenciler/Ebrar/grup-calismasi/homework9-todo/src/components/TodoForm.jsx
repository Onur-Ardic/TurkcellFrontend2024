import React from "react";

function TodoForm({ onCreateTodo }) {
  const [input, setInput] = useState("");

  const createToDo = () => {
    const request = {
      id: Math.random() * 1000,
      content: newTodo,
    };
    onCreateTodo(request);
  };
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Add todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={createToDo} className="todo-buton">
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
