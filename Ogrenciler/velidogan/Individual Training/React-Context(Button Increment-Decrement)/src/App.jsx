import './App.css'
import ButtonIncrement from './components/ButtonIncrement'
import ButtonDecrement from './components/ButtonDecrement'
import { useContext } from 'react'
import { CountContext } from './context/CountProvider'

function App() {
  const {count} = useContext(CountContext);
  return (
    <>
      <h1>Count</h1>
      <p>{count}</p>
      <div style={{display:"flex",gap:5}}>
        <ButtonIncrement />
        <ButtonDecrement />
      </div>
    </>
  )
}

export default App
