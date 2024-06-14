import React from 'react';
import { CounterProvider } from './context/CounterContext';
import CounterDisplay from './components/CounterDisplay';
import CounterButton from './components/CounterButton';

const App = () => {
  return (
    <CounterProvider>
      <div>
        <CounterDisplay />
        <CounterButton />
      </div>
    </CounterProvider>
  );
};

export default App;
