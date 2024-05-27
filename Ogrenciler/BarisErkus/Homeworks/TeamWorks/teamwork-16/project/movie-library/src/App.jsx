import './App.css'
import { useEffect, useState } from 'react'
import CardList from './components/CardList'
import Form from './components/Form'

function App() {
  const [movies, setMovies] = useState([])
  const [form, setForm] = useState({
    img: '',
    name: '',
    desc: '',
    director: '',
    year: '',
    category: ''
  })
  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch('http://localhost:3000/movies')
      const data = await response.json()
      setMovies(data)
    }
    getMovies()
  }, [])
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }
  const addToCollection = async (e) => {
    e.preventDefault()
    const { img, name, desc, director, year, category } = form
    if (!img || !name || !desc || !director || !year || !category) {
      return alert('Please fill in all fields')
    }

    const newMovie = {
      id: crypto.randomUUID(),
      ...form
    }

    const response = await fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    })

    const data = await response.json()
    setMovies([...movies, data])
    setForm({
      img: '',
      name: '',
      desc: '',
      director: '',
      year: '',
      category: ''
    })
  }
  const deleteAllItems = () => {
    movies.map(async movie =>
      await fetch(`http://localhost:3000/movies/${movie.id}`, {
        method: 'DELETE'
      })
    )
    setMovies([])
  }
  const updateMovie = (id) => {
    const movie = movies.find(movie => movie.id === id)
    setForm(movie)
    deleteMovie(id)
  }
  const deleteMovie = async (id) => {
    await fetch(`http://localhost:3000/movies/${id}`, {
      method: 'DELETE'
    })
    setMovies(movies.filter(movie => movie.id !== id))
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <Form addToCollection={addToCollection} form={form} deleteAllItems={deleteAllItems} handleInputChange={handleInputChange} />
        {movies.length > 0 ? (
          <CardList movies={movies} updateMovie={updateMovie} deleteMovie={deleteMovie} />
        ) : (
          <h1>Not Found</h1>
        )}
      </div>
    </div>
  )
}


export default App
