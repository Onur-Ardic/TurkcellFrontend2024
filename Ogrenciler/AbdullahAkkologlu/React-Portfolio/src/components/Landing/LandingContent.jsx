import Techs from "./Techs";
import {
  LandingTitle,
  LandingDesc,

  // SocialsRow,
  RowBetween,
  ConnectButton,
} from "../../styles";
// import Social from "./Social";

const LandingContent = () => {
  return (
    <div className="col-lg-5 ">
      <LandingTitle>Frontend Developer</LandingTitle>
      <h3>Abdullah Akkoloğlu</h3>
      <LandingDesc>
        I'm a passionate frontend developer who loves crafting digital
        experiences that make a difference.
      </LandingDesc>
      <Techs
        techs={[
          "html",
          "css",
          "sass",
          "bootstrap",
          "tailwind",
          "styledcomponents",
          "firebase",
          "js",
          "react",
          "redux",
          "nextjs",
        ]}
      />
      <RowBetween>
        <div className="col-lg-5 col-12">
          <ConnectButton href="mailto:abdullahakkol@gmail.com">
            Let's Connect
          </ConnectButton>
        </div>
        <div className="col-lg-5 col-12">
          <ConnectButton
            href="https://drive.google.com/file/d/17cDyQc90Uew_SuGP47CVCSAydr1ep8Ez/view?usp=sharing"
            target="_blank"
          >
            CV
          </ConnectButton>
        </div>
      </RowBetween>
      {/* <SocialsRow>
        <Social
          href="https://www.github.com/akkologlu"
          category={"brands"}
          title={"github"}
        />
        <Social
          href="https://akkologlu.medium.com/"
          category={"brands"}
          title={"medium"}
        />
        <Social
          href="https://www.linkedin.com/in/akkologlu"
          category={"brands"}
          title={"linkedin"}
        />
        <Social
          href="https://www.x.com/akkologluu"
          category={"brands"}
          title={"x-twitter"}
        />
      </SocialsRow> */}
    </div>
  );
};

export default LandingContent;
