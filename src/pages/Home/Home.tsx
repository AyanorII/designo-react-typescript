import React from "react";
import Container from "../../components/Container";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
      </Container>
      <Projects />
      <Features />
    </div>
  );
};

export default Home;
