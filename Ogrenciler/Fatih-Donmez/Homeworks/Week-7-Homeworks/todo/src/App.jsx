import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) =>
        console.error("There was an error fetching the todos!", error)
      );
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      fetch(`http://localhost:3000/todos/${currentTodo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentTodo),
      })
        .then((response) => response.json())
        .then((updatedTodo) => {
          const updatedTodos = todos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          );
          setTodos(updatedTodos);
          setEditIndex(null);
          setCurrentTodo({ id: "", title: "", description: "", date: "" });
        })
        .catch((error) =>
          console.error("There was an error updating the todo!", error)
        );
    } else {
      if (!currentTodo.title || !currentTodo.description)
        return alert("Please fill the form");
      const today = new Date();
      const newTodo = {
        ...currentTodo,
        id: today.getTime(),
        date: today.toLocaleDateString(),
      };
      fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      })
        .then((response) => response.json())
        .then((addedTodo) => {
          setTodos([...todos, addedTodo]);
          setCurrentTodo({ id: "", title: "", description: "", date: "" });
        })
        .catch((error) =>
          console.error("There was an error adding the todo!", error)
        );
    }
  };

  const removeTodoHandler = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      })
      .catch((error) =>
        console.error("There was an error deleting the todo!", error)
      );
  };

  const editTodoHandler = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setCurrentTodo(todoToEdit);
    setEditIndex(id);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 w-full">
      <h1 className="text-center my-4">Todo List</h1>
      <form onSubmit={formSubmitHandler}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            onChange={(e) =>
              setCurrentTodo({ ...currentTodo, title: e.target.value })
            }
            value={currentTodo.title}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            onChange={(e) =>
              setCurrentTodo({ ...currentTodo, description: e.target.value })
            }
            value={currentTodo.description}
            type="text"
            className="form-control"
          />
        </div>
        <div className="input-group mb-3">
          <button type="submit" className="btn btn-primary">
            {editIndex !== null ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <div className="row container">
        {todos?.map((item) => (
          <div key={item.id} className="col-3">
            <div
              className="card"
              style={{
                width: "18rem",
                maxWidth: "20rem",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">Title: {item.title}</h5>
                <p className="card-text">Description: {item.description}</p>
                <h6 className="card-text">Date: {item.date}</h6>
                <div>
                  <a
                    href="#"
                    onClick={() => removeTodoHandler(item.id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </a>
                  <a
                    href="#"
                    onClick={() => editTodoHandler(item.id)}
                    className="btn btn-primary"
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
