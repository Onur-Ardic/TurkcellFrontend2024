import { useEffect } from "react";

import Form from "./components/Form";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { useTranslation } from "react-i18next";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "./firebase";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTodos } from "./redux/slices/todoSlice";

function App() {
  const location = useLocation();
  const userId = location.state?.userId;

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos(db).then((todos) => {
      dispatch(setTodos(todos));
    });
  }, []);

  const { t } = useTranslation();

  async function getTodos(db) {
    const todoCollection = collection(db, "todos");
    const todoSnapshot = await getDocs(todoCollection);
    const todoList = todoSnapshot.docs.map((doc) => doc.data());
    const todoListFiltered = todoList.filter((todo) => todo.userId === userId);
    return todoListFiltered;
  }

  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <Header />
      <div
        className="container"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 className="header">{t("MainHeader")}</h1>
        <Form userId={userId} />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
