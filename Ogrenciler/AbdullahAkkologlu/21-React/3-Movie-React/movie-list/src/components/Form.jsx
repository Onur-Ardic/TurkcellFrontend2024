const Form = ({ setNewMovie, handlePostMovie }) => {
  const inputChangeHandler = (e, inputName) => {
    setNewMovie((newMovie) => ({ ...newMovie, [inputName]: e.target.value }));
  };
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={(e) => inputChangeHandler(e, "name")}
      />
      <label htmlFor="director">Director</label>
      <input
        type="text"
        id="director"
        onChange={(e) => inputChangeHandler(e, "director")}
      />
      <label htmlFor="genre">Genre</label>
      <input
        type="text"
        id="genre"
        onChange={(e) => inputChangeHandler(e, "genre")}
      />
      <label htmlFor="year">Year</label>
      <input
        type="text"
        id="year"
        onChange={(e) => inputChangeHandler(e, "year")}
      />
      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        onChange={(e) => inputChangeHandler(e, "image")}
      />
      <button onClick={handlePostMovie}>Add</button>
    </form>
  );
};

export default Form;
