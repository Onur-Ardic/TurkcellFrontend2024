import { useState, useEffect } from "react"
import { deleteMovie, getMovies } from "../request/request"

const url = "http://localhost:3000/movies"

// Components
import MovieCard from "./components/MovieCard"

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies(url).then((movies) => setMovies(movies))
    deleteMovie("http://localhost:3000/movies/1")
  }, [])

  return (
    <>
      <MovieCard movies={movies} />
    </>
  )
}

export default App