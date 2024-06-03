import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #222;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 250px; /* Kart genişliğini artırdık */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px; /* Yüksekliği artırdık */
  border-radius: 4px;
  margin-bottom: 1rem; /* Görsel ile buton arasına boşluk ekledik */
`;

const ProjectButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem; /* Buton ile yazı arasına boşluk ekledik */
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const ProjectCard = ({ project, onDetailsClick }) => (
  <Card>
    <h3>{project.name}</h3>
    <ProjectImage src={project.image} alt={project.name} />
    <ProjectButton onClick={() => onDetailsClick(project)}>Detaylar</ProjectButton>
  </Card>
);

export default ProjectCard;
