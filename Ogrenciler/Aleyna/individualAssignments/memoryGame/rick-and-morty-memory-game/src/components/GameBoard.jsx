import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Board, ResetButton } from "../styled/StyleComponent";

const cardImages = [
  { id: 1, src: "rick.jpg" },
  { id: 2, src: "morty.png" },
  { id: 3, src: "summer.jpg" },
  { id: 4, src: "beth.webp" },
  { id: 5, src: "jerry.png" },
];

const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
  return shuffledCards;
};

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  useEffect(() => {
    if (matchedCards.length === cardImages.length * 2) {
      setTimeout(() => alert("Oyun Bitti!"), 500);
    }
  }, [matchedCards]);

  const handleCardClick = (card) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(card) ||
      matchedCards.includes(card)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      if (newFlippedCards[0].src === newFlippedCards[1].src) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  const handleResetGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedCards([]);
  };

  return (
    <Board>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleCardClick={handleCardClick}
          flipped={flippedCards.includes(card) || matchedCards.includes(card)}
          matched={matchedCards.includes(card)}
        />
      ))}
      {matchedCards.length === cardImages.length * 2 && (
        <ResetButton onClick={handleResetGame}>Tekrar Oyna</ResetButton>
      )}
    </Board>
  );
};

export default GameBoard;
