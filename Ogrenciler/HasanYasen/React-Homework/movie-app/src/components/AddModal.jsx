import React, { useState } from "react";
import { getMovies, postMovie } from "../../request/request";
const url = "http://localhost:3000/movies";

function AddModal({ setMovies }) {
  function handleNameChange(e) {
    setMovieName(e.target.value);
  }
  function handleDirectorChange(e) {
    setMovieDirector(e.target.value);
  }
  function handleYearChange(e) {
    setMovieYear(e.target.value);
  }
  function handleImgUrlChange(e) {
    setMovieImgUrl(e.target.value);
  }
  function handleCategoryChange(e) {
    setMovieCategory(e.target.value);
  }

  const [movieName, setMovieName] = useState("");
  const [movieDirector, setMovieDirector] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieImgUrl, setMovieImgUrl] = useState("");
  const [movieCategory, setMovieCategory] = useState("");
  async function add() {
    const newMovie = {
      title: movieName,
      director: movieDirector,
      year: movieYear,
      imgUrl: movieImgUrl,
      category: movieCategory,
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
                    value={movieName}
                    type="text"
                    onChange={handleNameChange}
                    className="form-control"
                    id="movieNameForAdd"
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
                    value={movieDirector}
                    type="text"
                    onChange={handleDirectorChange}
                    className="form-control"
                    id="movieAuthorForAdd"
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
                    value={movieCategory}
                    onChange={handleCategoryChange}
                    name="movieCategoryForAdd"
                    id="movieCategoryForAdd"
                    className="form-select"
                    required
                  >
                    <option value="" defaultValue>
                      Select your option
                    </option>
                    <option value="History">History</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Biography">Biography</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    <option value="Science">Science</option>
                    <option value="Poetry">Poetry</option>
                    <option value="Essay">Essay</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Technology">Technology</option>
                  </select>
                  <div className="invalid-feedback">Category is required.</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="movieYearForAdd" className="form-label">
                    Year:
                  </label>
                  <input
                    type="number"
                    value={movieYear}
                    onChange={handleYearChange}
                    className="form-control"
                    id="movieYearForAdd"
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
                    value={movieImgUrl}
                    onChange={handleImgUrlChange}
                    type="text"
                    className="form-control"
                    id="movieImgUrlForAdd"
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
                  <button
                    id="addToList"
                    className="btn btn-dark"
                    type="submit"
                    onClick={add}
                  >
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
