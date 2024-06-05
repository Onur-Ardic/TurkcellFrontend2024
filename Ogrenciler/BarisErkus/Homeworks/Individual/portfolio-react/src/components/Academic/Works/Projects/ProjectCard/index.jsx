import { tertiary } from "../../../../../common/colors";
import { Card, CardContainer, Title, Paragraph, Image } from "./styled";

const ProjectCard = ({ img, title, desc, techStack }) => {
  return (
    <Card>
      <CardContainer>
        <Title color={tertiary}>{title}</Title>
        <Paragraph>{desc}</Paragraph>
        <Paragraph fw="bold" color={tertiary} size="1rem">
          Tech Stack: {techStack}
        </Paragraph>
      </CardContainer>
      <Image src={img} alt={`${title} project image`}></Image>
    </Card>
  );
};

export default ProjectCard;
