import React from "react";
import StyledCard from "./Card.styled";
import { Logo } from "../header/Header.styled";
import Foto from "../../assets/pc.png";

const Card = ({ title, body, image, id }) => {
  // console.log(item)
  // const {title, body} = item

  return (
    <StyledCard odd={id % 2 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <Logo src={Foto}></Logo>
      </div>
    </StyledCard>
  );
};

export default Card;
