import { useEffect, useState } from "react";
import "./App.css";
import CardView from "./components/CardView";
import { Button, GridContainer, Text, Title } from "./styled";
import { images } from "./assets/data";
import ModalView from "./components/ModalView";
import InfoModal from "./components/InfoModal";

function App() {
  const [cards, setCards] = useState([]);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = shuffleArray([...images, ...images]).map(
      (card, index) => ({
        ...card,
        id: `${Date.now()}-${index}-${Math.random()}`,
      })
    );
    setChoiseOne(null);
    setChoiseTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleChoise = (card) => {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  };

  useEffect(() => {
    if (choiseOne && choiseTwo) {
      setDisabled(true);
      if (choiseOne.src === choiseTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiseOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        console.log("matched");
        setScore(score + 1);
        resetTurn();
      } else {
        console.log("dont match");
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
      controlScore();
    }
  }, [choiseOne, choiseTwo]);
  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurns(turns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const controlScore = () => {
    //düzeltme yapılacak
    if (score === 17) {
      setShow(true);
    }
  };

  return (
    <div className="bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <Title>Memory Game</Title>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Text>Turns: {turns}</Text>
              </div>
              <div className="col-lg-6">
                <Text>Score: {score}</Text>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-white">
            <Button onClick={shuffleCards}>New Game</Button>
            <InfoModal />
          </div>
        </div>
        <ModalView show={show} setShow={setShow} shuffleCards={shuffleCards} />
        <GridContainer>
          {cards.map((card) => (
            <CardView
              key={card.id}
              handleChoise={handleChoise}
              card={card}
              flipped={card === choiseOne || card === choiseTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </GridContainer>
      </div>
    </div>
  );
}

export default App;
