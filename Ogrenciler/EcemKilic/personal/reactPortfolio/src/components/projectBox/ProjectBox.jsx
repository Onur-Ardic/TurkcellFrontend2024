import { Box, Image, Content, Title } from './ProjectBoxStyles';

const ProjectBox = ({ image, title, codeLink}) => {
  const handleBoxClick = () => {
    window.open(codeLink, '_blank');
  };
  return (
    <Box onClick={handleBoxClick}>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
      </Content>
    </Box>
  );
};

export default ProjectBox;
