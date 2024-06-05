import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Skill from "../components/skills/Skill";
import experiences from "../data/experiences";
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
      <Skill />
      <Container>
        <AnimatedTitle>Deneyimlerim</AnimatedTitle>
        <Experience />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
