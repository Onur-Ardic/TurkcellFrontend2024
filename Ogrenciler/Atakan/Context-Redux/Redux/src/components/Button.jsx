import React from "react";
import { StyledButton } from "./Styled";

const Button = ({ type, onClick, text, style }) => {
  return (
    <>
      <StyledButton type={type} onClick={onClick} style={style}>
        {text}
      </StyledButton>
    </>
  );
};

export default Button;
