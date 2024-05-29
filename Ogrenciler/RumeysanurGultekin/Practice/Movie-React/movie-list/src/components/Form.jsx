import PropTypes from "prop-types";
const Form = ({ setNewMovie, handlePostMovie, newMovie }) => {
  const inputChangeHandler = (e, inputName) => {
    setNewMovie((newMovie) => ({ ...newMovie, [inputName]: e.target.value }));
  };

  return (
    <form
      className="col-4 mt-5 border form"
      onSubmit={(e) => {
        handlePostMovie(e);
      }}
    >
      <div>
        <h2 className="text-primary">Film Ekleyin</h2>
      </div>
      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          id="name"
          value={newMovie.name}
          onChange={(e) => inputChangeHandler(e, "name")}
        />
      </div>
      <div>
        <label htmlFor="director" className="form-label">
          Director
        </label>
        <input
          className="form-control"
          type="text"
          id="director"
          value={newMovie.director}
          onChange={(e) => inputChangeHandler(e, "director")}
        />
      </div>
      <div>
        <label htmlFor="genre" className="form-label">
          Genre
        </label>
        <input
          className="form-control"
          type="text"
          id="genre"
          value={newMovie.genre}
          onChange={(e) => inputChangeHandler(e, "genre")}
        />
      </div>
      <div>
        <label htmlFor="year" className="form-label">
          Year
        </label>
        <input
          className="form-control"
          type="text"
          id="year"
          value={newMovie.year}
          onChange={(e) => inputChangeHandler(e, "year")}
        />
      </div>
      <div>
        <label htmlFor="image" className="form-label">
          Image
        </label>
        <input
          className="form-control mb-3"
          type="text"
          id="image"
          value={newMovie.image}
          onChange={(e) => inputChangeHandler(e, "image")}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
Form.propTypes = {
  setNewMovie: PropTypes.func,
  handlePostMovie: PropTypes.func,
  newMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};
export default Form;
