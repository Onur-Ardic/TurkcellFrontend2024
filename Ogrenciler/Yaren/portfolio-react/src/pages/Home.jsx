import React from "react";
import Header from "../components/header/Header";
import Card from "../components/projects/Card";
import About from "../components/about/About";
import Skill from "../components/skills/Skill";
import data from "../helper/Projectsdata";
import Container from "../style/Container.styled";
import Experience from "../components/experience/Experience";
import MiniProjects from "../components/miniprojects/MiniProjects";
import Footer from "../components/footer/Footer";
import AnimatedTitle from "../style/AnimatedTitle.styled";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <MiniProjects />
      {/*   <Container>
        {data.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </Container> */}
      <Skill />
      <Container>
        <AnimatedTitle>Deneyimlerim</AnimatedTitle>
        {data.map((item, index) => {
          return <Experience {...item} key={index} />;
        })}
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
