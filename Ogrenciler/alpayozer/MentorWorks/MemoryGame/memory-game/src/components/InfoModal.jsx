import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import InfoCard from "./InfoCard";
import { images } from "../assets/data";

const InfoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Technologies</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {images.map((data) => (
            <InfoCard key={data.id} data={data} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default InfoModal;
