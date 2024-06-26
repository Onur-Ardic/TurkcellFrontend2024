import styled from "styled-components";

export const Background = styled.div`
  background-color: #86c8bc;
  height: 100vh;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  justify-items: center;
`;

export const Button = styled.button`
  background-color: #ceedc7;
  border: none;
  color: black;
  padding: 8px 15px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
`;
export const Title = styled.p`
  color: black;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const Text = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;
