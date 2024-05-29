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
          <h5 className={styles.titleStyle}>{toDo.title}</h5>
          <h6 className= {styles.endDateStyle}>
            Bitiş Tarihi:
            {formattedDate} {formattedTime}
          </h6>
         
          <div className={styles.descriptionStyles}><p>Açıklama: {toDo.description}</p></div> 
          <Button text="" />
          <Button text="" />
          <p className= {styles.dateStyle}>{toDo.date}</p>
        </div>
      </div>
    </>
  );
};
