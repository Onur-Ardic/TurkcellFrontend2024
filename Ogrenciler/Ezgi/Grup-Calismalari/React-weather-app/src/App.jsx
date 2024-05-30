import { useEffect, useState } from 'react'
import './App.css'
import { readData } from './api/Request'
import Navbar from './components/Navbar'
import ShowCase from './components/ShowCase'
import CardList from './components/CardList'

function App() {

  const [data, setData] = useState([])
  const [city, setCity] = useState("ankara")
  const [firstDay, setFirstDay] = useState([])

  const handleSubmit = async () => {
    const result = await readData(city)
    setData(result)
    setFirstDay(result.result[0])
    setCity("")
  }

  useEffect(() => {
    handleSubmit()
  }, [])





  return (
    <>
      <Navbar setCity={setCity} handleSubmit={handleSubmit} city={city}/>
      <ShowCase data={data} firstDay={firstDay}/>
      <div className="container">
        <CardList data={data} />
      </div>
    </>
  )
}

export default App
