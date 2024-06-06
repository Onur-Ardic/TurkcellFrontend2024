import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  padding: 0.5em 3em;
  border: 2px solid #bf4f74;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Input = styled.input`
  font-size: 1em;
  margin: 1em;
  border-radius: 5px;
  outline: none;
  padding: 0.5em 1.5em;
  border: 1px solid black;
`;
