import { StyledButton } from "./styles";

const FilterButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default FilterButton;
