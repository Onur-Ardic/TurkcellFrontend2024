import { useEffect, useState } from "react";
import { addFilmToDb } from "../api/MovieService";
const AddMovieForm = ({ formSubmitHandler }) => {
  const [film, setFilm] = useState({
    id: "",
    filmName: "",
    director: "",
    year: "",
    genre: "",
    posterUrl: "",
  });
  let filmId = Math.floor(Math.random() * 10000);

  useEffect(() => {
    setFilm({ ...film, id: `${filmId}` });
  }, []);

  const handleInputs = (e) => {
    setFilm({ ...film, [e.target.id]: e.target.value });
  };

  const addFilm = async (e) => {
    e.preventDefault();
    const response = await addFilmToDb(film);
    if (response.id) {
      filmId = Math.floor(Math.random() * 10000);
      setFilm({ ...film, id: `${filmId}` });
      formSubmitHandler();
    }
  };
  return (
    <form id="film-form" onSubmit={addFilm}>
      <input
        type="text"
        id="filmName"
        placeholder="Film Adı"
        required
        onChange={(e) => {
          handleInputs(e);
        }}
      />
      <input
        type="text"
        id="director"
        placeholder="Yönetmen"
        required
        onChange={(e) => {
          handleInputs(e);
        }}
      />
      <input
        type="number"
        id="year"
        placeholder="Yıl"
        min="1900"
        max="2100"
        required
        onChange={(e) => {
          handleInputs(e);
        }}
      />
      <input
        type="text"
        id="genre"
        placeholder="Tür"
        required
        onChange={(e) => {
          handleInputs(e);
        }}
      />
      <input
        type="text"
        id="posterUrl"
        placeholder="Afiş URL'si"
        required
        onChange={(e) => {
          handleInputs(e);
        }}
      />
      <button type="submit" id="addFilm">
        Film Ekle
      </button>
      <button type="button" id="updateFilm" style={{ display: "none" }}>
        Güncelle
      </button>
    </form>
  );
};

export default AddMovieForm;
