import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "../styled";

const ModalView = ({ show, setShow, shuffleCards }) => {
  const handleClose = () => setShow(false);
  const newGame = () => {
    shuffleCards();
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Skor:50</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tebrikler oyunu kazandınız</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={newGame}>
            New Game
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalView;
