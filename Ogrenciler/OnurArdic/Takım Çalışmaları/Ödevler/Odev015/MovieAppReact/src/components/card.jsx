import { useState, useEffect } from 'react'
import Form from './form'

const Card = () => {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/movie')
      .then((result) => result.json())
      .then((data) => {
        setMovieData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const addMovie = (newMovie) => {
    setMovieData([...movieData, newMovie])
  }

  const deleteHandler = (id) => {
    console.log(typeof id)
    fetch(`http://localhost:3000/movie/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setMovieData(movieData.filter((movie) => movie.id !== id))
        } else {
          console.log('error')
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <Form addMovie={addMovie} />
      <div className="card-wrapper flex gap-3 mt-20">
        {movieData.map((movie) => (
          <div key={movie.id} className="card border p-0">
            <div className="card-image">
              <img
                src={movie.moviePoster}
                className="card-img-top w-[310px] h-[320px] "
                alt={movie.movieName}
              />
            </div>
            <div className="card-body p-1">
              <h5 className="movie-title text-violet-600">{movie.movieName}</h5>
              <p className="movie-director">Yönetmen: {movie.movieDirector}</p>
              <p className="movie-year">{movie.movieYear}</p>
              <p className="movie-category">{movie.movieCategories}</p>
            </div>

            <div className="btn-wrapper flex gap-3">
              <button className="btn btn-primary border bg-yellow-400 p-1 m-1">Güncelle</button>
              <button
                className="btn btn-danger p-1 m-1 bg-red-400 w-20"
                onClick={() => deleteHandler(movie.id)}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card
