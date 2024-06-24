// src/styled/index.js
import styled from "styled-components";

export const DeleteButton = styled.button`
  background-color: #fafafa;
  color: black;
  margin: 5px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: white;
  }
`;

export const UpdateButton = styled.button`
  background-color: #fafafa;
  color: black;
  margin: 5px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const TodoLi = styled.li`
  border: 1px solid white;
  list-style-type: none;
  margin: 5px;
  border-radius: 10px;
  padding: 10px;
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;
  padding: 0;
  margin: 0 auto;
`;

export const TodoInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

export const TodoButton = styled.button`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #218838;
  }
`;
