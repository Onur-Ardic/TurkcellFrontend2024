import { useEffect, useState } from "react";
import "./App.css";
import CVPart from "./components/molecules/CVPart";
import EnterancePart from "./components/molecules/EnterancePart";
import InfoPart from "./components/molecules/InfoCard";
import ProjectsPart from "./components/molecules/ProjectPart";
function App() {
  const [projects, setProjects] = useState([]);
  async function getProjects() {
    await fetch(`http://localhost:3000/projects`)
      .then((data) => data.json())
      .then((response) => setProjects(response))
      .catch((e) => alert(e.message));
  }
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <EnterancePart />
      <InfoPart />

      <h1 className="header">My Projects</h1>
      <hr className="w-75 d-flex mx-auto text-bold" />
      <div className="projectContainer">
        {projects.length != 0
          ? projects.map((item, index) => <ProjectsPart project={item} />)
          : null}
      </div>
      <CVPart />
    </>
  );
}

export default App;
