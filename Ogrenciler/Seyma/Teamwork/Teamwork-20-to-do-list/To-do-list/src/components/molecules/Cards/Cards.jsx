import React, { useState } from "react";
import { Button } from "../../atoms/buttons/Button";
import styles from "./Cards.module.css";
import { InputGroups } from "../inputGroups/InputGroups";

export const Cards = ({ toDo, onDelete, onUpdate }) => {
  const date = new Date(toDo.endDate);
  const [isEditing, setIsediting] = useState(false);
  const [editedToDo, setEditedToDo] = useState(toDo);

  const formattedDate = date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedToDo({ ...editedToDo, [name]: value });
  };
  const handleUpdate = () => {
    editedToDo.date = new Date().toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    onUpdate(editedToDo);
    setIsediting(false);
  };

  return (
    <>
      <div className={styles.card}>
        {isEditing ? (
          <>
            <InputGroups
              text="Title"
              name="title"
              value={editedToDo.title}
              onChange={handleChange}
            />
            <InputGroups
              text="Description"
              name="description"
              value={editedToDo.description}
              onChange={handleChange}
            />
            <InputGroups
              type="select"
              // options={options}
              text="Categories"
              name="categories"
              value={editedToDo.categories}
              onChange={handleChange}
            />
            <InputGroups
              type="datetime-local"
              text="EndDate"
              name="endDate"
              value={editedToDo.endDate}
              onChange={handleChange}
            />
            <Button text="Güncelle" type="submit" onClick={handleUpdate} />
          </>
        ) : (
          <div className="card-body">
            <h5 className={styles.titleStyle}>{toDo.title}</h5>
            <h6 className={styles.endDateStyle}>
              Bitiş Tarihi:
              {formattedDate} {formattedTime}
            </h6>

            <div className={styles.descriptionStyles}>
              <p>Açıklama: {toDo.description}</p>
            </div>
            <Button text="Sil" onClick={() => onDelete(toDo.id)} />
            <Button text="G" onClick={() => setIsediting(!isEditing)} />
            <p className={styles.dateStyle}>{toDo.date}</p>
          </div>
        )}
      </div>
    </>
  );
};
