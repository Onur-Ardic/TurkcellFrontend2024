import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  ProjectsSection,
  ProjectsGrid,
  FilterButton,
  FilterContainer,
} from "../styles/CustomComponents";

const projectData = [
  {
    title: "UPSTART",
    description: "HTML & CSS",
    image: "site1.png",
    team: "Aleyna Ertok, Alpay Özer, Erkan Tokmak",
  },
  {
    title: "BINIOG",
    description: "HTML & CSS",
    image: "site2.png",
    team: "Aleyna Ertok, Alpay Özer, Erkan Tokmak",
  },
  {
    title: "DRUCO",
    description: "HTML & CSS",
    image: "site3.png",
    team: "Aleyna Ertok, Kadir Tezcan, Necati Doğrul",
  },
  {
    title: "AGON",
    description: "HTML & CSS",
    image: "site4.png",
    team: "Aleyna Ertok, Alpay Özer, Mertcan Çelik",
  },
  {
    title: "DIRECTORYADS",
    description: "HTML & CSS & SCSS",
    image: "site5.png",
    team: "Aleyna Ertok, Esin Oruç, Şevval Erhan",
  },
  {
    title: "SMARTPOS",
    description: "HTML & CSS & SCSS",
    image: "site6.png",
    team: "Aleyna Ertok,Esin Oruç, Şevval Erhan",
  },
  {
    title: "HOSTHUB",
    description: "HTML & CSS & SCSS",
    image: "hosthub.png",
    team: "Aleyna Ertok, Atakan Altunbaş, Yaren Yavuz",
  },
  {
    title: "IMAGINE",
    description: "HTML & CSS & SCSS",
    image: "imagine.png",
    team: "Aleyna Ertok, Buğra Özkahraman, Hüseyin Özkan",
  },
  {
    title: "STARDUST",
    description: "HTML & CSS & SCSS",
    image: "mac.png",
    team: "Aleyna Ertok",
  },
  {
    title: "MOVIE",
    description: "JAVASCRIPT",
    image: "mac5.png",
    team: "Aleyna Ertok, Ecem Kılıç , Veli Doğan",
  },
  {
    title: "XOX-GAME",
    description: "JAVASCRIPT",
    image: "mac3.png",
    team: "Aleyna Ertok",
  },
  {
    title: "KAYIT FORMU",
    description: "JAVASCRIPT",
    image: "form.png",
    team: "Aleyna Ertok",
  },
  {
    title: "BOOKWORM",
    description: "JAVASCRIPT",
    image: "mac2.png",
    team: "Aleyna Ertok",
  },
  {
    title: "MOVIE ",
    description: "REACT",
    image: "mac5.png",
    team: "Aleyna Ertok, Esin Oruç , Hasan Yasen",
  },
  {
    title: "TO-DO",
    description: "REACT",
    image: "site2.png",
    team: "Aleyna Ertok, Egemen Kaplan, Enes Alagöz",
  },

  {
    title: "GITHUB CLONE",
    description: "REACT",
    image: "site2.png",
    team: "Aleyna Ertok, Barış Erkuş, Onur Ardıç,Muhammed Saka",
  },

  {
    title: "WEATHER APP",
    description: "REACT",
    image: "mac4.png",
    team: "Aleyna Ertok, Barış Erkuş, Erkan Tokmak",
  },
];

const Projects = () => {
  const [filters, setFilters] = useState([]);

  const handleFilterClick = (filter) => {
    setFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredProjects = projectData.filter((project) =>
    filters.length === 0
      ? true
      : filters.every((filter) => project.description.includes(filter))
  );

  const filterOptions = ["HTML", "CSS", "SCSS", "JAVASCRIPT", "REACT"];
  return (
    <ProjectsSection id="projects">
      <div className="title">
        <h2>Projects</h2>
        <p className="line"></p>
      </div>
      <FilterContainer>
        {filterOptions.map((filter) => (
          <FilterButton
            key={filter}
            onClick={() => handleFilterClick(filter)}
            active={filters.includes(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterContainer>
      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
