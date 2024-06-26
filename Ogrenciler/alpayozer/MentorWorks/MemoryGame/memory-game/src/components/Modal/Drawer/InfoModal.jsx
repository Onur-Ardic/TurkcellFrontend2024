import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import InfoCard from "./InfoCard";
import { images } from "../../../assets/data";
import { Button } from "../../../styled";

const InfoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button onClick={handleShow}>Technologies</Button>
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
