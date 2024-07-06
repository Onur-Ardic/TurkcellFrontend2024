import { useState } from "react";

const Search = ({handleSearch}) => {

   const [query, setQuery] = useState("");

   const handleChange = (e) => {
    setQuery(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
    setQuery("");
  };

  return (
    <div className="d-flex justify-content-end">
      <form className="d-flex ms-auto" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Kitap veya yazar ara..."
          aria-label="Search"
          value={query}
          onChange={handleChange}
        />
        <button  className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
