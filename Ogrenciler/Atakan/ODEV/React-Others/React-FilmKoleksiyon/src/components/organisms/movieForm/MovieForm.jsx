import React, { useState } from "react";
import FormGroup from "../../molecules/formGroup/FormGroup";
import Button from "../../atoms/button/Button";
import "./MovieForm.css";

const MovieForm = ({ onAdd }) => {
  const defaultImage =
    "https://img.freepik.com/premium-vector/movie-theater-signboard-blue_34230-295.jpg";

  const [movie, setMovie] = useState({
    title: "",
    director: "",
    category: "",
    year: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      movie.title == "" ||
      movie.director == "" ||
      movie.category == "" ||
      movie.year == ""
    ) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }
    if (movie.image == "") {
      movie.image = defaultImage;
    }
    onAdd(movie);
    setMovie({
      title: "",
      director: "",
      category: "",
      year: "",
      image: "",
    });
  };

  return (
    <>
      <form className="movie-form" onSubmit={handleSubmit}>
        <FormGroup
          label="Film Adı"
          name="title"
          onChange={handleChange}
          value={movie.title}
        />
        <FormGroup
          label="Yönetmen"
          name="director"
          onChange={handleChange}
          value={movie.director}
        />
        <FormGroup
          label="Kategori"
          name="category"
          onChange={handleChange}
          value={movie.category}
        />
        <FormGroup
          label="Çıkış Yılı"
          name="year"
          onChange={handleChange}
          value={movie.year}
        />
        <FormGroup
          label="Afiş URL"
          name="image"
          onChange={handleChange}
          value={movie.image}
        />
        <div className="form-button">
          <Button text="Ekle" type="submit" />
        </div>
      </form>
    </>
  );
};

export default MovieForm;
