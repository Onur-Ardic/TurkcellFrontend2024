import React from "react";
import { GetButton } from "./styled";
function Button({ onClick, text }) {
  return <GetButton onClick={onClick}>{text}</GetButton>;
}
export default Button;
