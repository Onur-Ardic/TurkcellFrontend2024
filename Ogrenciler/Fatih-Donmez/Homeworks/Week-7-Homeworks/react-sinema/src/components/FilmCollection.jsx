import React, { useState } from "react";
import { deleteFromDb, updateFilmInDb } from "../api/MovieService";

const FilmCollection = ({ film, formSubmitHandler }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedFilm, setUpdatedFilm] = useState(film);

  const handleDelete = () => {
    deleteFromDb(film.id).then(() => {
      formSubmitHandler();
    });
  };

  const handleUpdate = () => {
    updateFilmInDb(updatedFilm).then(() => {
      setIsEditing(false);
      formSubmitHandler();
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFilm({ ...updatedFilm, [name]: value });
  };

  return (
    <div className="film-card">
      <div className="film-details">
        <img src={film.posterUrl} alt={film.name} />
        <div className="film-info">
          <strong>{film.filmName}</strong>
          <p>Yönetmen: {film.director}</p>
          <p>Yıl: {film.year}</p>
          <p>Tür: {film.genre}</p>
        </div>
        <div className="card-buttons">
          <button onClick={() => setIsEditing(true)}>Güncelle</button>
          <button onClick={handleDelete}>Sil</button>
        </div>
      </div>
      {isEditing && (
        <div className="edit-form">
          <h3>Film Güncelle</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <input
              type="text"
              name="filmName"
              value={updatedFilm.filmName}
              onChange={handleChange}
              placeholder="Film Adı"
            />
            <input
              type="text"
              name="director"
              value={updatedFilm.director}
              onChange={handleChange}
              placeholder="Yönetmen"
            />
            <input
              type="text"
              name="year"
              value={updatedFilm.year}
              onChange={handleChange}
              placeholder="Yıl"
            />
            <input
              type="text"
              name="genre"
              value={updatedFilm.genre}
              onChange={handleChange}
              placeholder="Tür"
            />
            <button type="submit">Kaydet</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              İptal
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilmCollection;
