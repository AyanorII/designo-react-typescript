import React from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Content from "../components/Typography/Content";

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
    </StyledHero>
  );
};

const StyledHero = styled.section`
  background-color: ${(props) => props.theme.colors.primary.main};
  padding: 5rem 6.4% 40.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export default Hero;
