import LandingContent from "./LandingContent";
import LandingImage from "./LandingImage";
import { LandingContainer, RowBetween } from "../../styles";

const Landing = () => {
  return (
    <LandingContainer>
      <RowBetween>
        <LandingContent />
        <LandingImage />
      </RowBetween>
    </LandingContainer>
  );
};

export default Landing;
