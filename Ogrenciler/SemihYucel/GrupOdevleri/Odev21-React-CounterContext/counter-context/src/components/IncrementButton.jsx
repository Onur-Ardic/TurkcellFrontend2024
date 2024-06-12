import React from 'react';
import { useCounter } from '../context/CounterContext';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const IncrementButton = () => {
  const { increment } = useCounter();
  return <Button onClick={increment}>Arttır</Button>;
};

export default IncrementButton;
