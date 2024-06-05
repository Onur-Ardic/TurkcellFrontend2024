import { CardProject, ProjectImage, ProjectTitle, ProjectDescription, ProjectButton } from "../styles/Styled";

const ProjectCard = ({ image, title, description, url }) => {
  return (
    <CardProject>
      <ProjectImage src={`/images/${image}`} alt={image} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectButton onClick={() => window.open(url)}>Link</ProjectButton>
    </CardProject>
  );
};

export default ProjectCard;
