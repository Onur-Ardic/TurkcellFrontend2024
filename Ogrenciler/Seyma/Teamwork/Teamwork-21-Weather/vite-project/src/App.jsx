import './App.css'
import { useEffect, useState } from "react";
import { get } from './service/Api';
import { Layout } from './components/layout/Layout';

function App() {
  const [weather, setWeather] = useState([]);

  const fetchData = async () => {
    const result = await get("ankara");
    setWeather(result.result);
  };
  

  useEffect(() => {
    fetchData()
  }, [])

 console.log(weather)

  return (
    <>
    <div>
      <Layout/>
    </div>
 </>
)
}

export default App
