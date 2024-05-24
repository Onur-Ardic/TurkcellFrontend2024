import { useState } from 'react'
import './App.css'
import Deneme from "./components/Deneme";
// import DenemeClass from "./components/DenemeClass";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Deneme isim="Veli" yas={23}/>
      <Deneme isim="Veli"/>
      <Deneme isim="Veli" yas={26}/>
      {/* <DenemeClass isim="Veli"/> */}
    </>
  )
}

export default App
