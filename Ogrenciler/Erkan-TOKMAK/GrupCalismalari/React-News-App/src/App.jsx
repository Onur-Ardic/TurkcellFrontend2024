import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Router from './routes/Router'
import { getAllNews } from './Api/Api'
import { useEffect } from 'react'

function App() {

  const getData = async () => {
    const data = await getAllNews();
    console.log(data.articles);
  }

  useEffect(()=> {
    getData();
  },[])


  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App
