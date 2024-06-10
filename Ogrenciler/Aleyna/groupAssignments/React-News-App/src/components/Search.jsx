import { SearchInput } from "../style/style.module";

const Search = ({ search, handleSearch, getDataBySearch }) => {
  return (
    <>
      <form
        style={{ position: "relative" }}
        onSubmit={(e) => {
          e.preventDefault;
          getDataBySearch(e, search);
        }}
      >
        <SearchInput
          placeholder="Search"
          value={search}
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>
    </>
  );
};

export default Search;
