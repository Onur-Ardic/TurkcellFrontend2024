import { Option, Tick } from "./styles";

const ColorOption = ({ color, selected, ...props }) => {
  return (
    <Option color={color} {...props}>
      {selected && <Tick color={color}>&#10004;</Tick>}
    </Option>
  );
};

export default ColorOption;
