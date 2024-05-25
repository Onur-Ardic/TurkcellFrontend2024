import React, { useState } from 'react';

const MovieCard = ({ movie, deleteMovie, updateMovie }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(movie.title);
  const [updatedDirector, setUpdatedDirector] = useState(movie.director);
  const [updatedYear, setUpdatedYear] = useState(movie.year);
  const [updatedImage, setUpdatedImage] = useState(movie.image);

  const handleUpdate = () => {
    updateMovie(movie.id, { title: updatedTitle, director: updatedDirector, year: updatedYear, image: updatedImage });
    setIsEditing(false);
  };

  return (
    <div className="movie-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <input
            type="text"
            value={updatedDirector}
            onChange={(e) => setUpdatedDirector(e.target.value)}
          />
          <input
            type="text"
            value={updatedYear}
            onChange={(e) => setUpdatedYear(e.target.value)}
          />
          <input
            type="text"
            value={updatedImage}
            onChange={(e) => setUpdatedImage(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <img src={movie.image} alt={`${movie.title} poster`} className="movie-image" />
          <h3>{movie.title}</h3>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </div>
  );
};

export default MovieCard;
