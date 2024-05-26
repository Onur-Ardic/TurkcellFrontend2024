import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmForm from "./components/FilmForm";
import FilmList from "./components/FilmList";

const App = () => {
  const [films, setFilms] = useState([]);

  const fetchFilms = async () => {
    try {
      const response = await axios.get("http://localhost:3001/films");
      setFilms(response.data);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  const addFilm = async (newFilm) => {
    try {
      await axios.post("http://localhost:3001/films", newFilm);
      fetchFilms();
    } catch (error) {
      console.error("Error adding film:", error);
    }
  };

  const deleteFilm = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/films/${id}`);
      fetchFilms();
    } catch (error) {
      console.error("Error deleting film:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Film Ekle</h1>
      <FilmForm addFilm={addFilm} />
      <h1>Film Koleksiyonu</h1>
      <FilmList films={films} deleteFilm={deleteFilm} fetchFilms={fetchFilms} />
    </div>
  );
};

export default App;
