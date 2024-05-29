import React from "react";
import Button from "../../atoms/button/Button";
import styles from "./ToDoCard.module.css";

const ToDoCard = ({
  toDo,
  deleteToDoUI,
  updateToDoUI,
  showUpdateButton,
  colorProgress,
}) => {
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

  return (
    <>
      <div className={`${styles.card} ${colorProgress}`}>
        <div className={styles.cardBody}>
          <div className={styles.cardText}>
            <p className={styles.title}>{toDo.content}</p>
            <p>{`Son Tarih: ${formatDate(toDo.deadline)}`}</p>
            <p>{leftTime(toDo)}</p>
            <p>Ekleme Tarihi: {toDo.addingDate}</p>
            <p>
              İşlem Tarihi:{" "}
              {toDo.updatedDate ? toDo.updatedDate : "İşlem Bekliyor"}
            </p>
            <div className={styles.buttons}>
              {showUpdateButton && (
                <Button text="İleri Taşı" onClick={updateToDoUI} />
              )}
              <Button text="Sil" onClick={deleteToDoUI} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoCard;
