import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 3rem;
  color: #777;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const projects = [
  {
    image: img1,
    title: 'UpStart',
    description: 'Website/Landing Page',
    github: 'https://github.com/user/project1'
  },
  {
    image: img2,
    title: 'Smart POSS',
    description:'Website/Landing Page',
    github: 'https://github.com/user/project2'
  },
  {
    image: img3,
    title: 'Druco',
    description: 'Website/Landing Page',
    github: 'https://github.com/user/project3'
  },
  {
    image: img4,
    title: 'Directoryads',
    description: 'Website/Landing Page',
    github: 'https://github.com/user/project4'
  },
  {
    image: img5,
    title: 'Agon',
    description: 'Website/Landing Page',
    github: 'https://github.com/user/project5'
  },
  {
    image: img6,
    title: 'Flowers Shop',
    description: 'Website/Landing Page',
    github: 'https://github.com/user/project6'
  },
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>PORTFOLIO</Title>
      <Subtitle>My Website Projects</Subtitle>
      <CardsContainer>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            github={project.github}
          />
        ))}
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
