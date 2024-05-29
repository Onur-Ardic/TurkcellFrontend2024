import { useEffect, useState } from "react";
import "./App.css";
import { ToDoForm } from "./components/organisms/ToDoForm/ToDoForm";
import { get, getOptions, post } from "./service/Api";
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
          <div className="col-lg-3 formStyles">
            <ToDoForm onAdd={addTodoUI} />
          </div>
          <div className="col-lg-9">
          <button onClick={() => setView(!view)}><i class="bi bi-list"></i>/<i class="bi bi-grid"></i></button>
            <CategoryCardGroup view={view} toDo={toDo} />
          </div>
        </div>
      </div>
      </div>
    </section>
      
    </>
  );
}

export default App;
