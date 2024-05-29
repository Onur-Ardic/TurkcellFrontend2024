import styles from "./App.module.css";
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
    try {
      if (toDo.content === "" || toDo.deadline === "") {
        alert("Tüm alanları doldurunuz!");
      } else {
        await addToDoDB(toDo);
        setToDoList([...toDoList, toDo]);
        setToDo({
          content: "",
          deadline: "",
          addingDate: `${addingDate}`,
          updatedDate: "",
          updateStatus: 0,
        });
      }
    } catch {
      alert(Error);
    }
  };

  const updateToDoUI = async (toDo, addingDate) => {
    try {
      const updatedToDo = {
        ...toDo,
        updatedDate: `${addingDate}`,
        updateStatus: toDo.updateStatus + 1,
      };
      await updateToDoDB(updatedToDo, toDo.id);
    } catch {
      alert(Error);
    }
  };

  const deleteToDoUI = async (id) => {
    try {
      await deleteToDoDB(id);
      setToDoList(toDoList.filter((toDo) => toDo.id !== id));
    } catch {
      alert(Error);
    }
  };

  const filterToDoList = (status) => {
    return toDoList.filter((toDo) => toDo.updateStatus === status);
  };

  return (
    <>
      <div className="input-area">
        <div className={styles.container}>
          <h1 className="title">To Do List App</h1>
          <ToDoForm addToDoUI={addToDoUI} toDo={toDo} setToDo={setToDo} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h1 className="subtitle">Yapılacaklar</h1>
            {filterToDoList(0).map((toDo, index) => (
              <ToDoCard
                colorProgress={styles.waiting}
                updateToDoUI={() => updateToDoUI(toDo, addingDate)}
                key={index}
                toDo={toDo}
                deleteToDoUI={() => deleteToDoUI(toDo.id)}
                showUpdateButton={true}
              />
            ))}
          </div>
          <div className={styles.col}>
            <h1 className="subtitle">Yapılıyor</h1>
            {filterToDoList(1).map((toDo, index) => (
              <ToDoCard
                colorProgress={styles.progress}
                updateToDoUI={() => updateToDoUI(toDo, addingDate)}
                key={index}
                toDo={toDo}
                deleteToDoUI={() => deleteToDoUI(toDo.id)}
                showUpdateButton={true}
              />
            ))}
          </div>
          <div className={styles.col}>
            <h1 className="subtitle">Tamamlanmış</h1>
            {filterToDoList(2).map((toDo, index) => (
              <ToDoCard
                colorProgress={styles.done}
                updateToDoUI={() => updateToDoUI(toDo, addingDate)}
                key={index}
                toDo={toDo}
                deleteToDoUI={() => deleteToDoUI(toDo.id)}
                showUpdateButton={false}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
