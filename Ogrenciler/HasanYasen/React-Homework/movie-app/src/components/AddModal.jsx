import React, { useState } from "react";
import { getMovies, postMovie } from "../../request/request";
const url = "http://localhost:3000/movies";

function AddModal({ setMovies }) {
  const [movie, setMovie] = useState({
    name: "",
    director: "",
    year: "",
    imgUrl: "",
    category: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function add() {
    const newMovie = {
      title: movie.name,
      director: movie.director,
      year: movie.year,
      imgUrl: movie.imgUrl,
      category: movie.category,
    };
    await postMovie(url, newMovie);
    await getMovies(url).then((movies) => setMovies(movies));
  }

  return (
    <div
      className="modal fade"
      id="addMovieModal"
      tabIndex="-1"
      aria-labelledby="addMovieModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addMovieModalLabel">
              Add a Movie
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <form
                id="addForm"
                className="row g-3 needs-validation"
                noValidate
              >
                <div className="col-md-6">
                  <label htmlFor="movieNameForAdd" className="form-label">
                    Movie name:
                  </label>
                  <input
                    value={movie.name}
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    id="movieNameForAdd"
                    name="name"
                    required
                    spellCheck="false"
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">
                    Movie name is required.
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="movieAuthorForAdd" className="form-label">
                    Author:
                  </label>
                  <input
                    value={movie.director}
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    id="movieAuthorForAdd"
                    name="director"
                    required
                    spellCheck="false"
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">Author is required.</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="movieCategoryForAdd" className="form-label">
                    Category:
                  </label>
                  <select
                    value={movie.category}
                    onChange={handleChange}
                    name="category"
                    id="movieCategoryForAdd"
                    className="form-select"
                    required
                  >
                    <option value="">Select your option</option>
                    <option value="Animation">Animation</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    <option value="Science">Science</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Drama">Drama</option>
                    <option value="Action">Action</option>
                  </select>
                  <div className="invalid-feedback">Category is required.</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="movieYearForAdd" className="form-label">
                    Year:
                  </label>
                  <input
                    type="number"
                    value={movie.year}
                    onChange={handleChange}
                    className="form-control"
                    id="movieYearForAdd"
                    name="year"
                    required
                    spellCheck="false"
                  />
                  <div className="invalid-feedback">Year is required.</div>
                </div>
                <div className="col-12">
                  <label htmlFor="movieImgUrlForAdd" className="form-label">
                    Image URL:
                  </label>
                  <input
                    value={movie.imgUrl}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="movieImgUrlForAdd"
                    name="imgUrl"
                    spellCheck="false"
                    autoComplete="off"
                  />
                  <div className="valid-feedback">
                    If you do not enter a URL, the default image is shown.
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button className="btn btn-dark" type="submit" onClick={add}>
                    Add to List
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddModal;
