import React from "react";
import upstartImage from "../images/upstart.png";
import biniogImage from "../images/biniog.png";
import gridImage from "../images/grid.png";
import agonImage from "../images/agon.png";
import directoryAdsImage from "../images/directory-ads.png";
import smratImage from "../images/smrat.png";

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
  <div className="projects">
    <div className="container">
      <h2>Projects</h2>
      <div className="cards row flex-wrap space-between">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="card-links row">
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
  </div>
);

export default Projects;
