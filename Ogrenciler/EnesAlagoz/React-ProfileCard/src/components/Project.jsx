import { ProjectsContainer } from "../styles/Styled";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    image: "agon.jpg",
    title: "AGON WEB SİTESİ",
    description: "HTML & CSS",
    url: "https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/EnesAlagoz/Teamworks/Task5",
  },
  {
    id: 2,
    image: "directoryads.png",
    title: "DİRECTORYADS WEB SİTESİ",
    description: "HTML & CSS",
    url: "https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/EnesAlagoz/Teamworks/Task5",
  },
  {
    id: 3,
    image: "druco.jpg",
    title: "DRUCO WEB SİTESİ",
    description: "HTML & CSS",
    url: "https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/EnesAlagoz/Teamworks/Task5",
  },
  {
    id: 4,
    image: "film.png",
    title: "FİLM EKLEME ",
    description: "HTML & CSS & JAVASCRIPT",
    url: "https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/EnesAlagoz/Teamworks/Task12",
  },
  {
    id: 5,
    image: "portfolio.png",
    title: "PORTFOLİO",
    description: "HTML & CSS",
    url: "https://github.com/enesalagoz1212/Portfolio",
  },
  {
    id: 6,
    image: "smratPos.png",
    title: "SMRATPOS WEB SİTESİ",
    description: "HTML & CSS",
    url: "https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/EnesAlagoz/Teamworks/Task6",
  },
  {
    id: 7,
    image: "vize1.png",
    title: "VİZE1",
    description: "HTML & CSS & BOOTSTRAP",
    url: "https://github.com/enesalagoz1212/EA--letisim",
  },
  {
    id: 8,
    image: "vize2.png",
    title: "VİZE2",
    description: "HTML & CSS & BOOTSTRAP & JAVASCRİPT",
    url: "https://github.com/enesalagoz1212/Library-Application",
  },
  {
    id: 9,
    image: "XOX.png",
    title: "XON GAME",
    description: "HTML & CSS & JAVASCRİPT",
    url: "https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/EnesAlagoz/Teamworks/Task10",
  },
];

const Project = () => {
  return (
    <ProjectsContainer id="projectContainer">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          url={project.url}
        />
      ))}
    </ProjectsContainer>
  );
};

export default Project;
