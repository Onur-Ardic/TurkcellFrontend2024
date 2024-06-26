import { useEffect, useState } from "react";
import CardView from "./components/Card/CardView";
import { Background, Button, GridContainer, Text, Title } from "./styled";
import { images } from "./assets/data";
import ModalView from "./components/Modal/Popup/ModalView";
import InfoModal from "./components/Modal/Drawer/InfoModal";
import { Col, Container, Row } from "react-bootstrap";

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
    setScore(0);
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
    <Background>
      <Container>
        <Row className="py-3">
          <Title>Memory Game</Title>
        </Row>
        <Row className="text-center">
          <Col lg={6} sm={6} xs={6}>
            <Button onClick={shuffleCards}>New Game</Button>
          </Col>
          <Col lg={6} sm={6} xs={6}>
            <InfoModal />
          </Col>
        </Row>
        <Row className="text-center my-2">
          <Col lg={6} sm={6} xs={6}>
            <Text>Turns: {turns}</Text>
          </Col>
          <Col lg={6} sm={6} xs={6}>
            <Text>Score: {score}</Text>
          </Col>
        </Row>
        <ModalView
          score={turns}
          show={show}
          setShow={setShow}
          shuffleCards={shuffleCards}
        />
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
      </Container>
    </Background>
  );
}

export default App;
