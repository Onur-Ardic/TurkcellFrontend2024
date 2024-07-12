import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import { SectionTitle } from "./styles";
import FilterButton from "./Button";

const DressStyle = ({
  title,
  dressStyles,
  selectedFilterQueries,
  setDressStyle,
}) => {
  return (
    <>
      {" "}
      <SectionTitle>
        <span>{title}</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <ul className="list-unstyled d-flex flex-column mb-3 gap-1">
        {dressStyles.map((dressStyle, i) => (
          <FilterButton
            key={i}
            name="dressStyle"
            className="d-flex justify-content-between"
            selected={selectedFilterQueries?.dressStyle_like?.includes(
              dressStyle.value.toLocaleLowerCase()
            )}
            onClick={() => {
              setDressStyle(dressStyle.value);
            }}
          >
            <span>{dressStyle.name}</span>
            <BiChevronRight size={24} />
          </FilterButton>
        ))}
      </ul>
    </>
  );
};

export default DressStyle;
