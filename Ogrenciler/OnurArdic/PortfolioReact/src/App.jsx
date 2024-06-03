import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  const [user, setUser] = useState('')
  const [repos, setRepos] = useState([])

  const getData = async () => {
    await fetch('https://api.github.com/users/Onur-Ardic')
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
        fetch('https://api.github.com/users/Onur-Ardic/repos')
          .then((response) => response.json())
          .then((data) => {
            setRepos(data)
          })
      }, [])
      .catch((error) => alert(error))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <Navbar />
      <Hero user={user} />
      <About />
      <Portfolio repos={repos} />
    </>
  )
}

export default App
