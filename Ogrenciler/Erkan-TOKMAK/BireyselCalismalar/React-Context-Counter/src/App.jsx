import './App.css'
import { useCounter } from './context/CounterContext'


function App() {

  const {counter, setCounter} = useCounter()

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={()=> setCounter(counter + 1)}>+</button>
      <button onClick={()=> setCounter(counter - 1)}>-</button>
    </>
  )
}

export default App
