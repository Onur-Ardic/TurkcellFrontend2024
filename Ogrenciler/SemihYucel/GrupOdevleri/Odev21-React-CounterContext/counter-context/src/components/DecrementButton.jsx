import React from 'react';
import { useCounter } from '../context/CounterContext';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;

const DecrementButton = () => {
  const { decrement } = useCounter();
  return <Button onClick={decrement}>Azalt</Button>;
};

export default DecrementButton;
