import React, { useState } from "react";
import styles from "../css/TodoItem.module.css";

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleToggle = () => {
    updateTodo(todo.id, { completed: !todo.completed });
  };

  const handleUpdateTitle = () => {
    updateTodo(todo.id, { title: editedTitle });
    setIsEditing(false);
  };

  return (
    <div className={styles.TodoAllInfo}>
      {isEditing ? (
        <div className={styles.Infos}>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            autoFocus
            className={styles.editInput}
          />
          <button className={styles.saveButton} onClick={handleUpdateTitle}>
            Kaydet
          </button>
        </div>
      ) : (
        <div className={styles.Infos}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            onClick={handleToggle}
            className={styles.todoName}
          >
            {todo.title}
          </span>
          <div className={styles.buttonGroup}>
            <button
              className={styles.deleteButton}
              onClick={() => deleteTodo(todo.id)}
            >
              <i
                className="fa-regular fa-trash-can"
                style={{ padding: "5px" }}
              ></i>
              Delete
            </button>
            <button
              className={styles.updateButton}
              onClick={() => setIsEditing(true)}
            >
              <i
                className="fa-regular fa-pen-to-square"
                style={{ padding: "5px" }}
              ></i>
              Edit
            </button>
          </div>
          <div className={styles.todoTimeInfo}>
            <p>
              Oluşturulma Saati: {todo.created_at}
            </p>

            {todo.updated_at && (
              <>
                <p>
                  Güncellenme Saati:{" "}
                  {todo.updated_at}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
