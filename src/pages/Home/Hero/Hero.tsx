import React from "react";
import styled from "styled-components";
import HeroImage from "./HeroImage";
import Button from "../../../components/Button/Button";
import Content from "../../../components/Typography/Content";
import circle from "../../../assets/shared/desktop/bg-pattern-small-circle.svg";
import Card from "../../../components/Card/Card";

type Props = {};

const content = {
  heading: "Award-winning custom designs and digital branding solutions",
  paragraph:
    "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
};

const Hero = (props: Props) => {
  const { heading, paragraph } = content;

  return (
    <Card>
      <StyledHero>
        <Wrapper>
          <Content
            heading={ heading }
            headingColor="primary"
            variant="h1"
            paragraph={paragraph}
            paragraphColor="light"
          />
          <Button to="/about" variant="light">
            Learn More
          </Button>
        </Wrapper>
        <HeroImage />
      </StyledHero>
    </Card>
  );
};

const StyledHero = styled.section`
  background-color: ${(props) => props.theme.colors.primary.main};
  background-image: url(${circle});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5rem 6.4% 28rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 3.75rem 3.75rem 28rem;
  }

  @media (min-width: 1440px) {
    padding: 9.0625rem 50% 9.0625rem 8%;
    display: flex;
  }

  @media (min-width: 1920px) {
    padding-left: 8%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  position: relative;
  z-index: 3;
  text-align: center;

  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export default Hero;
