import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { AccordionWrapper } from "./styled";

const About = () => {
  return (
    <AccordionWrapper className="container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Onur Ardıç</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor sit amet.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Buğra Özkahraman</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor sit amet.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Atakan Altunbaş</Accordion.Header>
          <Accordion.Body>
            I have joined Turkcell's Front-End Bootcamp in March 2024 and I
            continue. I want to improve myself in Web Programming.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </AccordionWrapper>
  );
};

export default About;
