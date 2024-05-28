import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "../../CustomStyle.module.css";
import "./page.css";
const TodoList = ({ setId }) => {
  const [onData, setOnData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then((res) => res.json())
      .then((data) => {
        setOnData(data);
      });
  });

  const deleteHandler = (data) => {
    fetch(`http://localhost:3000/todo/${data.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setOnData(onData.filter((data) => data.id !== id));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fillInputHandler = (data) => {
    document.getElementById("todoİnput").value = data.todoTitle;
    document.getElementById("addTodoButton").textContent = "Düzenle";
    setId(data.id);
  };

  function formatDate(date) {
    return new Date(date).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  return (
    <ul className="todoList">
      <h2 className={styles.size}>TodoList</h2>

      {onData.map((data) => (
        <li key={data.id} className={(styles.list, styles.flex)}>
          <h4>{data.todoTitle}</h4>

          <div className="button-wrapper">
            <div>
              <span> {formatDate(data.date)} </span>
              <button onClick={() => deleteHandler(data)}>Sil</button>
              <button onClick={() => fillInputHandler(data)}>Düzenle</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  setSelectedDataId: PropTypes.func,
};

export default TodoList;
