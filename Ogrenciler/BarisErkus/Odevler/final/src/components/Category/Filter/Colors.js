import { SectionTitle } from "./styles";
import { filterColors } from "@/common/filterColors";
import ColorOption from "@/components/ColorOption";
import { BiChevronUp } from "react-icons/bi";

const Colors = ({ title, selectedFilterQueries, setColor }) => {
  return (
    <>
      <SectionTitle>
        <span>{title}</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <div className="pb-3 border-bottom mb-3">
        {Object.entries(filterColors).map(([colorName, color]) => (
          <ColorOption
            key={color}
            name="color"
            value={colorName.toLowerCase()}
            color={color}
            selected={selectedFilterQueries?.color_like?.includes(
              colorName.toLocaleLowerCase()
            )}
            onClick={() => setColor(colorName)}
          />
        ))}
      </div>
    </>
  );
};

export default Colors;
