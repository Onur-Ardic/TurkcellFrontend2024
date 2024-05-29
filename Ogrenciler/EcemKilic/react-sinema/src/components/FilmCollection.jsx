import React from "react";
import { deleteFilmFromDb } from "../api/MovieService";

const FilmCollection = ({ film, formSubmitHandler }) => {
  const deleteHandler = () => {
    deleteFilmFromDb(film.id );
    formSubmitHandler();
  }
  return (
    <div className="film-card">
      <div class = "film-details">
        <img src={film.posterUrl} alt={film.name} />
        <div class = "film-info">
          <strong>{film.filmName}</strong>
          <p>Yönetmen: {film.director}</p>
          <p>Yıl: {film.year}</p>
          <p>Tür: {film.genre}</p>
        </div>
        <div class="card-buttons">
          <button>Güncelle</button>
          <button onClick={deleteHandler}>Sil</button>
        </div>
      </div>
    </div>
  );
};

export default FilmCollection;
