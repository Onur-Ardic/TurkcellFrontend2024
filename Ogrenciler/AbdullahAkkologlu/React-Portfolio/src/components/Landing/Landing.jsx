import LandingContent from "./LandingContent";
import LandingImage from "./LandingImage";
import { RowBetween, PaddingVertical } from "../../styles";

const Landing = () => {
  return (
    <PaddingVertical className="my-5">
      <RowBetween>
        <LandingContent />
        <LandingImage />
      </RowBetween>
    </PaddingVertical>
  );
};

export default Landing;
