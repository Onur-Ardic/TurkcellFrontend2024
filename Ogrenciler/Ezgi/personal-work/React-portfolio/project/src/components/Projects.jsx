import React, { useState, useEffect } from 'react';
import { ProjectsContainer, Heading, ProjectList } from '../components/styled';
import Project from '../components/Project';
import { getAllProjects } from "../api/API";


const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await getAllProjects();
      if (response && response.data) {
        setProjects(response.data);
      } else {
        console.error('Invalid response structure:', response);
      }
    } catch (error) {
      console.error('Error fetching projects data:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);



  return (
    <ProjectsContainer id="projects">
      <Heading>Projects</Heading>
      <ProjectList>
        {projects?.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            sourceCodeLink={project.sourceCodeLink}
            demoLink={project.demoLink}
          />
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
