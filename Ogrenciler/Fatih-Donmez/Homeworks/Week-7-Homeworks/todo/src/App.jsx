import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // If editing, update todo
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = currentTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // If not editing, add new todo
      setTodos([...todos, currentTodo]);
    }
    setCurrentTodo("");
  };

  const removeTodoHandler = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodoHandler = (index) => {
    setCurrentTodo(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 w-full">
      <h1 className="text-center my-4">Todo List</h1>
      <form onSubmit={formSubmitHandler}>
        <div className="input-group mb-3">
          <input
            onChange={(e) => setCurrentTodo(e.target.value)}
            value={currentTodo}
            type="text"
            className="form-control"
            placeholder="Add a new todo"
          />
          <button type="submit" className="btn btn-primary">
            {editIndex !== null ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <div className="row container">
        {todos.map((item, index) => (
          <div key={index} className="col-3">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={`https://picsum.photos/id/${index + 100}/30/30`}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{item}</h5>
                <div>
                  <a
                    href="#"
                    onClick={() => removeTodoHandler(index)}
                    class="btn btn-danger"
                  >
                    Sil
                  </a>
                  <a
                    href="#"
                    onClick={() => editTodoHandler(index)}
                    class="btn btn-primary"
                  >
                    Düzenle
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
