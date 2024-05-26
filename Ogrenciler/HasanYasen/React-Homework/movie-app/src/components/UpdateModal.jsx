import React, { useState } from "react";
import { getMovies, putMovie } from "../../request/request";
const url = "http://localhost:3000/movies";

function UpdateModal({ setMovies }) {
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

  async function update(
    movieName,
    movieDirector,
    movieYear,
    movieImgUrl,
    movieCategory
  ) {
    const newMovie = {
      title: movieName,
      director: movieDirector,
      year: movieYear,
      imgUrl: movieImgUrl,
      category: movieCategory,
    };
    await putMovie(url, newMovie);
    await getMovies(url).then((movies) => setMovies(movies));
  }

  return (
    <div
      className="modal fade"
      id="updateMovieModal"
      tabIndex="-1"
      aria-labelledby="updateMovieModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="updateMovieModalLabel">
              Update a Movie
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
                id="updateForm"
                className="row g-3 needs-validation"
                noValidate
              >
                <div className="col-md-6">
                  <label htmlFor="movieNameForUpdate" className="form-label">
                    Movie name:
                  </label>
                  <input
                    value={movieName}
                    type="text"
                    onChange={handleNameChange}
                    className="form-control"
                    id="movieNameForUpdate"
                    required
                    spellCheck="false"
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">
                    Movie name is required.
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="movieAuthorForUpdate" className="form-label">
                    Author:
                  </label>
                  <input
                    value={movieDirector}
                    type="text"
                    onChange={handleDirectorChange}
                    className="form-control"
                    id="movieAuthorForUpdate"
                    required
                    spellCheck="false"
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">Author is required.</div>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="movieCategoryForUpdate"
                    className="form-label"
                  >
                    Category:
                  </label>
                  <select
                    value={movieCategory}
                    onChange={handleCategoryChange}
                    name="movieCategoryForUpdate"
                    id="movieCategoryForUpdate"
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
                  <label htmlFor="movieYearForUpdate" className="form-label">
                    Year:
                  </label>
                  <input
                    type="number"
                    value={movieYear}
                    onChange={handleYearChange}
                    className="form-control"
                    id="movieYearForUpdate"
                    required
                    spellCheck="false"
                  />
                  <div className="invalid-feedback">Year is required.</div>
                </div>
                <div className="col-12">
                  <label htmlFor="movieImgUrlForUpdate" className="form-label">
                    Image URL:
                  </label>
                  <input
                    value={movieImgUrl}
                    onChange={handleImgUrlChange}
                    type="text"
                    className="form-control"
                    id="movieImgUrlForUpdate"
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
                    id="updateToList"
                    className="btn btn-dark"
                    type="submit"
                    onClick={update}
                  >
                    Update to List
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
export default UpdateModal;
