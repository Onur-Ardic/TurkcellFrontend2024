import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter App</h1>
        <Counter count={count} increment={increment} decrement={decrement} />
      </header>
    </div>
  );
}

export default App;
