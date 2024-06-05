import React from "react";
import styled from "styled-components";
import upstartImage from "../images/upstart.png";
import biniogImage from "../images/biniog.png";
import gridImage from "../images/grid.png";
import agonImage from "../images/agon.png";
import directoryAdsImage from "../images/directory-ads.png";
import smratImage from "../images/smrat.png";

const ProjectsContainer = styled.div`
  padding: 180px 0;
  .container {
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    margin: 0 auto;
  }

  h2 {
    padding-left: 20px;
    font-size: 32px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 5px;
    margin-bottom: 60px;
  }

  .cards {
    gap: 10px;
    row-gap: 60px;
    transition: all 1s ease-in-out;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;

    &:hover > .card:not(:hover) {
      transform: scale(0.75, 0.75);
      transition: all 0.5s ease-in-out;
    }
  }

  .card {
    display: flex;
    align-items: end;
    width: 30%;
    height: 200px;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: contain;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    &:hover {
      transform: scale(1.5, 1.5);
      transition: all 1s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
        rgb(51, 51, 51) 0px 0px 0px 3px;
    }

    .card-links {
      justify-content: space-evenly;
      background-color: black;
      opacity: 0.7;
      width: 100%;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      display: flex;

      &:hover {
        opacity: 0.95;
        transition: 1s ease-in-out;
      }

      &:not(:hover) {
        transition: 1s ease-in-out;
      }

      a {
        font-size: 23px;
        color: white;
        padding: 5px;

        &:hover {
          color: rgb(156, 0, 0);
          transition: 0.4s ease-in-out;
        }
      }
    }
  }
`;

const projects = [
  {
    image: upstartImage,
    codeLink:
      "https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/AbdullahAkkologlu/Ders-04/Odev",
    liveLink:
      "http://127.0.0.1:5500/Ogrenciler/AbdullahAkkologlu/Ders-04/Odev/index.html",
  },
  {
    image: biniogImage,
    codeLink:
      "https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/AbdullahAkkologlu/Ders-05/Odev",
    liveLink:
      "http://127.0.0.1:5500/Ogrenciler/AbdullahAkkologlu/Ders-05/Odev/index.html",
  },
  {
    image: gridImage,
    codeLink:
      "https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/NecatiDogrul/Odev4",
    liveLink: "http://127.0.0.1:5500/Ogrenciler/NecatiDogrul/Odev4/index.html",
  },
  {
    image: agonImage,
    codeLink:
      "https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/Erkan-TOKMAK/GrupCalismalari/Agon",
    liveLink:
      "http://127.0.0.1:5500/Ogrenciler/Erkan-TOKMAK/GrupCalismalari/Agon/index.html",
  },
  {
    image: directoryAdsImage,
    codeLink:
      "https://github.com/waroi/TurkcellFrontend2024/blob/main/Ogrenciler/NecatiDogrul/Odev6/index.html",
    liveLink: "http://127.0.0.1:5500/Ogrenciler/NecatiDogrul/Odev6/index.html",
  },
  {
    image: smratImage,
    codeLink:
      "https://github.com/waroi/TurkcellFrontend2024/blob/main/Ogrenciler/NecatiDogrul/Odev6/index.html",
    liveLink: "http://127.0.0.1:5500/Ogrenciler/NecatiDogrul/Odev6/index.html",
  },
];

const Projects = () => (
  <ProjectsContainer>
    <div className="container">
      <h2>Projects</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="card-links">
              <a target="_blank" className="caption" href={project.codeLink}>
                CODE
              </a>
              <a target="_blank" className="caption" href={project.liveLink}>
                LIVE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </ProjectsContainer>
);

export default Projects;
