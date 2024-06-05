import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #333;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 6px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #00adb5;
  margin-bottom: 1rem;
`;

const ProjectButton = styled.button`
  background-color: #813636;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #009aa5;
  }
`;

const ProjectCard = ({ project, onDetailsClick }) => (
  <Card>
    <ProjectImage src={project.image} alt={project.name} />
    <ProjectTitle>{project.name}</ProjectTitle>
    <ProjectButton onClick={() => onDetailsClick(project)}>Detaylar</ProjectButton>
  </Card>
);

export default ProjectCard;
