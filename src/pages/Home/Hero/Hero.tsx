import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import Content from "../../../components/Typography/Content";
import HeroImage from "./HeroImage";

type Props = {};

const content = {
  heading: "Award-winning custom designs and digital branding solutions",
  paragraph:
    "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
};

const Hero = (props: Props) => {
  const { heading, paragraph } = content;

  return (
    <StyledHero>
      <Content heading={ heading } paragraph={ paragraph } />
      <Button to="/about" variant="light">Learn More</Button>
      <HeroImage />
    </StyledHero>
  );
};

const StyledHero = styled.section`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary.main};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  padding: 5rem 6.4% 28rem;
  position: relative;
  overflow: hidden;
`;

export default Hero;
