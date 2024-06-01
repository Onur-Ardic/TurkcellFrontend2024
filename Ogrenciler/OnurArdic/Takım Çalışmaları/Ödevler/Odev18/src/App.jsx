import { useState } from 'react'
import './App.css'
import ManipulationGroup from './components/molecules/ManipulationGroup'

function App() {
  const [onData, setOnData] = useState('')
  const [userName, setUserName] = useState('')

  const clickHandler = () => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((data) => data.json())
      .then((response) => setOnData(response))
      .catch((error) => alert(error.message))
  }
  const buttons = [
    { text: 'Ara', onClick: () => clickHandler() },
    { text: 'Button 2', onClick: () => console.log('Button 2 clicked') },
    { text: 'Button 3', onClick: () => console.log('Button 3 clicked') },
    { text: 'Button 4', onClick: () => console.log('Button 4 clicked') },
  ]
  return (
    <>
      {console.log(onData)}
      <ManipulationGroup
        buttons={buttons}
        placeholder={'Bir isim giriniz'}
        onChange={setUserName}
        value={userName}
        type={'text'}
      />
    </>
  )
}

export default App
