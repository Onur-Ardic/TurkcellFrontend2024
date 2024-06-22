import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "../redux/slices/todoSlice";
import StarRating from "bstarrating";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { doc, deleteDoc } from "firebase/firestore";
// import { db } from "../firebase";

const ToDoItem = ({ todo }) => {
  const [star, setStar] = useState(0);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    // await deleteDoc(doc(db, "todos", id));
    dispatch(deleteTodo(id));
  };

  const handleUpdate = () => {
    dispatch(setTodo(todo));
  };

  return (
    <li
      style={{
        backgroundColor:
          star === 0
            ? "rgb(236, 213, 181)"
            : star === 1
            ? "#C25A47"
            : star === 2
            ? "#2FBBCB"
            : "#48B193",
      }}
    >
      {todo.title}
      <div>
        <StarRating
          size={30}
          className="myStar"
          messages={["", "", "", "", ""]}
          onSetRating={(value) => {
            setStar(value);
            alert(
              value === 1
                ? "Ama yine de iyi ilerledim."
                : value === 2
                ? "Çok iyi ilerledim."
                : "Çok çok iyi ilerledim."
            );
          }}
          maxRating={5}
        />
        <button onClick={handleUpdate}>{t("Update")}</button>
        <button onClick={() => handleDelete(todo.id)}>{t("Delete")}</button>
      </div>
    </li>
  );
};

export default ToDoItem;
