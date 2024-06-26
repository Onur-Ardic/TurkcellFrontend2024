import React from "react";
import { BackImage, Card, Image } from "./card-styled";
import backCard from "/logo.jpeg";

const CardView = ({ card, handleChoise, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoise(card);
    }
  };

  return (
    <>
      <Card className={flipped ? "flipped" : ""}>
        <Image className="front" src={card.src} alt="front-image" />
        <BackImage
          onClick={handleClick}
          className="back"
          src={backCard}
          alt="back-image"
        />
      </Card>
    </>
  );
};

export default CardView;
