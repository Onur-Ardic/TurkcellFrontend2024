import { StyledCardList } from "./styles";

const WearCardList = ({ children, className }) => {
  return <StyledCardList className={className}>{children}</StyledCardList>;
};

export default WearCardList;
