import { useState, useEffect } from "react";

function MovieForm({ handleSave, movie }) {
  const [movieData, setMovieData] = useState({
    name: "",
    director: "",
    category: "",
    year: "",
    image: "",
  });

  useEffect(() => {
    if (movie) {
      setMovieData(movie);
    } else {
      setMovieData({
        name: "",
        director: "",
        category: "",
        year: "",
        image: "",
      });
    }
  }, [movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(movieData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="id"
            value={movieData.name}
            onChange={handleChange}
            placeholder="Enter Movie Name"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="director">Director</label>
          <input
            type="text"
            name="director"
            value={movieData.director}
            onChange={handleChange}
            id="director"
            placeholder="Enter Director Name"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            value={movieData.year}
            onChange={handleChange}
            id="year"
            placeholder="Enter Year "
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            value={movieData.category}
            onChange={handleChange}
            id="category"
            placeholder="Enter Category "
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            value={movieData.image}
            onChange={handleChange}
            id="image"
            placeholder="Enter Image URL "
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default MovieForm;
