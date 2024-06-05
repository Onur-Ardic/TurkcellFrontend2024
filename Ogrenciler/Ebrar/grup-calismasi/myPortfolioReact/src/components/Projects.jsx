import React from "react";
import styled from "styled-components";
import agonImg from "../assets/agon.png";
import biniogImg from "../assets/biniog.png";
import drucoImg from "../assets/druco.png";
import smartposImg from "../assets/smartpos.png";
import upstartImg from "../assets/upstart.png";
import directoryadsImg from "../assets/directoryads.png";

const ProjectsContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ProjectItem = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 4px;
  width: 35rem;
  height: 30rem;
  border: 1px solid #ffff;

  .project-exp {
    padding: 15px;
    font-size: 16px;
    text-align: center;
    color: white;
  }

  .project-img img {
    width: 100%;
  }

  .project-name h3 {
    font-size: 3.2rem;
    font-style: italic;
    color: white;
  }

  .colorDark h3 {
    color: white;
  }

  .tooltip {
    visibility: hidden;
    width: 120px;
    background-color: purple;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;

    a {
      color: white;
      font-size: 16px;
      text-decoration: none;
    }
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  .project-img:hover {
    filter: blur(5px);
  }
`;

const ProjectTitle = styled.div`
  h2 {
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    padding: 2rem;
    color: white;
  }
`;

const projectData = [
  {
    src: directoryadsImg,
    name: "DIRECTORYADS",
    link: "http://127.0.0.1:5500/Ogrenciler/Ebrar/homework5/index.html",
  },
  {
    src: biniogImg,
    name: "BINIOG",
    link: "http://127.0.0.1:5500/Ogrenciler/AbdullahAkkologlu/Ders-05/Odev/index.html",
  },
  {
    src: drucoImg,
    name: "DRUCO",
    link: "http://127.0.0.1:5500/Ogrenciler/AbdullahAkkologlu/Ders-07/Odev/index.html",
  },
  {
    src: smartposImg,
    name: "SMARTPOS",
    link: "http://127.0.0.1:5500/Ogrenciler/EnesAlagoz/TakimCalismasi/Task6/index.html",
  },
  {
    src: upstartImg,
    name: "UPSTART",
    link: "http://127.0.0.1:5500/Ogrenciler/AbdullahAkkologlu/Ders-04/Odev/index.html",
  },
  {
    src: agonImg,
    name: "AGON",
    link: "http://127.0.0.1:5500/Ogrenciler/AbdullahAkkologlu/Ders-04/Odev/index.html",
  },
];

function Projects() {
  return (
    <>
      <ProjectTitle className="project-title container">
        <h2>Projects</h2>
      </ProjectTitle>
      <ProjectsContainer>
        {projectData.map((project, index) => (
          <ProjectItem key={index} className="projects-item">
            <div className="project-img">
              <img src={project.src} alt={project.name} />
            </div>
            <div className="tooltip">
              <a href={project.link} target="_blank">
                Review
              </a>
            </div>
            <div className="project-name">
              <h3>{project.name}</h3>
            </div>
            <div className="project-exp">
              <p>
                project written in clean code that is sensitive to different
                dimensions and prioritizes the user experience.
              </p>
            </div>
          </ProjectItem>
        ))}
      </ProjectsContainer>
    </>
  );
}

export default Projects;
