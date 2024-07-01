import React, { useState } from "react";
import Button from "../../atoms/button/Button";
import "./MovieCard.css";
import FormGroup from "../../molecules/formGroup/FormGroup";

const MovieCard = ({ movie, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState(movie);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie({
      ...editedMovie,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    onUpdate(editedMovie);
    setIsEditing(false);
  };

  return (
    <>
      <div className="card">
        {isEditing ? (
          <div className="card-edit">
            <FormGroup
              color="dark"
              label="Film Adı"
              name="title"
              onChange={handleChange}
              value={editedMovie.title}
            />
            <FormGroup
              color="dark"
              label="Yönetmen"
              name="director"
              onChange={handleChange}
              value={editedMovie.director}
            />
            <FormGroup
              color="dark"
              label="Kategori"
              name="category"
              onChange={handleChange}
              value={editedMovie.category}
            />
            <FormGroup
              color="dark"
              label="Çıkış Yılı"
              name="year"
              onChange={handleChange}
              value={editedMovie.year}
            />
            <FormGroup
              color="dark"
              label="Afiş URL"
              name="image"
              onChange={handleChange}
              value={editedMovie.image}
            />
            <Button type="submit" onClick={handleUpdate} text={"Güncelle"} />
          </div>
        ) : (
          <>
            <div className="card-image">
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className="card-body">
              <p className="card-title">{movie.title}</p>
              <p className="card-text">{movie.director}</p>
            </div>
            <div className="card-info">
              <span className="card-text">{movie.category} / </span>
              <span className="card-text">{movie.year}</span>
            </div>
          </>
        )}
        <div className="card-footer">
          <Button type="danger" text="Sil" onClick={onDelete} />
          <Button
            type={"warning"}
            text={isEditing ? "İptal" : "Düzenle"}
            onClick={() => setIsEditing(!isEditing)}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCard;
