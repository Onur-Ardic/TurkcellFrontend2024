import React from "react";
import './Card.css'

const Card = ({movie, setMovie, deleteMovie}) => {
  return (
    <div id={movie.id} className="col-4">
      <div className="card mb-3">
        <div className="card-header imgHeight">
          <img
            src={movie.image}
            className="w-100 h-100 rounded-start"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
          <p className="card-text">{movie.director}</p>
          <p className="card-text">
            <small className="text-body-secondary">{movie.year}</small>
          </p>
          <p className="card-text">
            <small className="text-body-secondary">{movie.type}</small>
          </p>
          <button onClick={(e)=> {deleteMovie(e, movie.id)}} className="btn btn-danger me-3">Delete</button>
          <button onClick={() => {setMovie(movie)}}  className="btn btn-success">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
