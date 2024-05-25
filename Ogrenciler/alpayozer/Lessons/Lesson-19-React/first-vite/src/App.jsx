import './App.css'
import DenemeClass from './components/DenemeClass'
import Hello from './components/Hello'

function App() {
  return (
    <>
      <Hello title="React" age={25}/>
      <DenemeClass isim="Alpay"/>
    </>
  )
}

export default App
