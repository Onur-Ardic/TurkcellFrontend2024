import React from 'react';
import { CounterProvider } from './context/CounterContext';
import Counter from './components/Counter';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const App = () => {
  return (
    <CounterProvider>
      <AppWrapper>
        <Counter />
        <div>
          <IncrementButton />
          <DecrementButton />
        </div>
      </AppWrapper>
    </CounterProvider>
  );
};

export default App;
