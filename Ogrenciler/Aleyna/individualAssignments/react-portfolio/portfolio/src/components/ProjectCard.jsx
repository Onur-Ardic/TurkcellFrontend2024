import React from "react";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardTeam,
} from "../styles/CustomComponents";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardImage>
        <img src={project.image} alt={project.title} />
      </CardImage>
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <CardTeam>{project.team}</CardTeam>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
