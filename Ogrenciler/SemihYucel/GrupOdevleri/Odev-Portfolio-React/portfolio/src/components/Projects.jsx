import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

const ProjectsContainer = styled.section`
  padding: 2rem;
  background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c'); /* Projeler bölümü için arka plan resmi */
  background-size: cover;
  background-position: center;
  text-align: center;
  width: 100%;
  color: #fff;
`;

const ProjectsTitle = styled.h2`
  border: 2px solid #fff;
  background-color: #000;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
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
      <ProjectsTitle>Projeler</ProjectsTitle>
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
