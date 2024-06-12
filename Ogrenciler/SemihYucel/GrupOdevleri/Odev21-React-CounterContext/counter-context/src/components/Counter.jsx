import React from 'react';
import { useCounter } from '../context/CounterContext';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  font-size: 2rem;
  margin: 20px;
  text-align: center;
`;

const Counter = () => {
  const { count } = useCounter();
  return (
    <CounterWrapper>
      Sayaç: {count}
    </CounterWrapper>
  );
};

export default Counter;
