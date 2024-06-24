import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export const Button = styled.button`
  background-color: #ceedc7;
  border: none;
  color: black;
  padding: 8px 15px;
  text-align: center;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
`;
export const Title = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const Text = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
