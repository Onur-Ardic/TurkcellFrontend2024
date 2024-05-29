import { useState } from 'react';
import './App.css'
import InputGroup from './components/molecule/inputGroup'
import Card from './components/molecule/card';

function App() {

  const [dataInfo, setDataInfo] = useState([]);
  const [city, setCity] = useState("");

  function handler(){
    fetch(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`, {headers: {"Content-type":"application/json", "authorization":"apikey 3nb0w5KYSjqnKgOrCPFmje:3cGh2KapR91zcIgTh7u9U5"}})
          .then(data => data.json())
          .then(response => setDataInfo(response));
  }

  const handleChange = (e) => {
    setCity(e.target.value);
  }
  

  return (
    <>
      
      <InputGroup text={"Bir şehir giriniz"} onChange={handleChange} value={city} btnText={"Getir"} onClick={handler}/>
      {
        dataInfo.result?.map((data,index) => (
          <Card key={index} data={data}/>
        ))
        // console.log(dataInfo)
      }
    </>
  )
}

export default App
