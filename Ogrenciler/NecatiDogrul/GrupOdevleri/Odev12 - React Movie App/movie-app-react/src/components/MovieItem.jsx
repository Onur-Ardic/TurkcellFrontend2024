import React, { useState } from 'react';

const MovieItem = ({ movie, deleteMovie, updateMovie }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(movie.title);
  const [updatedDirector, setUpdatedDirector] = useState(movie.director);
  const [updatedYear, setUpdatedYear] = useState(movie.year);
  const [updatedImage, setUpdatedImage] = useState(movie.image);

  const handleUpdate = () => {
    updateMovie(movie.id, { title: updatedTitle, director: updatedDirector, year: updatedYear });
    setIsEditing(false);
  };

  return (
    <li>
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
          
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          {movie.title} by {movie.director} ({movie.year})
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </li>
  );
};

export default MovieItem;
