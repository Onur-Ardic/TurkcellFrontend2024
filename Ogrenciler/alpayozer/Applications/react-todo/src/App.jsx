import { useEffect, useState } from "react";
import "./App.css";
import { ToDoForm } from "./components/organisms/ToDoForm/ToDoForm";
import { deleteData, get, post, update } from "./service/Api";
import { Navbar } from "./components/organisms/Navbar/Navbar";
import CategoryCardGroup from "./components/layout/CategoryCardGroup/CategoryCardGroup";
import { Button } from "./components/atoms/buttons/Button";

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
                  <Button
                    className="btn btn-info btn-sm text-white"
                    onClick={() => setView(!view)}
                    text={
                      <>
                        <i className="bi bi-list"></i>/
                        <i className="bi bi-grid"></i>
                      </>
                    }
                  />
                </div>
                <CategoryCardGroup
                  view={view}
                  toDo={toDo}
                  onUpdate={(editedTodo) => updateToDoUI(editedTodo)}
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
