import React from "react";
import styles from "./Card.module.css";

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    if (!flipped) handleChoice(card);
  };

  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
        <img className={styles.front} src={card.src} alt="card front" />
        <img
          className={styles.back}
          src="/src/assets/back.jpg"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default Card;
