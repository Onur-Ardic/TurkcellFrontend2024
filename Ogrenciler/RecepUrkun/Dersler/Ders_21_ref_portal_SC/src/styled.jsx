import styled from "styled-components";

export const Button1 = styled.button`
  background-color: red;
  border-radius: 25px;
`;
export const Button2 = styled(Button1)`
  background-color: green;
  font-size: ${(props) => props.size}px;
`;
