import LandingContent from "./LandingContent";
import LandingImage from "./LandingImage";
import Techs from "./Techs";

const Landing = () => {
  return (
    <div className="container landing">
      <div className="row justify-content-between">
        <LandingContent />
        <LandingImage />
        <Techs />
      </div>
    </div>
  );
};

export default Landing;
