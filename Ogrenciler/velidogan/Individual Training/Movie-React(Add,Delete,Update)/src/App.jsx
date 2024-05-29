import { useState,useEffect } from 'react';
import './App.css';
import MovieCardForm from './components/MovieCardForm';
import MovieCard from './components/MovieCard';
import Request from './request/request';
import Movie from "./components/Movie"

function App() {
  const [movies,setMovies] = useState([])
  const [movie,setMovie] = useState(new Movie({id:"",name:"",author:"",category:"",date:"",imgUrl:""}))
  const [editStatus,setEditStatus] = useState(false)

  const fetchMovies = async()=>{
    const response = await Request.get("http://localhost:3000/movies")
    setMovies(response)
  }

  useEffect(() => {
    fetchMovies();
  }, [])
  
  const addUpdateMovie = async (e) => {
    e.preventDefault();
    if(!editStatus){
      movie.id=crypto.randomUUID();
      const response = await Request.post(`http://localhost:3000/movies`,movie)
    }else{
      const response = await Request.put(`http://localhost:3000/movies/${movie.id}`,movie)
      setEditStatus(false);
    }
    fetchMovies();
    setMovie(new Movie({id:"",name:"",author:"",category:"",date:"",imgUrl:""}))
  }

  const deleteMovie = async (e,id) => {
    e.preventDefault();
    await Request.delete(`http://localhost:3000/movies/${id}`);
    fetchMovies();
  }

  return (
    <>
      <MovieCardForm movie={movie} addUpdateMovie={addUpdateMovie} setMovie={setMovie}/>
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
          {
            movies?.map((movie) => (<MovieCard key={movie.id} deleteMovie={deleteMovie} movie={movie} setMovie={setMovie} setEditStatus={setEditStatus} />))
          }
        </div>
      </div>
    </>
  )
}

export default App