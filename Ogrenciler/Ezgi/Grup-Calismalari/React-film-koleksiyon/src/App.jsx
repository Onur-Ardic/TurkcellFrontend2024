
import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/organisms/movieCard/MovieCard'
import MovieForm from './components/organisms/movieForm/MovieForm'
import { addMovie, deleteMovie, getAllMovies } from './service/Api'


function App() {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchMovies()
  },[])

  const addMovieUI = async(movie) => {
    await addMovie(movie)
    setMovies([...movies, movie])
  }
 
  const fetchMovies = async() => {
    const allMovies = await getAllMovies()
    setMovies(allMovies.data)
  }

  const deleteMovieUI = async(id) => {
    await deleteMovie(id)
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  

  return (
    <>
      <MovieForm onAdd = {addMovieUI} />
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onDelete={() => deleteMovieUI(movie.id)}/> 
      ))}
    </>
  )
}

export default App
