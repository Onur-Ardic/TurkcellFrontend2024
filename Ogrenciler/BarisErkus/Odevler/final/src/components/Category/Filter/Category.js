import FilterButton from "./Button";
import { BiChevronRight } from "react-icons/bi";

const Category = ({ setCategory, selectedFilterQueries, filterCategories }) => {
  return (
    <ul className="list-unstyled d-flex flex-column pb-3 mb-3 border-bottom gap-1">
      {filterCategories.map((category, i) => (
        <FilterButton
          key={i}
          className="d-flex justify-content-between"
          selected={selectedFilterQueries?.category_like?.includes(
            category.value.toLocaleLowerCase()
          )}
          onClick={() => setCategory(category.value)}
        >
          <span>{category.name}</span>
          <BiChevronRight size={24} />
        </FilterButton>
      ))}
    </ul>
  );
};

export default Category;
