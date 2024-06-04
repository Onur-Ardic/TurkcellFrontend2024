import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/HomePage/Home'
import Error from './components/ErroPage/Error'

function App() {
  const [user, setUser] = useState('')
  const [repos, setRepos] = useState([])
  const [error, setError] = useState(false)

  const getData = async () => {
    try {
      const userResponse = await fetch('https://api.github.com/users/Onur-Ardic')
      if (!userResponse.ok) {
        throw new Error('User data fetch failed')
      }
      const userData = await userResponse.json()
      setUser(userData)

      const reposResponse = await fetch('https://api.github.com/users/Onur-Ardic/repos')
      if (!reposResponse.ok) {
        throw new Error('Repos data fetch failed')
      }
      const reposData = await reposResponse.json()
      setRepos(reposData)
    } catch (error) {
      setError(true)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return <>{error ? <Error /> : <Home user={user} repos={repos} />}</>
}

export default App
