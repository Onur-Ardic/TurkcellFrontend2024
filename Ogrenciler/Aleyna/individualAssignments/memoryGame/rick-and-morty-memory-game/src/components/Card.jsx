import React from "react";
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
} from "../styled/StyleComponent";
const Card = ({ card, handleCardClick, flipped, matched }) => {
  return (
    <CardContainer onClick={() => handleCardClick(card)} matched={matched}>
      <CardInner flipped={flipped}>
        <CardFront />
        <CardBack src={card.src} />
      </CardInner>
    </CardContainer>
  );
};

export default Card;
