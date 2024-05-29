import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = currentTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      if (!currentTodo.title || !currentTodo.description)
        return alert("Please fill the form");
      const today = new Date();
      currentTodo.id = today.getTime();
      currentTodo.date = today.toLocaleDateString();
      setTodos([...todos, currentTodo]);
    }
    setCurrentTodo({ id: "", title: "", description: "", date: "" });
  };
  console.log(currentTodo);
  console.log(todos);
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
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input
            onChange={(e) =>
              setCurrentTodo({ ...currentTodo, title: e.target.value })
            }
            value={currentTodo.title}
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <input
            onChange={(e) =>
              setCurrentTodo({ ...currentTodo, description: e.target.value })
            }
            value={currentTodo.description}
            type="text"
            class="form-control"
          />
        </div>
        <div className="input-group mb-3">
          <button type="submit" className="btn btn-primary">
            {editIndex !== null ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <div className="row container">
        {todos?.map((item, index) => (
          <div key={index} className="col-3">
            <div
              class="card"
              style={{
                width: "18rem",
                maxWidth: "20rem",
              }}
            >
              <div class="card-body">
                <h5 class="card-title">Title:{item.title}</h5>
                <p class="card-text">Description: {item.description}</p>
                <h6 class="card-text">Date: {item.date}</h6>
                <div>
                  <a
                    href="#"
                    onClick={() => removeTodoHandler(index)}
                    class="btn btn-danger"
                  >
                    Remove
                  </a>
                  <a
                    href="#"
                    onClick={() => editTodoHandler(index)}
                    class="btn btn-primary"
                  >
                    Edit
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
