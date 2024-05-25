import { useState } from 'react'

const Form = ({ addMovie }) => {
  const [onName, setMovieName] = useState('')
  const [onDirector, setOnDirector] = useState('')
  const [onMovieYear, setMovieYear] = useState('')
  const [onCategories, setOnCategories] = useState('')
  const [onPoster, setOnPoster] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 1000).toString()
    const movieName = onName
    const movieDirector = onDirector
    const movieYear = onMovieYear
    const movieCategories = onCategories
    const moviePoster = onPoster

    if (movieName && movieDirector && movieYear && movieCategories && moviePoster) {
      fetch('http://localhost:3000/movie', {
        method: 'POST',
        body: JSON.stringify({
          id,
          movieName,
          movieDirector,
          movieYear,
          movieCategories,
          moviePoster,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          addMovie(data)
          setMovieName('')
          setOnDirector('')
          setMovieYear('')
          setOnCategories('')
          setOnPoster('')
          console.log('film', data)
        })
    }
  }

  return (
    <>
      <form onSubmit={submitHandler} className="flex gap-1 justify-center">
        <div className="form-input">
          <input
            type="text"
            placeholder="Film Adı"
            className="border p-1"
            value={onName}
            onChange={(e) => {
              setMovieName(e.target.value)
            }}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            placeholder="Film Yönetmeni"
            className="border p-1"
            value={onDirector}
            onChange={(e) => {
              setOnDirector(e.target.value)
            }}
          />
        </div>

        <div className="form-input">
          <select
            className="border p-1"
            value={onCategories}
            onChange={(e) => {
              setOnCategories(e.target.value)
            }}
          >
            <option value="">Kategori Seç</option>
            <option value="Aksiyon">Aksiyon</option>
            <option value="Drama">Drama</option>
            <option value="Gerilim">Gerilim</option>
          </select>
        </div>

        <div className="form-input">
          <input
            type="text"
            placeholder="Filmin çıkış yılı"
            className="border p-1"
            value={onMovieYear}
            onChange={(e) => {
              setMovieYear(e.target.value)
            }}
          />
        </div>

        <div className="form-input">
          <input
            type="text"
            placeholder="Afiş Resmi"
            className="border p-1"
            value={onPoster}
            onChange={(e) => {
              setOnPoster(e.target.value)
            }}
          />
        </div>

        <div className="form-input">
          <button type="submit" className="p-1 border bg-slate-300">
            Filmi Kaydet
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
