import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, setTodo } from "../redux/slices/todoSlice";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../firebase";

const Form = ({ userId }) => {
  let todo = useSelector((state) => state.todo.todo);
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    if (todo && todo.title) {
      setTodoTitle(todo.title);
    }
  }, [todo]);

  const handleAdd = async (newTodo) => {
    if (todo.id === undefined) {
      try {
        if (!userId) {
          alert("User not found");
          return;
        }
        await addDoc(collection(db, "todos"), {
          newTodo,
          userId: userId,
        });
        dispatch(addTodo(newTodo));
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      try {
        // await updateDoc();
        dispatch(updateTodo(newTodo));
        dispatch(setTodo({}));
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd({
          id: todo.id !== undefined ? todo.id : crypto.randomUUID(),
          title: todoTitle,
        });
        setTodoTitle("");
      }}
    >
      <input
        type="text"
        name="todo"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      {todo.id ? (
        <button type="submit">{t("Edit")}</button>
      ) : (
        <button type="submit">{t("Add")}</button>
      )}
    </form>
  );
};

export default Form;
