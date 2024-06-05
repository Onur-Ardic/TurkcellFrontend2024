import { useEffect, useState } from "react";
import { Button, HeaderInfo, Link, ImageContainer, CardImage, ImageOverlay, CardFooter, CardBody, Section, Header, Card } from "../../style";
import Requests from "../../../Requests";

function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const data = await Requests.get("http://localhost:3000/projects");
      setProjects(data);
    } catch (error) {
      console.error("Proje verileri çekilirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Section>
      <Header className="text-center mb-5">Projects</Header>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <Card className="card">
                <ImageContainer className="image-container">
                  <CardImage src={`/${project.imgUrl}`} alt={project.name} />
                  <ImageOverlay className="image-overlay">
                    <CardFooter className="card-footer">
                      <Button>
                        <Link href={project.githubUrl} target="_blank">GitHub</Link>
                      </Button>
                      <Button>
                        <Link href={project.demoUrl} target="_blank">Demo</Link>
                      </Button>
                    </CardFooter>
                  </ImageOverlay>
                </ImageContainer>
                <CardBody>
                  <HeaderInfo>{project.name}</HeaderInfo>
                  <p>Technologies: {project.Technology.join(", ")}</p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;
