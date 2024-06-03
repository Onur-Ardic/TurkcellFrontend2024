import styled from "styled-components";
import { primary, quinary, tertiary } from "../colors";

export const CustomButton = styled.button`
  background-color: ${(props) => props["background-color"]};
  color: white;
  border-radius: 5px;
  padding: 10px 25px;
  border: none;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${quinary};
  }
`;

export const CustomInput = styled.input`
  background-color: ${primary};
  color: white;
  border: 1px solid ${tertiary};
  border-radius: 5px;
  padding: 10px 5px;
  margin-right: 10px;
  &::placeholder {
    color: white;
  }
`;
