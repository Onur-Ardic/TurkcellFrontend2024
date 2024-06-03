import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

const ProjectsContainer = styled.section`
  padding: 2rem;
  background-color: #111;
  color: #fff;
  text-align: center;
  width: 100%;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; /* Kartlar arasındaki boşluğu artırdık */
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsContainer id="projects">
      <h2>Projeler</h2>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onDetailsClick={handleDetailsClick} />
        ))}
      </ProjectsGrid>
      {selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
    </ProjectsContainer>
  );
};

export default Projects;
