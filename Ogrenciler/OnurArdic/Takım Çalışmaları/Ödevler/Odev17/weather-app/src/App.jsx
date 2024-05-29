import { useState } from 'react'
import './App.css'
import InputGroup from './components/molecule/inputGroup'
import Card from './components/molecule/card'
import styled from './components/styles.module.css'

function App() {
  const [dataInfo, setDataInfo] = useState([])
  const [city, setCity] = useState('')

  function handler() {
    fetch(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`, {
      headers: {
        'Content-type': 'application/json',
        authorization: 'apikey 3nb0w5KYSjqnKgOrCPFmje:3cGh2KapR91zcIgTh7u9U5',
      },
    })
      .then((data) => data.json())
      .then((response) => setDataInfo(response))
      .catch((error) => alert(error + 'Hatası '))
  }

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  return (
    <>
      <InputGroup
        text={'Bir şehir giriniz.'}
        onChange={handleChange}
        value={city}
        btnText={<i className="bi bi-search"></i>}
        onClick={handler}
      />

      {(dataInfo.length < 1 && <h1 className={styled.alertTitle}>Lütfen bir şehir giriniz</h1>) || (
        <div className="card-wrapper">
          {dataInfo.result?.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      )}
    </>
  )
}

export default App
