import React, { useEffect } from "react";
import Button from "../../atoms/button/Button";
import styles from "././ToDoCard.module.css";

const ToDoCard = ({ toDo, deleteToDoUI, updateToDoUI, addingDate }) => {
  function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(".");
  }

  const leftTime = (toDo) => {
    const deadline = new Date(toDo.deadline);
    const currentDate = new Date();

    const timeDifference = deadline.getTime() - currentDate.getTime();

    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 0) {
      return "Zamanınız Doldu!";
    } else {
      return `Kalan Gün: ${daysDifference}`;
    }
  };

  // useEffect(() => {
  //   const remainingDays = leftTime(toDo);
  //   console.log(`Kalan gün: ${remainingDays}`);
  // }, []);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <div className={styles.cardText}>
            <p>{toDo.content}</p>
            <p>{`Son Tarih: ${formatDate(toDo.deadline)}`}</p>
            <p>{leftTime(toDo)}</p>
            <p>{toDo.addingDate}</p>
            <p>{toDo.updatedDate ? toDo.updatedDate : ""}</p>
          </div>
          <div className={styles.buttons}>
            <Button text="İleri Taşı" onClick={updateToDoUI} />
            <Button text="Sil" onClick={deleteToDoUI} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoCard;
