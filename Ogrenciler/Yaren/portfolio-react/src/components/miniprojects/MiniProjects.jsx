import React from "react";
import {
  ProjectContainer,
  ProjectCard,
  ProjectImage,
} from "./MiniProjects.styled";
import projectImage1 from "../../assets/Hosthub.png";
import projectImage2 from "../../assets/Hosthub.png";
import projectImage3 from "../../assets/Hosthub.png";
import projectImage4 from "../../assets/Hosthub.png";
import projectImage5 from "../../assets/Hosthub.png";
import projectImage6 from "../../assets/Hosthub.png";
import AnimatedTitle from "../../style/AnimatedTitle.styled";
import FlexRow from "../../style/FlexRow.styled";

const MiniProjects = () => {
  const projectImages = [
    projectImage1,
    projectImage2,
    projectImage3,
    projectImage4,
    projectImage5,
    projectImage6,
  ];

  return (
    <ProjectContainer>
      <AnimatedTitle>Kurs Projelerim</AnimatedTitle>
      <FlexRow>
        {projectImages.map((image, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={image} alt={`Project ${index + 1}`} />
          </ProjectCard>
        ))}
      </FlexRow>
    </ProjectContainer>
  );
};

export default MiniProjects;
