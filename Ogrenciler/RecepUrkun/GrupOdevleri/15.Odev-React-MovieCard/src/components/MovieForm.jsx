const MovieForm = ({
  newMovie,
  isEditing,
  handleInputChange,
  handleAddOrUpdateMovie,
}) => {
  return (
    <div className="row my-4">
      <div className="col-5 mx-auto">
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            name="name"
            value={newMovie.name}
            onChange={handleInputChange}
            id="floatingName"
            placeholder="Movie Name"
          />
          <label htmlFor="floatingInput">Movie Name</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            name="director"
            id="floatingDirector"
            value={newMovie.director}
            onChange={handleInputChange}
            placeholder="Director"
          />
          <label htmlFor="floatingDirector">Movie Director</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            name="genre"
            id="floatingGenre"
            value={newMovie.genre}
            onChange={handleInputChange}
            placeholder="Genre"
          />
          <label htmlFor="floatingGenre">Movie Genre</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="number"
            className="form-control"
            name="releaseDate"
            id="floatingYear"
            value={newMovie.releaseDate}
            onChange={handleInputChange}
            placeholder="releaseDate"
          />
          <label htmlFor="floatingYear">Movie Year</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="url"
            className="form-control"
            name="poster"
            id="floatingPoster"
            value={newMovie.poster}
            onChange={handleInputChange}
            placeholder="Poster URL"
          />
          <label htmlFor="floatingPoster">Movie Poster</label>
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-outline-dark mt-3"
          onClick={handleAddOrUpdateMovie}
        >
          {isEditing ? "Update Movie" : "Add Movie"}
        </button>
      </div>
    </div>
  );
};

export default MovieForm;
