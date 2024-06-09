
import { SearchInput } from "../style/style.module"

const Search = ({search, handleSearch, getDataBySearch}) => {
  return (
    <> 
    <form onSubmit={(e) => {e.preventDefault; getDataBySearch(e, search)}} >
      <SearchInput placeholder="Search" value={search} onChange={(e) =>{handleSearch(e)}} />
      </form>
    </>
  )
}

export default Search