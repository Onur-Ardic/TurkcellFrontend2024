import React from "react";
import { BackImage, Card, Image } from "./card-styled";
import backCard from "/logo6.jpeg";
import "./card.css";

const CardView = ({ card, handleChoise, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoise(card);
    }
  };

  return (
    <>
      <Card className={flipped ? "flipped" : ""}>
        <Image className="front" src={card.src} alt="1" />
        <BackImage
          onClick={handleClick}
          className="back"
          src={backCard}
          alt="1"
        />
      </Card>
    </>
  );
};

export default CardView;
