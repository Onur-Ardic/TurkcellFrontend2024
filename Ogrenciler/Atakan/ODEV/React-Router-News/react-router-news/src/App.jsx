import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Home/Navbar/Navbar'

let token = 'fb44ce1bd88740d4990d843834598291'
function App() {
  const [onData, setOnData] = useState({})
  const [onCountry, setOnCountry] = useState('tr')

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${onCountry}&apiKey=${token}`)
      .then((res) => res.json())
      .then((data) => {
        setOnData(data.articles)
      })
  }, [onCountry])

  return (
    <>
      {console.log(onData)}
      {console.log(onCountry)}
      <Navbar countryHandler={setOnCountry} />
    </>
  )
}

export default App
