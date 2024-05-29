import "./App.css";
import ToDoForm from "./components/organisms/toDoForm/ToDoForm";
import ToDoCard from "./components/organisms/toDoCard/ToDoCard";
import { useEffect, useState } from "react";
import {
  getAllToDoDB,
  addToDoDB,
  updateToDoDB,
  deleteToDoDB,
} from "./service/Api";

function App() {
  const date = new Date();
  const addingDate = date.toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const [toDo, setToDo] = useState({
    content: "",
    deadline: "",
    addingDate: `${addingDate}`,
    updatedDate: "",
    updateStatus: 0,
  });
  const [toDoList, setToDoList] = useState([]);

  const fetchToDoList = async () => {
    const allToDoList = await getAllToDoDB();
    setToDoList(allToDoList);
  };

  useEffect(() => {
    fetchToDoList();
  }, [toDoList]);

  const addToDoUI = async (toDo) => {
    await addToDoDB(toDo);
    setToDoList([...toDoList, toDo]);
  };

  const updateToDoUI = async (toDo, addingDate) => {
    const updatedToDo = {
      ...toDo,
      updatedDate: `${addingDate}`,
      updateStatus: toDo.updateStatus + 1,
    };
    await updateToDoDB(updatedToDo, toDo.id);
  };

  const deleteToDoUI = async (id) => {
    await deleteToDoDB(id);
    setToDoList(toDoList.filter((toDo) => toDo.id !== id));
  };

  const filterToDoList = (status) => {
    return toDoList.filter((toDo) => toDo.updateStatus === status);
  };

  return (
    <>
      <div className="input-area">
        <div className="container">
          <h1 className="title">To Do List App</h1>
          <ToDoForm addToDoUI={addToDoUI} toDo={toDo} setToDo={setToDo} />
        </div>
      </div>
      <div className="container">
        <h1 className="subtitle">Yapılacaklar</h1>
        {filterToDoList(0).map((toDo, index) => (
          <ToDoCard
            updateToDoUI={() => updateToDoUI(toDo)}
            key={index}
            toDo={toDo}
            deleteToDoUI={() => deleteToDoUI(toDo.id)}
            showUpdateButton={true}
          />
        ))}
      </div>
      <div className="container">
        <h1 className="subtitle">Yapılıyor</h1>
        {filterToDoList(1).map((toDo, index) => (
          <ToDoCard
            updateToDoUI={() => updateToDoUI(toDo)}
            key={index}
            toDo={toDo}
            deleteToDoUI={() => deleteToDoUI(toDo.id)}
            showUpdateButton={true}
          />
        ))}
      </div>
      <div className="container">
        <h1 className="subtitle">Tamamlanmış Görevler</h1>
        {filterToDoList(2).map((toDo, index) => (
          <ToDoCard
            updateToDoUI={() => updateToDoUI(toDo)}
            key={index}
            toDo={toDo}
            deleteToDoUI={() => deleteToDoUI(toDo.id)}
            showUpdateButton={false}
          />
        ))}
      </div>
    </>
  );
}

export default App;
