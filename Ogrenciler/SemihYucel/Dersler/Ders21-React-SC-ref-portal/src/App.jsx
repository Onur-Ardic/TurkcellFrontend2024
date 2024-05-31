import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const divRef = useRef();

  return (
    <>
      <button onClick={() => console.log(divRef.current.textContent)}>Tıkla</button>

      <div ref={divRef}>ref Deneme Yazısı</div>
    </>
  )
}

export default App
