import { BiChevronUp } from "react-icons/bi";
import { SectionTitle } from "./styles";
import SizeButton from "@/components/SizeButton";

const Sizes = ({ title, sizes, selectedFilterQueries, setSize }) => {
  return (
    <>
      <SectionTitle>
        <span>{title}</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <div className="pb-3 border-bottom mb-3">
        {sizes.map((size, i) => (
          <SizeButton
            key={i}
            name="size"
            value={size}
            selected={selectedFilterQueries?.sizes_like?.includes(
              size.toLocaleLowerCase()
            )}
            onClick={() => setSize(size)}
          >
            {size}
          </SizeButton>
        ))}
      </div>
    </>
  );
};

export default Sizes;
