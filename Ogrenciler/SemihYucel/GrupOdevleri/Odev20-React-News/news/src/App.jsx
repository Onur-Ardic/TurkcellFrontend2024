import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getData } from './assets/components/Request'

function App() {
  const [news, setNews] = useState([]);
  const fetchData = async () => {
    const result = await getData();
    setNews(result.articles);
  }

  useEffect(() => {
    fetchData();
  }, [])
    console.log(news);
  return (
    <>
      
    </>
  )
}

export default App
