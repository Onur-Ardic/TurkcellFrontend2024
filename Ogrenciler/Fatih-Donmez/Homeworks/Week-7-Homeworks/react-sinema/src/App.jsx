import { useEffect, useState } from "react";
import "./App.css";
import AddMovieForm from "./components/AddMovieForm";
import { getFilmsFromDb } from "./api/MovieService";
import FilmCollection from "./components/FilmCollection";

function App() {
  const [films, setFilms] = useState([]);
  const formSubmitHandler = () => {
    fetchMovies();
  };
  const fetchMovies = async () => {
    try {
      const movies = await getFilmsFromDb();
      setFilms(movies);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  films.forEach((film) => {
    if (
      film.posterUrl === "" ||
      film.posterUrl === undefined ||
      film.posterUrl === null ||
      film.posterUrl.startsWith("http") === false
    ) {
      film.posterUrl =
        "https://upload.wikimedia.org/wikipedia/tr/6/6f/Turkcell_logo.png";
    }
  });

  return (
    <>
      <div className="container">
        <h1>Film Koleksiyonu</h1>
        <AddMovieForm formSubmitHandler={formSubmitHandler} />
        <div id="film-collection">
          {films
            ? films?.map((film) => (
                <FilmCollection
                  formSubmitHandler={formSubmitHandler}
                  film={film}
                  key={film.id}
                />
              ))
            : "Loading..."}
        </div>
      </div>
    </>
  );
}

export default App;
