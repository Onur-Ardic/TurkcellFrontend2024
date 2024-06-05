import React from "react";
import StyledExperience, {
  StyledExperienceContainer,
  ExperienceImage,
  ExperienceContent,
  DateText,
  Divider,
  Gif,
} from "./Experience.styled";
import FlexColumn from "../../style/FlexColumn.styled";
import experiences from "../../data/experiences";

const Experience = () => {
  return (
    <StyledExperienceContainer>
      <Divider />

      <FlexColumn>
        {experiences.map((exp, index) => (
          <StyledExperience key={exp.id} odd={index % 2 !== 0}>
            <ExperienceImage>
              <img src={exp.image} alt={exp.title} />
            </ExperienceImage>
            <ExperienceContent>
              <DateText>{exp.date}</DateText>
              <h2>{exp.title}</h2>
              <p>{exp.description}</p>
            </ExperienceContent>
          </StyledExperience>
        ))}
      </FlexColumn>
      <Gif src="https://i.gifer.com/VeC.gif" alt="Animated GIF" />
    </StyledExperienceContainer>
  );
};

export default Experience;
