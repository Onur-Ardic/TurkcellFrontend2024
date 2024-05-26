import React, { useEffect } from "react";
import FilmCard from "./FilmCard";

const FilmList = ({ films, deleteFilm, fetchFilms }) => {
  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return (
    <div id="filmKoleksiyonu" className="row">
      {films.map((film, index) => (
        <FilmCard key={film.id} film={film} onDelete={deleteFilm} />
      ))}
    </div>
  );
};

export default FilmList;
