import React, { useState, useEffect } from "react";
import { getMovies, putMovie } from "../../request/request";
const url = "http://localhost:3000/movies";

function UpdateModal({ setMovies, existingMovie }) {
  const [movie, setMovie] = useState({
    name: "",
    director: "",
    year: "",
    imgUrl: "",
    category: "",
  });

  useEffect(() => {
    if (existingMovie) {
      setMovie({
        name: existingMovie.title,
        director: existingMovie.director,
        year: existingMovie.year,
        imgUrl: existingMovie.imgUrl,
        category: existingMovie.category,
      });
    }
  }, [existingMovie]);

  function handleChange(event) {
    const { name, value } = event.target;
    setMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleUpdate() {
    const updatedMovie = {
      title: movie.name,
      director: movie.director,
      year: movie.year,
      imgUrl: movie.imgUrl,
      category: movie.category,
    };

    await putMovie(`${url}/${existingMovie.id}`, updatedMovie);
    const updatedMovies = await getMovies(url);
    setMovies(updatedMovies);
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
                onSubmit={handleUpdate}
              >
                <div className="col-md-6">
                  <label htmlFor="movieNameForUpdate" className="form-label">
                    Movie name:
                  </label>
                  <input
                    value={movie.name}
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    id="movieNameForUpdate"
                    name="name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="movieDirectorForUpdate"
                    className="form-label"
                  >
                    Director:
                  </label>
                  <input
                    value={movie.director}
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    id="movieDirectorForUpdate"
                    name="director"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="movieYearForUpdate" className="form-label">
                    Year:
                  </label>
                  <input
                    value={movie.year}
                    type="number"
                    onChange={handleChange}
                    className="form-control"
                    id="movieYearForUpdate"
                    name="year"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="movieCategoryForUpdate"
                    className="form-label"
                  >
                    Category:
                  </label>
                  <select
                    value={movie.category}
                    onChange={handleChange}
                    name="category"
                    className="form-select"
                    id="movieCategoryForUpdate"
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
                <div className="col-12">
                  <label htmlFor="movieImgUrlForUpdate" className="form-label">
                    Image URL:
                  </label>
                  <input
                    value={movie.imgUrl}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="movieImgUrlForUpdate"
                    name="imgUrl"
                    autoComplete="off"
                  />
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
                    type="submit"
                    className="btn btn-dark"
                    onClick={handleUpdate}
                  >
                    Update Movie
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
