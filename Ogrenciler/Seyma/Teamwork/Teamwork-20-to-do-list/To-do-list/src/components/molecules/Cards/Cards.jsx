import React from "react";
import { Button } from "../../atoms/buttons/Button";
import styles from "./Cards.module.css";

export const Cards = ({ toDo }) => {
  const date = new Date(toDo.endDate);
  const formattedDate = date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <div className={styles.card}>
        <div className="card-body">
          <h5 className="card-title text-danger">{toDo.title}</h5>
          <h6>Eklenen tarih:{toDo.date}</h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Bitiş Tarihi:
            {formattedDate} {formattedTime}
          </h6>
          <h6 className="card-subtitle text-muted">{toDo.categories}</h6>
          <p className="card-text">{toDo.description}</p>
          <Button text="delete" />
          <Button text="güncelle" />
        </div>
      </div>
    </>
  );
};
