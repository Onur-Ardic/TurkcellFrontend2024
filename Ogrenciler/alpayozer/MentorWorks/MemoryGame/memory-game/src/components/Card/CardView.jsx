import React from "react";
import { BackImage, Card, Image } from "./card-styled";
import backCard from "/logo.webp";

const CardView = ({ card, handleChoise, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoise(card);
    }
  };

  return (
    <>
      <Card className={flipped ? "flipped" : ""}>
        <Image className="front" src={card.src} alt={card.src} loading="lazy" />
        <BackImage
          loading="lazy"
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
