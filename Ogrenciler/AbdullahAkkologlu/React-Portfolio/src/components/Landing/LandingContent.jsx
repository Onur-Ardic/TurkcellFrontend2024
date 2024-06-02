import Icon from "../Icon";
import Techs from "./Techs";
import {
  LandingTitle,
  LandingDesc,
  Col,
  // SocialsRow,
  RowBetween,
  ConnectButton,
} from "../../styles";
// import Social from "./Social";

const LandingContent = () => {
  return (
    <Col width={40}>
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
          "js",
          "react",
          "styledcomponents",
        ]}
      />
      <RowBetween>
        <Col width={45}>
          <ConnectButton href="mailto:abdullahakkol@gmail.com">
            <Icon category={"solid"} title={"mug-hot"} size="md" />{" "}
            <span>Let's Connect</span>
          </ConnectButton>
        </Col>
        <Col width={45}>
          <ConnectButton
            href="https://drive.google.com/file/d/17cDyQc90Uew_SuGP47CVCSAydr1ep8Ez/view?usp=sharing"
            target="_blank"
          >
            <Icon category={"solid"} title={"file"} size="md" /> <span>CV</span>
          </ConnectButton>
        </Col>
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
    </Col>
  );
};

export default LandingContent;
