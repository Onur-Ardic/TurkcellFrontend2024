import { useEffect, useState } from "react";
import "./App.css";
import { ToDoForm } from "./components/organisms/ToDoForm/ToDoForm";
import { deleteData, get, getOptions, post, update } from "./service/Api";
import { Cards } from "./components/molecules/Cards/Cards";
import { Navbar } from "./components/organisms/Navbar/Navbar";
import { CategoriesCard } from "./components/organisms/CategoriesCard/CategoriesCard";
import CategoryCardGroup from "./components/layout/CategoryCardGroup/CategoryCardGroup";

function App() {
  const [toDo, setToDo] = useState([]);
  const [view, setView] = useState(true);

  const getToDo = async () => {
    const allToDo = await get();
    setToDo(allToDo);
  };

  const addTodoUI = async (todo) => {
    const addedTodo = await post(todo);
    setToDo([...toDo, addedTodo]);
  };

  const deleteToDoUI = async (id) => {
    await deleteData(id);
    setToDo(toDo.filter((todo) => todo.id !== id));
  };

  const updateToDoUI = async (editedToDo) => {
    const updatedToDo = await update(editedToDo.id, editedToDo);
    setToDo(toDo.map((t) => (t.id === updatedToDo.id ? updatedToDo : t)));
  };

  useEffect(() => {
    getToDo();
  }, []);

  return (
    <>
      <section id="homePage">
        <div id="main">
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 formStyles">
                <ToDoForm onAdd={addTodoUI} />
              </div>
              <div className="col-lg-10">
                <div className="d-flex py-1 px-2 justify-content-between">
                  <h5 className="text-muted">Daily Tasks</h5>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => setView(!view)}
                  >
                    <i className="bi bi-list"></i>/
                    <i className="bi bi-grid"></i>
                  </button>
                </div>
                <CategoryCardGroup
                  view={view}
                  toDo={toDo}
                  onUpdate={(editTodo) => updateToDoUI(editTodo)}
                  onDelete={(id) => deleteToDoUI(id)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
