import React from "react";
import StyledExperience, {
  ExperienceImage,
  ExperienceContent,
  Divider,
} from "./Experience.styled";
import { Logo } from "../header/Header.styled";
import Foto from "../../assets/pc.png";

const Experience = ({ title, body, image, id }) => {
  return (
    <StyledExperience odd={id % 2 && "row-reverse"}>
      <ExperienceImage>
        <Logo src={Foto} />
      </ExperienceImage>
      <Divider />
      <ExperienceContent>
        <h2>{title}</h2>
        <p>{body}</p>
      </ExperienceContent>
    </StyledExperience>
  );
};

export default Experience;
