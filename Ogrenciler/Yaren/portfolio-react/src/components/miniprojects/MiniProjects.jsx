import React from "react";
import {
  ProjectContainer,
  ProjectCard,
  ProjectImage,
} from "./MiniProjects.styled";
import projectImage1 from "../../assets/project1.png";
import projectImage2 from "../../assets/project2.jpg";
import projectImage3 from "../../assets/project3.jpg";
import projectImage4 from "../../assets/project4.png";
import projectImage5 from "../../assets/project5.png";
import projectImage6 from "../../assets/project6.png";
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
