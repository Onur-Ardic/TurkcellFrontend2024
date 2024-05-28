import React from 'react';
import PropTypes from "prop-types";

function MovieCardForm ({movie,addUpdateMovie,setMovie}) {
  const inputChangeHandler = (e, inputName) => {
    setMovie((movie) => ({...movie,[inputName]: e.target.value}));
  };
  return (
    <div>
      <div className="container">
        <form className="col-4 mt-5 border form" onSubmit={(e) => addUpdateMovie(e)}>
          <div className="my-3">
            <label htmlFor="name" className='form-label'>Movie Name : </label>
            <input type="text" id="name" className="form-control" value={movie.name} onChange={(e) => inputChangeHandler(e, "name")}/>
          </div>
          <div className="my-3">
            <label htmlFor="author" className='form-label'>Author : </label>
            <input type="text" id="author" className="form-control" value={movie.author} onChange={(e) => inputChangeHandler(e, "author")}/>
          </div>
          <div className="my-3">
            <label htmlFor="category" className="form-label">Category :</label>
            <input type="text" id="category" className="form-control" value={movie.category} onChange={(e) => inputChangeHandler(e, "category")}/>
          </div>
          <div className="my-3">
            <label htmlFor="date" className='form-label'>Date :</label>
            <input type="text" id="date" className="form-control" value={movie.date} onChange={(e) => inputChangeHandler(e, "date")}/>
          </div>
          <div className="my-3">
            <label htmlFor="imgUrl" className='form-label'>Image</label>
            <input type="text" id="imgUrl" className="form-control" value={movie.imgUrl} onChange={(e) => inputChangeHandler(e, "imgUrl")}/>
          </div>
          <button className='btn btn-danger'>Submit</button>
        </form>        
      </div>
    </div>
  )
}
MovieCardForm.propTypes = {
  addUpdateMovie: PropTypes.func,
  setMovie: PropTypes.func,
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }),
}
export default MovieCardForm;