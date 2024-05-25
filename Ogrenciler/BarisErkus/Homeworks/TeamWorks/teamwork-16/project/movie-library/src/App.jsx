import './App.css'
import { useEffect, useState } from 'react'
import CardList from './components/CardList'
import InputField from './components/InputField'

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
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <form onSubmit={addToCollection}>
                <InputField
                  id="imageInput"
                  label="Film Afişi"
                  type="text"
                  name="img"
                  value={form.img}
                  onChange={handleInputChange}
                />
                <InputField
                  id="movieNameInput"
                  label="Film Adı"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                />
                <InputField
                  id="movieDesc"
                  label="Açıklama"
                  type="text"
                  name="desc"
                  value={form.desc}
                  onChange={handleInputChange}
                />
                <div className="d-flex justify-content-between flex-wrap">
                  <InputField
                    id="directorInput"
                    label="Yönetmen"
                    type="text"
                    name="director"
                    value={form.director}
                    onChange={handleInputChange}
                    className="col-3"
                  />
                  <InputField
                    id="yearInput"
                    label="Yılı"
                    type="number"
                    name="year"
                    value={form.year}
                    onChange={handleInputChange}
                    className="col-3"
                  />
                  <InputField
                    id="categoryInput"
                    label="Kategori"
                    type="text"
                    name="category"
                    value={form.category}
                    onChange={handleInputChange}
                    className="col-3"
                  />
                </div>
                <div className="d-flex justify-content-end mt-5">
                  <button type="submit" className="btn btn-primary btn-lg">Koleksiyona Ekle</button>
                </div>
              </form>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-danger btn-sm" onClick={deleteAllItems}>Tüm Koleksiyonu Temizle</button>
              </div>
            </div>
          </div>
        </div>
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
