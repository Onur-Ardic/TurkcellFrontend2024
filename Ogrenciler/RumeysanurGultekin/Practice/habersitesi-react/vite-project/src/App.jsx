import { useState } from 'react'
import Request1 from './Request1'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const getNews = () => {
    Request1.getNews().then((data) => console.log(data))
  }
  return (
    <>
      <button onClick={getNews}>Ekle</button>
    </>
  )
}

export default App
