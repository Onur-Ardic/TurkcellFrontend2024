import RangeSlider from "react-range-slider-input";
import { SectionTitle } from "./styles";
import { BiChevronUp } from "react-icons/bi";

const Range = ({ title, priceRange, setPrice }) => {
  return (
    <>
      <SectionTitle>
        <span>{title}</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <RangeSlider
        min={0}
        max={1000}
        value={priceRange}
        onInput={setPrice}
        className="mb-3"
      />
      <div className="mb-4 d-flex justify-content-between">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </>
  );
};

export default Range;
