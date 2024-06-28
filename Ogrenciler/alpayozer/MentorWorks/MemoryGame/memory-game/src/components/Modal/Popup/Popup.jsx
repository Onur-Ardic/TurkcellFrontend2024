import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "../../../styled";

const Popup = ({ show, setShow, shuffleCards, score }) => {
  const handleClose = () => setShow(false);
  const newGame = () => {
    shuffleCards();
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Score:{score}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congratulations you won the game</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={newGame}>New Game</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
