import React, { useEffect, useState } from 'react';
import ProjectBox from '../projectBox/ProjectBox';
import { Container } from './ProjectStyles';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        throw new Error('Error fetching projects:', error);
      });
  }, []);

  return (
    <Container id="projects">
      {projects.map((project, index) => (
        <ProjectBox 
          key={index}
          image={project.image}
          title={project.title}
          codeLink={project.codeLink}
          demoLink={project.demoLink}
        />
      ))}
    </Container>
  );
};

export default Projects;