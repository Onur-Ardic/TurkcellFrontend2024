import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #000;
  background-image: url('https://images.unsplash.com/photo-1547658719-da2b51169166');
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  width: 100%;
  min-height: 100vh;
`;

const ProjectsTitle = styled.h2`
  font-size: 3rem;
  color: #00adb5;
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
      <ProjectsTitle>Yaptığım Projeler</ProjectsTitle>
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
